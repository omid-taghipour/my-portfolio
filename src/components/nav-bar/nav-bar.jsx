import './nav-bar.css'
import logo from '../../assets/images/logo.png'
import {useState} from "react";
import {FaBars, FaTimes,} from "react-icons/fa"

const headerItems = [
    {id: 0, name: "home", href: "#home"},
    {id: 1, name: "about me", href: "#about-me"},
    {id: 2, name: "education", href: "#education"},
    {id: 3, name: "skills", href: "#skills"},
    {id: 4, name: "contact", href: "#contact"}
]

function NavBarComponent() {
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
                                    return <a href={item.href} key={item.id}>{item.name}</a>
                                })
                            }
                        </div>
                    </div>
                    {/*  Hamburger menu  */}
                    <div className="hamburger-menu">
                        <button
                            type="button"
                            onClick={handleMenu}
                            className="normal-nav-links">

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
                                                {item.name}
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
