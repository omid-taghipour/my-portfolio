import React from "react";
import "./projects.css";
import TextAnimation from "../text-animation/text-animation";
import ProjectItem from "../project-item/project-item";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true }) || [];

  return (
    <div className="projects-container">
      <TextAnimation
        tagName={"h1"}
        text={t("projects.title")}
        typingSpeed={100}
        classAtt={"title-text"}
      />
      <div className="project-items-container">
        {projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
