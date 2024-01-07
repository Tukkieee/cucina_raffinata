import { Nav } from "../Components/nav"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import logo from "./../images/Logo.png"

export const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="gradient-overlay">
                    <Nav logo={logo} styleClass="nav-link"/>
                    <div className="hero-content">
                        <div className="h-contentA">
                            <h1>The Best Italian </h1>
                            <h1>Cuisine</h1>
                        </div>
                        <div className="h-contentB">
                            <h6>BOOK A RESERVATION</h6>
                            <div className="bounce">
                                <a style={{color:"#fff"}} href="/#Reservation"><MdOutlineKeyboardDoubleArrowDown className="down-arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}