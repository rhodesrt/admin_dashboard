import "./componentStyles.css";
import React from "react";

const Announcements = () => {
  return (
    <div className="container">
      <h3>Announcements</h3>
      <div className="announcements-container">
        <div className="announcement">
          <h3>Site Maintenance</h3>
          <h3>This is the site maintenance message.</h3>
        </div>
        <div className="announcement">
          <h3>Community Share Day</h3>
          <h3>Share your content on the message boards!</h3>
        </div>
        <div className="announcement">
          <h3>Updated Privacy Policy</h3>
          <h3>We are making a move to respect user privacy.</h3>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
