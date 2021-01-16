import "../style/Header.css";
import logo from "../images/Save_The_Children_Logo.png";

function Header() {
  return (
    <div className="container">
      <div className="container-top">
        <div className="title-container">
          <img className="img" src={logo} alt="logo" />
          <div className="title">Disaster Analysis Dashboard</div>
        </div>
        <div className="settings">
          <div className="settings-button">Edit Settings</div>
          <div className="settings-button">Account</div>
        </div>
      </div>
      <div className="name">Pass in name of bushfire</div>
      <div className="container-bottom">
        <div className="tab">Overview</div>
        <div className="tab">Tweet Analysis</div>
        <div className="tab">Government Sources</div>
        <div className="tab">Civilian Status</div>
        <div className="tab">Live Response</div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Header;
