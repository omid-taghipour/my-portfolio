import './education-items.css'

import { useTranslation } from 'react-i18next';

function EducationItems({ logo, altText, title, desc, time, href }) {
    const { t } = useTranslation();
    return (
        <div className='education-item'>
            <img src={logo} alt={altText} />
            <div className='education-item-content'>
                <h3>
                    {title}
                </h3>

                <p>
                    {desc}
                </p>

                <span>
                    {time}
                </span>
                <a href={href} target='_blank' rel='noreferrer'>
                    {t('education.program_info')}
                </a>
            </div>
        </div>
    )
}

export default EducationItems;
