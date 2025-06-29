
import './SingUp.css'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Singup(){
    const navigate1=useNavigate();
    
    const [usName,setUsname]=useState("");
    const[mail,setMail]=useState("");
    const[pas,setPas]=useState("");
    const navigateToLogin = (e) => {
        navigate1('/Login');
        e.preventDefault(); // Replace '/login' with the actual path of your Login page
      };
    function stvoriKorisnika() {
        if (mail != ""  && pas != "" && usName !="") {
            const podaci = {
              "username": usName,
              "email": mail,
              "password":pas
            }
    
              axios.post("http://localhost:3000/korisnici", podaci)
    
                  .then(response => { console.log(response);localStorage.setItem("token", response.data.token);navigate1('/UserStranica');  })
                  /*.then(postaviStanje(true))*/
                  .catch(error => {
                    console.log(error);
                    if(error.response.status === 401){
                      alert("Username or email already used or password has less then 3 characters");
                      }
                  })
              
          }
      }
    const onSubmit = (e) => {
        
        e.preventDefault();
        
        
    }
    return(
        <div id='SingUP'>
            <form className='formaLog' onSubmit={onSubmit}>
                
                <input className='itemSing' type="text"value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="email"></input>
                <input className='itemSing'type="text" value={usName} onChange={(e)=>setUsname(e.target.value)} placeholder="username"></input>
                <input className='itemSing' type="password"value={pas} onChange={(e)=>setPas(e.target.value)} placeholder="password"></input>
                <button className="btnIN" onClick={stvoriKorisnika} >SingUp</button>
                <p id="sing">Already have an Account?</p>
                <button className='btnIN' onClick={navigateToLogin}>Login</button>
            </form>
        </div>
    )
}

export default Singup