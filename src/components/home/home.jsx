import './home.css'
import NavigationButton from "../navigation-button/navigation-button";
import { HiOutlineDownload } from "react-icons/hi";

const Home = () => {
    return (
        <div className={'welcome-container'}>
            <h6>Hey there! I'm </h6>
            
            <h1>Omid Taghipour</h1>
            
            <h2>I am a tech enthusiast</h2>
            
            <p>
            passionate about revolutionizing development operations. 
            Welcome to my portfolio, where I share my skills and experiences in the tech world. 
            Let's dive in and explore together! 💻🔍✨
            </p>

            <div className="home-action-buttons">
                <NavigationButton title={'read about me'} href={'#about-me'}/>
                <a href={process.env.PUBLIC_URL + '/Omid_Taghipour_Resume_EN.pdf'} target="_blank" rel="noreferrer" className="nav-button group" aria-label="View Resume">
                    View Resume
                    <span className="group-hover:translate-x-1 duration-300">
                        <HiOutlineDownload className="nav-arrow" size={20} />
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Home;