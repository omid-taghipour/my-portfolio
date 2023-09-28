import React from 'react';
import './skills-item.css';

function SkillsItem({ id, name, logo }) {
  return (
    <div className='skills-item' key={id}>
      <div className='skills-logo-container'>{logo}</div>
      <div className='skills-name-container'>{name}</div>
    </div>
  );
}

export default SkillsItem;
