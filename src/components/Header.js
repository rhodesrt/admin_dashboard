import "./componentStyles.css";
import Icon from "@mdi/react";
import { mdiMagnify, mdiBellRingOutline, mdiDuck } from "@mdi/js";
import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <SearchBar />
      <Widgets />
      <Greeting />
      <UploadButtons />
    </div>
  );
};

export default Header;

const SearchBar = () => {
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      let searchField = document
        .querySelector(".searchbar-container")
        .querySelector("input");
      searchField.value = "";
    }
  };

  return (
    <div className="searchbar-container">
      <Icon path={mdiMagnify} />
      <input onKeyUp={handleEnter} type="text"></input>
    </div>
  );
};

const Widgets = () => {
  return (
    <div className="header-widgets-container">
      <a href="">
        <Icon className="mdiBell" path={mdiBellRingOutline} />
      </a>
      <a href="">
        <Icon className="mdiDuck" path={mdiDuck} />{" "}
      </a>
      <h3>Tristan Rhodes</h3>
    </div>
  );
};

const Greeting = () => {
  return (
    <div className="greeting-container">
      <Icon className="mdiDuck" path={mdiDuck} />
      <div>
        <h3>
          Hi there,<br></br>
        </h3>
        <h2>Tristan Rhodes (@tristan)</h2>
      </div>
    </div>
  );
};

const UploadButtons = () => {
  return (
    <div className="upload-buttons-container">
      <button>New</button>
      <button>Upload</button>
      <button>Share</button>
    </div>
  );
};
