import React from 'react'
import './project-item.css'

function ProjectItem({ project }) {
    const { id, name, langs, image, desc, state } = project;

    if (state === 'active'){
        return (
            <div key={id} className='project-item group'>
                {image && <img src={image} alt={name + " cover image"} className='project-cover'/>}
                <h2 className='project-title'>{name}</h2>
                <p className='project-desc'>{desc}</p>
                <div className='project-lags'>
                    {langs.map((lang, index) => (
                        <span key={index} className='project-lang-tag'>{lang}</span>
                    ))}
                </div>
            </div>
        )
    } else{
        return;
    }
}

export default ProjectItem; 