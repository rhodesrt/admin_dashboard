import "./componentStyles.css";
import React from "react";
import Icon from "@mdi/react";
import {
  mdiDuck,
  mdiStarPlusOutline,
  mdiEyePlusOutline,
  mdiSourceBranch,
} from "@mdi/js";

const ProjectList = () => {
  return (
    <div className="projectList-container">
      <h3>Your Projects</h3>
      <div className="projects">
        <Project
          title="Super Cool Project"
          description="This project is super cool because everytime someone looks at it, they say, 'Woah! That is super Cool!' without fail."
        />
        <Project
          title="Less Cool Project"
          description="I call this one the Less Cool Project because, although it is really cool, it does not always solicit as great a reaction from people."
        />
        <Project
          title="Impossible App"
          description="This is the impossible app because, to my knowledge, nobody has been able to build it as of yet."
        />
        <Project
          title="Easy Peasy App"
          description="Yea, cmon.  Anyone can do this app.  My grandma could build this app..."
        />
        <Project
          title="Ad Blocker"
          description="It's pretty self explanatory.  It blocks ads, but the title does not include the fact that it also spawns sharks with lasers."
        />
      </div>
    </div>
  );
};

export default ProjectList;

export const Project = (props) => {
  let { title, description } = props;

  return (
    <div className="project">
      <h3>{title}</h3>
      <h3>{description}</h3>
      <div className="project-svgs">
        <a href="">
          <Icon path={mdiStarPlusOutline} />{" "}
        </a>
        <a href="">
          <Icon path={mdiEyePlusOutline} />{" "}
        </a>
        <a href="">
          <Icon path={mdiSourceBranch} />{" "}
        </a>
      </div>
    </div>
  );
};
