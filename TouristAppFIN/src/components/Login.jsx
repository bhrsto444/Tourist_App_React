
import './SingUp.css'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate2=useNavigate();
    const [logName,setLogname]=useState("");
    const[logPas,setLogPas]=useState("");

    const navigateToSingUp =(e)=>{
        navigate2('/');
        e.preventDefault();
    }
    
    function prijaviKorisnika(){
        axios.post("http://localhost:3000/korisnici/prijava", {"username":logName,"password":logPas})
            /*.then(response => { localStorage.setItem("token", response.data.token)/*, console.log(response); postaviStanje(true) })*/
            .then((response) => {
              if(response.status == 200){
                  alert("Login succesfull");
                  console.log(response.data);
                  localStorage.setItem("token", response.data.token);
                  navigate2('/UserStranica');
                  
                  
                  
              }
            })
            .catch((error) => {
              if(error.response.status === 401){
                alert("Wrong username or password");
                
            }
          })
    }
    
    
    return(
        <div id='Login'>
            <form className='formaLog' onSubmit={(e)=>e.preventDefault()}>
            <input className='itemLog'type="text" value={logName} onChange={(e)=>setLogname(e.target.value)} placeholder="username"></input>
            <input className='itemLog' type="password"value={logPas} onChange={(e)=>setLogPas(e.target.value)} placeholder="password"></input>
            <button className="btnIN" onClick={prijaviKorisnika}>Login</button>
            <button className="btnIN" onClick={navigateToSingUp}>SingUp</button>
            </form>
        </div>
    )
}

export default Login