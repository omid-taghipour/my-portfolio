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
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    const skillsCategories = t('skills.categories', { returnObjects: true }) || [];

    const getLogo = (logoComponent) => {
        const logoMap = {
            SiPython: <SiPython className="skill-logo" />,
            SiMysql: <SiMysql className="skill-logo" />,
            SiPhp: <SiPhp className="skill-logo" />,
            SiMongodb: <SiMongodb className="skill-logo" />,
            GrReactjs: <GrReactjs className="skill-logo" />,
            SiTailwindcss: <SiTailwindcss className="skill-logo" />,
            FaJava: <FaJava className="skill-logo" />,
            BsGit: <BsGit className="skill-logo" />,
            SiJupyter: <SiJupyter className="skill-logo" />,
            SiPowershell: <SiPowershell className="skill-logo" />,
            FaLinux: <FaLinux className="skill-logo" />,
            BiLogoAws: <BiLogoAws className="skill-logo" />,
            FaDocker: <FaDocker className="skill-logo" />,
            SiKubernetes: <SiKubernetes className="skill-logo" />,
            SiGnubash: <SiGnubash className="skill-logo" />,
            TbHeartRateMonitor: <TbHeartRateMonitor className="skill-logo" />,
            FaJenkins: <FaJenkins className="skill-logo" />,
            SiTeamcity: <SiTeamcity className="skill-logo" />,
            FaGolang: <FaGolang className="skill-logo" />,
            SiAnsible: <SiAnsible className="skill-logo" />,
            SiTerraform: <SiTerraform className="skill-logo" />,
            SiPrometheus: <SiPrometheus className="skill-logo" />,
            SiGrafana: <SiGrafana className="skill-logo" />,
            DiNginx: <DiNginx className="skill-logo" />,
            BiLogoPostgresql: <BiLogoPostgresql className="skill-logo" />,
            SiJira: <SiJira className="skill-logo" />,
            DiBitbucket: <DiBitbucket className="skill-logo" />,
            FaGithub: <FaGithub className="skill-logo" />,
            SiGithubactions: <SiGithubactions className="skill-logo" />,
            SiFlyway: <SiFlyway className="skill-logo" />
        };
        return logoMap[logoComponent] || null;
    };

    return (
        <div className='skills-container'>
            <TextAnimation tagName={'h1'} text={t('skills.title')} typingSpeed={100} classAtt={"title-text"} />
            <div className='skills-categories-container'>
                {
                    skillsCategories.map((category, index) => (
                        <div key={index} className="skills-category">
                            <h3 className="skills-category-title">{category.name}</h3>
                            <div className='skills-items'>
                                {
                                    category.skills.map(
                                        (skill) => {
                                            return <SkillsItem key={skill.id} id={skill.id} name={skill.name} logo={getLogo(skill.logoComponent)} />
                                        }
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills