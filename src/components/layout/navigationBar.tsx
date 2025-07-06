import DisplayCard from "../displayCard";
import "./navStyle.css";
const NavigationBar = () => {
  return (
    <DisplayCard>
      <div className="navbar">
        <div className="navbar-logo">Clinton English Coaching</div>

        <div className="navbar-links">
          <a href="#" className="navbar-link login">
            Login
          </a>
        </div>
      </div>
    </DisplayCard>
  );
};

export default NavigationBar;
