import React from "react";
import Icon from "@mdi/react";

const SidebarWidget = (props) => {
  return (
    <div className="sidebarWidget flex">
      <Icon path={props.iconPath} />
      <h2>
        <a href="">{props.title}</a>
      </h2>
    </div>
  );
};

export default SidebarWidget;
