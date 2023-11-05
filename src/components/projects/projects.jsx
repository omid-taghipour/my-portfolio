import React from "react";
import "./projects.css";
import TextAnimation from "../text-animation/text-animation";
import ProjectItem from "../project-item/project-item";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "competition grading system",
      langs: ["html", "css", "javascript", "php", "mysql"],
      image: "",
      desc: "Web application designed for BITEK competition jury members in order to rate teams participated in the competition.",
      state: "active",
    },
    {
      id: 2,
      name: "COVID-19 test evaluation using web scraping",
      langs: ["html", "css", "javascript", "bootstrap", "python", "django"],
      image: "",
      desc: "Web application designed as a part of student portal of universities to track and evaluate students COVID-19 test results. Evaluates results by scraping data from official test result system.",
      state: "active",
    },
    {
      id: 3,
      name: "animal shelter management system",
      langs: [
        "html",
        "css",
        "javascript",
        "bootstrap",
        "jQuery",
        "Ajax",
        "php",
        "mysql",
      ],
      image: "",
      desc: "Web application for animal shelters. Ables to manage different fields related to animal shelters such as animal tracking, kernel managements, veterinary, and different types of costs.",
      state: "inactive",
    },
    {
      id: 4,
      name: "blog",
      langs: ["html", "css", "Bootstrap", "php", "mysql"],
      image: "",
      desc: "Web application to let people to share content with each other.",
      state: "active",
    },
  ];
  return (
    <div className="projects-container">
      <TextAnimation
        tagName={"h1"}
        text={"Projects"}
        typingSpeed={100}
        classAtt={"title-text"}
      />
      <div className="project-items-container">
        {projects.map((project) => {
          return <ProjectItem project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
