import { HamburgerMenu } from "./mobileView"
import logo from "./../images/Logo.png"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"

export const HeroSmallScreen = () => {
    return (
        <>
            <div className="hero-section hero-sm">
                <div className="gradient-overlay">
                    <HamburgerMenu logo={logo}/>
                    <div className="hero-content">
                        <div className="h-contentA h-sm">
                            <h1>The Best</h1>
                            <h1>Italian</h1>
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