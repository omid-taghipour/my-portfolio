import './nav-bar.css'
import logo from '../../assets/images/logo.png'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from '../theme-toggle/theme-toggle';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { useTranslation } from "react-i18next";

const headerItems = [
    {id: 0, name: "home", href: "#home"},
    {id: 1, name: "about me", href: "#about-me"},
    {id: 2, name: "education", href: "#education"},
    {id: 3, name: "skills", href: "#skills"},
    {id: 4, name: "projects", href: "#projects"},
    {id: 5, name: "contact", href: "#contact"}
]

function NavBarComponent() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen((prev) => !prev);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div id="nav-bar" className="nav-bar-main">
                <div className="nav-bar-container">
                    <div className="nav-bar-logo">
                        <button onClick={scrollToTop}><img src={logo} alt="Logo"/></button>
                    </div>
                    {/* Nav links */}
                    <div className="nav-bar-links-container">
                        <div className="nav-bar-links">
                            {
                                headerItems.map((item) => {
                                    return <a href={item.href} key={item.id}>{t(`nav.${item.name.replace(' ', '_')}`)}</a>
                                })
                            }
                        </div>
                        <div className="hidden md:flex items-center">
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div className="hamburger-menu flex items-center md:hidden">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <button
                            type="button"
                            onClick={handleMenu}
                            className="normal-nav-links ml-4">

                            <span className="sr-only">Open Main Menu</span>
                            {open === true ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                </div>

            </div>
            {/*  Mobile Menu  */}
            {
                open ? (
                    <div className="mobile-nav-links-container">
                        <div className="mobile-nav-links">
                            {
                                headerItems.map((item) => {
                                        return (
                                            <a
                                                href={item.href}
                                                key={item.id}
                                                className="responsive-nav-links"
                                                onClick={() => setOpen(false)}
                                            >
                                                {t(`nav.${item.name.replace(' ', '_')}`)}
                                            </a>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

export default NavBarComponent;
