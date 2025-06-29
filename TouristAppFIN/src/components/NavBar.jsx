//import UserStranica from "./AUserSve";
//import { MenuItems } from "./MenuItems"
import "./NavBarStyles.css"
import logo from "./travel.png"
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate=useNavigate();
    const navigateToSingUp=(e)=>{
        navigate('/');
        localStorage.removeItem('token')
        e.preventDefault();
    }
    const navigateInfo=()=>{
        navigate('/About');
    }
    const navigateTrips=()=>{
        navigate('/UserStranica');
    }
    return (
        <nav className="NavBaritems">
            
            <ul className="nav-menu">
                <li>
                <button className="btnIN" onClick={(navigateTrips)}>
                    <i className="fa fa-home"> </i> Home
                    
                </button>
                </li>


                <li>
                <button className="btnIN" onClick={navigateInfo}>
                    <i className="fa fa-info">  </i> About
                </button>
               
                </li>
                
                <li>
                <button id="logout" className="btnIN" onClick={navigateToSingUp}><i className="fa fa-sign-out" aria-hidden="true"> </i> Logout</button> 
                
                </li>
            </ul> 
            <div className="navbar-logo"><h2 >WeTravel</h2>
            <img src={logo}/></div>
            
            
        </nav>
    )
   }
export default  Navbar