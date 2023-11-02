import React from "react";
import "./skills-item.css";

function SkillsItem({ id, name, logo }) {
  return (
    <div key={id} className="skills-item">
      <div>
        <div className="skills-logo-container">{logo}</div>
        <div className="skills-name-container">{name}</div>
      </div>
    </div>
  );
}

export default SkillsItem;
