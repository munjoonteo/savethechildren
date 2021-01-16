import React from "react";
import "../style/Sidebar.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Sidebar(props) {
  let disasters = props.disasters;
  const [currDisaster, setCurrDisaster] = React.useState(disasters[0]);
  const [visible, setVisible] = React.useState(false);

  let buttons = disasters.map(disaster => (
    <div className={`disaster ${visible === true ? "disaster-active" : ""}`}>
      <button
        className={`disaster-icon ${
          disaster === currDisaster ? "selected-disaster" : ""
        }`}
        onClick={() => handleChangeDisaster(disaster)}
        key={disaster}
      >
        {disaster.name[0].toUpperCase()}
      </button>
      <div className="disaster-name">{disaster.name}</div>
    </div>
  ));

  buttons.push(<div>new disaster</div>);

  function handleChangeDisaster(disaster) {
    setCurrDisaster(disaster);
  }

  function toggleMenu() {
    setVisible(!visible);
  }

  return (
    <div className={`sidebar ${visible === true ? "sidebar-active" : ""}`}>
      <div className="toggle" onClick={() => toggleMenu()}>
        <FaChevronLeft
          className={`toggle-button ${
            visible === false ? "toggle-button-inactive" : ""
          }`}
        />
        <FaChevronRight
          className={`toggle-button ${
            visible === true ? "toggle-button-inactive" : ""
          }`}
        />
      </div>
      <div className="title">Active Events</div>
      <div>{buttons}</div>
    </div>
  );
}

export default Sidebar;
