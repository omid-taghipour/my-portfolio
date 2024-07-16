import './home.css'
import NavigationButton from "../navigation-button/navigation-button";

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

            <NavigationButton title={'read about me'} href={'#about-me'}/>
        </div>
    );
}

export default Home;