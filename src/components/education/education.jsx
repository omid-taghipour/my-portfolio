import './education.css'
import EMU from '../../assets/images/EMU.webp'
import Kiel from '../../assets/images/FH-Kiel.jpg'
import EducationItems from '../education-items/education-items';
import TextAnimation from '../text-animation/text-animation';

function Education() {
    return (
        <div className='education-container'>
            <TextAnimation tagName={'h1'} text={'education'} typingSpeed={100} classAtt={"title-text"} />
            <div className='education-items-container'>
                <EducationItems
                    logo={EMU}
                    altText={"Eastern Mediterranean University"}
                    title={"Eastern Mediterranean University"}
                    desc={'B.S. in  Information Technology'}
                    time={'Feb 2018 - Jul 2021'}
                    href={'https://www.emu.edu.tr/en/programs/information-technology-undergraduate-program/925'}
                />

                <EducationItems
                    logo={Kiel}
                    altText={"Kiel University of Applied Sciences"}
                    title={"Kiel University of Applied Sciences"}
                    desc={'M.S. in Data Science'}
                    time={'Sep 2022 - Present'}
                    href={'https://www.fh-kiel.de/en/degree-courses/courses/data-science/'}
                />
            </div>
        </div>
    )
}

export default Education;