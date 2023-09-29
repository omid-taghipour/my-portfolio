import React from 'react'
import './projects.css'
import TextAnimation from '../text-animation/text-animation';
import ProjectItem from '../project-item/project-item';

function Projects() {
    const projects = [
        {
            id: 1,
            name: "competition grading system",
            langs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            image: '',
            state: 'active'
        },
        {
            id: 2,
            name: "COVID-19 test evaluation using web scraping",
            langs: ['HTML', 'CSS', 'JavaScript', 'bootstrap', 'python', 'django'],
            image: '',
            state: 'active'
        },
        {
            id: 3,
            name: "animal shelter management system",
            langs: ['HTML', 'CSS', 'JavaScript', 'bootstrap', 'jQuery', 'Ajax', 'PHP', 'MySQL'],
            image: '',
            state: 'inactive'
        },
        {
            id: 4,
            name: "blog",
            langs: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
            image: '',
            state: 'active'
        }
    ]
    return (
        <div className='projects-container'>
            <TextAnimation tagName={'h1'} text={'Projects'} typingSpeed={100} classAtt={"title-text"} />
            <div className='project-items-container'>
                {
                    projects.map(
                        (project) => {
                            return (
                                <ProjectItem project={project} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Projects;