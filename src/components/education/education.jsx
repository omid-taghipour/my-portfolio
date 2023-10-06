import './education.css'
import EMU from '../../assets/images/EMU.webp'
import Kiel from '../../assets/images/FH-Kiel.jpg'
import EducationItems from '../education-items/education-items';
import TextAnimation from '../text-animation/text-animation';

function Education() {
    const educations = [
        {id:1,logo:EMU, name:"B.S. in  Information Technology", uni: "Eastern Mediterranean University", duration:"Feb 2018 - Jul 2021", link:"https://www.emu.edu.tr/en/programs/information-technology-undergraduate-program/925"},
        {id:2,logo:Kiel, name:"M.S. in Data Science", uni: "Kiel University of Applied Science", duration:"Sep 2022 - Present", link:"https://www.fh-kiel.de/en/degree-courses/courses/data-science/"},
    ]

    return (
        <div className='education-container'>
            <TextAnimation tagName={'h1'} text={'education'} typingSpeed={100} classAtt={"title-text"} />
            <div className='education-items-container'>
                {
                    educations.map(({id, logo, name, uni, duration, link}) => {
                        return <EducationItems key={id} logo={logo} altText={uni} title={uni} desc={name} time={duration} href={link} />
                    })
                }
            </div>
        </div>
    )
}

export default Education;