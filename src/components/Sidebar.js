import "./componentStyles.css";
import React, { useEffect } from "react";
import SidebarWidget from "./SidebarWidget";
import {
  mdiArrangeBringToFront,
  mdiHome,
  mdiFaceManProfile,
  mdiAndroidMessages,
  mdiHistory,
  mdiFileTree,
  mdiAccountMultiple,
  mdiCogOutline,
  mdiFaceAgent,
  mdiSunglasses,
} from "@mdi/js";
import { sidebarAnimation } from "./componentFunctions.js";

const Sidebar = () => {
  useEffect(() => {
    sidebarAnimation(
      Array.from(
        document.querySelector(".sidebar-container").querySelectorAll("a")
      )
    );
  });

  return (
    <div className="sidebar-container">
      <SidebarWidget title="Dashboard" iconPath={mdiArrangeBringToFront} />
      <div className="flex column">
        <SidebarWidget title="Home" iconPath={mdiHome} />
        <SidebarWidget title="Profile" iconPath={mdiFaceManProfile} />
        <SidebarWidget title="Messages" iconPath={mdiAndroidMessages} />
        <SidebarWidget title="History" iconPath={mdiHistory} />
        <SidebarWidget title="Tasks" iconPath={mdiFileTree} />
        <SidebarWidget title="Communities" iconPath={mdiAccountMultiple} />
      </div>
      <div className="flex column">
        <SidebarWidget title="Settings" iconPath={mdiCogOutline} />
        <SidebarWidget title="Support" iconPath={mdiFaceAgent} />
        <SidebarWidget title="Privacy" iconPath={mdiSunglasses} />
      </div>
    </div>
  );
};

export default Sidebar;
