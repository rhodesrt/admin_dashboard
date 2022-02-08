import "./componentStyles.css";
import React from "react";
import { mdiDuck, mdiFootPrint, mdiFruitPineapple } from "@mdi/js";
import Icon from "@mdi/react";

const Trending = () => {
  return (
    <div className="container">
      <h3>Trending</h3>
      <div className="trending-container">
        <div className="trend">
          <Icon path={mdiDuck} className="mdiDuck" />
          <div className="flex column">
            <h3>@Tristan</h3>
            <h3>Super Cool Project</h3>
          </div>
        </div>
        <div className="trend">
          <Icon path={mdiFootPrint} className="mdiFootPrint" />
          <div className="flex column">
            <h3>@Alex</h3>
            <h3>World Peace Builder</h3>
          </div>
        </div>
        <div className="trend">
          <Icon path={mdiFruitPineapple} className="mdiFruitPineapple" />
          <div className="flex column">
            <h3>@Kendall</h3>
            <h3>Life Changing App</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
