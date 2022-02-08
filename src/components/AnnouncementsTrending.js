import "./componentStyles.css";
import React from "react";
import Announcements from "./Announcements";
import Trending from "./Trending";

const AnnouncementsTrending = () => {
  return (
    <div className="announcementsTrending-container">
      <Announcements />
      <Trending />
    </div>
  );
};

export default AnnouncementsTrending;
