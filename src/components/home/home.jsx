import './home.css'
import NavigationButton from "../navigation-button/navigation-button";
import { HiOutlineDownload } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className={'welcome-container'}>
            <h6>{t('home.greeting')} </h6>
            
            <h1>{t('home.title', 'Omid Taghipour')}</h1>
            
            <h2>{t('home.subtitle')}</h2>
            
            <p>
            {t('home.description')}
            </p>

            <div className="home-action-buttons">
                <NavigationButton title={t('home.read_more')} href={'#about-me'}/>
                <a href={process.env.PUBLIC_URL + '/Omid_Taghipour_Resume_EN.pdf'} target="_blank" rel="noreferrer" className="nav-button group" aria-label="View Resume">
                    {t('home.view_resume')}
                    <span className="group-hover:translate-x-1 duration-300">
                        <HiOutlineDownload className="nav-arrow" size={20} />
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Home;