import './education.css'
import EMU from '../../assets/images/EMU.webp'
import Kiel from '../../assets/images/FH-Kiel.jpg'
import EducationItems from '../education-items/education-items';
import TextAnimation from '../text-animation/text-animation';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();
    const educations = t('education.list', { returnObjects: true }) || [];

    const getLogo = (logoName) => {
        if (logoName === 'EMU') return EMU;
        if (logoName === 'Kiel') return Kiel;
        return null;
    };

    return (
        <div className='education-container'>
            <TextAnimation tagName={'h1'} text={t('education.title')} typingSpeed={100} classAtt={"title-text"} />
            <div className='education-items-container'>
                {
                    educations.map(({id, logo, name, uni, duration, link}) => {
                        return <EducationItems key={id} logo={getLogo(logo)} altText={uni} title={uni} desc={name} time={duration} href={link} />
                    })
                }
            </div>
        </div>
    )
}

export default Education;