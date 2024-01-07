import {FaRegBookmark} from "react-icons/fa"
import { NavLink } from "react-router-dom"
export const Nav = (props) => {
    return (
        <>  
            <div className="nav">
                <div className="logo">
                    <img className="logo" src={props.logo} alt="logo"></img>
                </div>
                <div className="links" style={{backgroundColor: props.bg}} >
                    <NavLink className="link" to="/"><div className= {props.styleClass} ><h3>HOME</h3></div></NavLink>
                    <NavLink className="link" to="/about"><div className= {props.styleClass}><h3>ABOUT</h3></div></NavLink>
                    <NavLink className="link" to="/careers"><div className= {props.styleClass}><h3>CAREERS</h3></div></NavLink>
                    <NavLink className="link" to="/contact"><div className= {props.styleClass}><h3>CONTACT</h3></div></NavLink>
                </div>
                <div className="bookmark" style={{backgroundColor: props.bg}} >
                    <div>
                        <a href="/#Reservation"><FaRegBookmark className="book" style={{color: props.color}}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}