import React from "react";
import "./componentStyles.css";
import ProjectList from "./ProjectList";
import AnnouncementsTrending from "./AnnouncementsTrending";

const Content = () => {
  return (
    <div className="content-container">
      <ProjectList />
      <AnnouncementsTrending />
    </div>
  );
};

export default Content;
