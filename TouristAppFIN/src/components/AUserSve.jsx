 
import Formtrip from "./FormTrip"
import MYtrips from "./MyTrips"
import Navbar from "./NavBar"


 function UserStranica(){
    
    return(
    <div id="UserSve">
        <div id="pozadina">
        <header id="head">

        <Navbar/>
        
        
        </header>
        <h1 id="Enjoy">Enjoy your trip</h1>
        
        <div id="trips">
        
        <h2 className="tripH">My Trip</h2>
        <Formtrip></Formtrip>
        </div></div>

        <div id="AllTrips">
        <h2>All trips</h2>
        <MYtrips/>
        
        </div>

        
    </div>
    )
 }

 export default UserStranica;