
import './FormTrip.css'
import {  useState } from 'react';
import axios from "axios";
function Formtrip() {


    const [ime, postaviIme] = useState("");
    
    const [vrijeme, postaviVrijeme] = useState("");
    const [ljudi, postaviLjude] = useState(0);
    const [prijevoz, postaviPrijevoz] = useState("");
    const [lokacija, postaviLokaciju] = useState("");
    const [budget, setBudget] = useState(0);// number pa string
    
    
    const onSubmit = (e) => {
        
        e.preventDefault();
        
    }
    
    
    
    
    function stvoriPut() {
       
        
        if (vrijeme != "" && ljudi > 0 && lokacija != "" && prijevoz != "" && ime != "") {
            const b = Number(budget);
            const p = Number(ljudi);
            const podaci = {
                "name": ime,
                "timeTravel": vrijeme,
                "budget": b,
                "people": p,
                "location": lokacija,
                "transport": prijevoz
                
            }

            axios.post("http://localhost:3000/putevi/dodaj",podaci, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                })
                .then(response => { console.log(response) }
                )
                
                .then(location.reload())
                .catch(error => console.log(error))
            
        }

    }
    



    return (
        //signup / login
        <div id="TripContainer">
            <form id="FormTrip" onSubmit={onSubmit}>

                <label className='item'>
                    Trip Name:</label>
                    <input className='itemI' type="text" name="name" value={ime}
                        onChange={(e) => postaviIme(e.target.value)} />
                

                <label className='item'>
                    Travel time:</label>

                    <input className='itemI' type="date" name="traveTime" value={vrijeme} onChange={(e) => postaviVrijeme(e.target.value)} />
                
                <label className='item'>
                    Budget:{budget} €</label>
                    <input className='itemI'
                        type="range"
                        min="0"
                        max={10000}
                        onChange={(e) => setBudget(e.target.value)}

                        value={budget} /> {/*console.log(typeof(budget))--string ipak???*/}
                


                <label className='item' >People:</label>
                    <input className='itemI' name="pepole" type="number" value={ljudi} onChange={(e) => postaviLjude(e.target.value)} />

                <label className='item' >Location:</label>
                    <input className='itemI' name="location" type="text" value={lokacija} onChange={(e) => postaviLokaciju(e.target.value)} />
                

                <label className='item'>
                    Pick your transport:</label>
                    <select className='itemI'
                        onChange={(e) => {
                            const odabraniPrijevoz = e.target.value;
                            postaviPrijevoz(odabraniPrijevoz)
                        }} >

                        <option value="car">Car</option>
                        <option value="airplane">Airplane</option>
                        <option value="boat">Boat</option>
                        <option value="bus">Bus</option>
                    </select>
                    
                

                <button className="btnIN" type="submit" onClick={stvoriPut}>Submit</button>

            </form>

        </div>


    )
}

export default Formtrip