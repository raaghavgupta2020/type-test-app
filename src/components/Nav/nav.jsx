import logo from "./../../assets/logo.png"
import "./nav.css"
const Nav = () => {
    return ( 
        <div className="nav">
            <div className="nav-left">
                <img src={logo} alt="header image" className="header-image"/>
                <h2>FlashType</h2>
            </div>
            <div className="nav-right">
                <a className="githublink" href="https://github.com/raaghavgupta2020">RAGHAV GUPTA</a>
            </div>
        </div>
    );
}
 
export default Nav;