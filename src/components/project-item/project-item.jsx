import React from 'react'
import './project-item.css'

function ProjectItem({ project }) {
    const { id, name, langs, image, desc, state } = project;

    if (state == 'active'){
        return (
            <div key={id} className='project-item'>
                <img src={image} alt={name + " cover image"} className='project-cover'/>
                <h2 className='project-title'>{name}</h2>
                <p className='project-desc'>{desc}</p>
                {/* To-Do: Use language icons from react icons library */}
                <pre className='project-lags'>{langs}</pre>
            </div>
        )
    } else{
        return;
    }
}

export default ProjectItem; 