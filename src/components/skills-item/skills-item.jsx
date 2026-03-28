import "./skills-item.css";

function SkillsItem({ name, logo }) {
  return (
    <div className="skills-item-wrapper group">
      <div className="skills-item-box">
        <div className="skills-logo-container">{logo}</div>
      </div>
      <div className="skills-name-container">{name}</div>
    </div>
  );
}

export default SkillsItem;
