import React from 'react'
import TextAnimation from '../text-animation/text-animation'
import './skills.css'
import SkillsItem from '../skills-item/skills-item'
import {SiPython} from 'react-icons/si'
import {DiDjango} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiLaravel} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {BsGit} from 'react-icons/bs'
import {SiJupyter} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'
import {SiPlotly} from 'react-icons/si'
import {SiPytorch} from 'react-icons/si'
import {SiTensorflow} from 'react-icons/si'
import {SiPowerbi} from 'react-icons/si'
import {SiPowershell} from 'react-icons/si'
import {FaUbuntu} from 'react-icons/fa'
import {BiLogoAws} from 'react-icons/bi'


function Skills() {
    const skills = [
        { id: 1, name: "python", logo: <SiPython className="skill-logo" /> },
        { id: 2, name: "Django", logo: <DiDjango className="skill-logo" /> },
        { id: 3, name: "mySQL", logo: <SiMysql className="skill-logo" /> },
        { id: 4, name: "PHP", logo: <SiPhp className="skill-logo" /> },
        { id: 5, name: "laravel", logo: <SiLaravel className="skill-logo" /> },
        { id: 6, name: "mongoDB", logo: <SiMongodb className="skill-logo" /> },
        { id: 7, name: "react JS", logo: <GrReactjs className="skill-logo" /> },
        { id: 8, name: "Tailwindcss", logo: <SiTailwindcss className="skill-logo" /> },
        { id: 9, name: "java", logo: <FaJava className="skill-logo" /> },
        { id: 10, name: "git", logo: <BsGit className="skill-logo" /> },
        { id: 11, name: "Jupyter", logo: <SiJupyter className="skill-logo" /> },
        { id: 12, name: "numpy", logo: <SiNumpy className="skill-logo" /> },
        { id: 13, name: "pandas", logo: <SiPandas className="skill-logo" /> },
        { id: 14, name: "plotly", logo: <SiPlotly className="skill-logo" /> },
        { id: 15, name: "pyTorch", logo: <SiPytorch className="skill-logo" /> },
        { id: 16, name: "tensorFlow", logo: <SiTensorflow className="skill-logo" /> },
        { id: 17, name: "power BI", logo: <SiPowerbi className="skill-logo" /> },
        { id: 18, name: "powerShell", logo: <SiPowershell className="skill-logo" /> },
        { id: 19, name: "ubuntu", logo: <FaUbuntu className="skill-logo" /> },
        { id: 20, name: "AWS", logo: <BiLogoAws className="skill-logo" /> },
    ]

    return (
        <div className='skills-container'>
            <TextAnimation tagName={'h1'} text={'Skills'} typingSpeed={100} classAtt={"title-text"} />
                <div className='skills-items'>
                    {
                        skills.map(
                            (skill) => {
                                return <SkillsItem key={skill.id} id={skill.id} name={skill.name} logo={skill.logo} />
                            }
                        )
                    }
                </div>
        </div>
    )
}

export default Skills