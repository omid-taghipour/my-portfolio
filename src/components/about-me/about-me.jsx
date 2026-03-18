import './about-me.css'
import circleMe from '../../assets/images/me-circle.png'
import TextAnimation from '../text-animation/text-animation'
import { useTranslation } from 'react-i18next'

function AboutMe() {
    const { t } = useTranslation()
    return (
        <div className='about-me-container'>
            <TextAnimation tagName={'h1'} text={t('about.title')} typingSpeed={100} classAtt={"title-text"} />
            <div className='about-me-content'>
                <img src={circleMe} alt="Me" />
                <div className="flex flex-col gap-4">
                    <p>{t('about.paragraph1')}</p>
                    <p>{t('about.paragraph2')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe