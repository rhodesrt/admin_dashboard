import "./components/componentStyles.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
