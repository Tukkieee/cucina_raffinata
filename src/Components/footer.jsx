import logo_black from "./../images/Logo‎1.png"
import { Link } from "react-router-dom"
export const Footer = () => {
    return (
        <>
            <div className="footer_content">
                <div className="link_container">
                    <Link className="footer-link" to="/"><div className="f-l"><h3>HOME</h3></div></Link>
                    <Link className="footer-link" to="/about"><div className="f-l"><h3>ABOUT</h3></div></Link>
                    <Link className="footer-link" to="/careers"><div className="f-l"><h3>CAREERS</h3></div></Link>
                    <Link className="footer-link" to="/contact"><div className="f-l"><h3>CONTACT</h3></div></Link>
                </div>
                <div >
                    <img className="logo" src={logo_black} alt="logo"></img>
                </div>
            </div>
        </>
    )
}