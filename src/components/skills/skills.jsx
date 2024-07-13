import React from 'react'
import TextAnimation from '../text-animation/text-animation'
import './skills.css'
import SkillsItem from '../skills-item/skills-item'
import { SiPython, SiMysql, SiPhp, SiMongodb, SiTailwindcss, SiJupyter, SiPowershell, SiTeamcity, SiKubernetes, SiGnubash, SiAnsible, SiTerraform, SiPrometheus, SiGrafana, SiJira, SiGithubactions, SiFlyway } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaJava, FaLinux, FaJenkins, FaDocker, FaGithub } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { BiLogoAws, BiLogoPostgresql } from 'react-icons/bi';
import { TbHeartRateMonitor } from 'react-icons/tb';
import { FaGolang } from 'react-icons/fa6';
import { DiNginx, DiBitbucket } from 'react-icons/di';


function Skills() {
    const skills = [
        { id: 1, name: "python", logo: <SiPython className="skill-logo" /> },
        { id: 2, name: "mySQL", logo: <SiMysql className="skill-logo" /> },
        { id: 3, name: "PHP", logo: <SiPhp className="skill-logo" /> },
        { id: 4, name: "mongoDB", logo: <SiMongodb className="skill-logo" /> },
        { id: 5, name: "react JS", logo: <GrReactjs className="skill-logo" /> },
        { id: 6, name: "Tailwindcss", logo: <SiTailwindcss className="skill-logo" /> },
        { id: 7, name: "java", logo: <FaJava className="skill-logo" /> },
        { id: 8, name: "git", logo: <BsGit className="skill-logo" /> },
        { id: 9, name: "Jupyter", logo: <SiJupyter className="skill-logo" /> },
        { id: 10, name: "powerShell", logo: <SiPowershell className="skill-logo" /> },
        { id: 11, name: "linux", logo: <FaLinux className="skill-logo" /> },
        { id: 12, name: "AWS", logo: <BiLogoAws className="skill-logo" /> },
        { id: 13, name: "docker", logo: <FaDocker className="skill-logo" /> },
        { id: 14, name: "kubernetes", logo: <SiKubernetes className="skill-logo" /> },
        { id: 15, name: "bash", logo: <SiGnubash className="skill-logo" /> },
        { id: 16, name: "zabbix", logo: <TbHeartRateMonitor className="skill-logo" /> },
        { id: 17, name: "jenkins", logo: <FaJenkins className="skill-logo" /> },
        { id: 16, name: "TeamCity", logo: <SiTeamcity className="skill-logo" /> },
        { id: 17, name: "go", logo: <FaGolang className="skill-logo" /> },
        { id: 18, name: "ansible", logo: <SiAnsible className="skill-logo" /> },
        { id: 19, name: "terraform", logo: <SiTerraform className="skill-logo" /> },
        { id: 20, name: "prometheus", logo: <SiPrometheus className="skill-logo" /> },
        { id: 21, name: "grafana", logo: <SiGrafana className="skill-logo" /> },
        { id: 22, name: "NGINX", logo: <DiNginx className="skill-logo" /> },
        { id: 23, name: "postgres", logo: <BiLogoPostgresql className="skill-logo" /> },
        { id: 24, name: "Jira", logo: <SiJira className="skill-logo" /> },
        { id: 25, name: "Bitbucket", logo: <DiBitbucket className="skill-logo" /> },
        { id: 26, name: "github", logo: <FaGithub className="skill-logo" /> },
        { id: 27, name: "github actions", logo: <SiGithubactions className="skill-logo" /> },
        { id: 28, name: "flyway", logo: <SiFlyway className="skill-logo" /> },
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