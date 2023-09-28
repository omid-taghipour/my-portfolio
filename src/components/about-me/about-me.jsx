import './about-me.css'
import circleMe from '../../assets/images/me-circle.png'
import TextAnimation from '../text-animation/text-animation'
function AboutMe() {
    return (
        <div className='about-me-container'>
            <TextAnimation tagName={'h1'} text={'about me'} typingSpeed={100} classAtt={"title-text"} />
            <div className='about-me-content'>
                <img src={circleMe} alt="Me" />
                <p>
                    I'm Omid, a passionate programmer with a primary focus on web development. 💻 My journey in the tech world started early, and I've been tinkering with computers since I was a kid. In fact, my curiosity often led to some adventures in breaking down computer operating systems – a true learning experience! 🤓

                    I hold a bachelor's degree in Information Technology 🎓, and I'm currently on the exciting path of pursuing a master's degree in data science 📊. My educational journey has been instrumental in shaping my career.

                    What drives me in the tech realm? Well, I thrive on challenges. 💪 I enjoy diving into complex problems, devising ingenious solutions 💡, and meticulously analyzing each option to find the most efficient path.

                    But what truly gets me going is the world of data science. 🌟 I'm passionate about harnessing the power of data 📈 and translating it into real-life solutions. Combining my programming and web development skills with the magic of data science is where I see my future shining. ✨
                </p>
            </div>
        </div>
    )
}

export default AboutMe