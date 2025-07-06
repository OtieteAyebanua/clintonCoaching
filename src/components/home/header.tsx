import "./style.css"
import { FaBook } from "react-icons/fa";
const Header =()=>{
    return <>
     <div className="hero-section">
      <h1>
        Find The <br />
        <span className="highlight">Perfect English Teacher</span>
      </h1>
       <div className="search-container">
      <div className="search-input">
        <div className="search-placeholder">
          <FaBook className="search-icon" />
          <span>
           <input className="search-try" type="text" placeholder="Find a teacher"/>
          </span>
        </div>
        <button className="search-button">Seek</button>
      </div>
    </div>
    </div>
    </>
}

export default Header;