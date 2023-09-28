import './home.css'
import NavigationButton from "../navigation-button/navigation-button";

const Home = () => {
    return (
        <div className={'welcome-container'}>
            <h6>Hey there! I'm </h6>
            <h1>Omid Taghipour</h1>
            <h2>I am a Full Stack Developer, and Data Science student</h2>
            <p>I'm all about Development and Data Science, and this is where I get to show off the cool stuff I've been working
                on. Dive into my projects, skills, and journey through the tech world. Let's dive in and explore
                together! 💻🔍✨
            </p>
            <NavigationButton title={'read about me'} href={'#about-me'}/>

        </div>
    );
}

export default Home;