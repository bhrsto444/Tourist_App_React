
import './App.css'
import UserStranica from './components/AUserSve'
import './components/SingUp.css'
import Singup from './components/SingUp'
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About'
function App() {
  
  return (
    
    

      <BrowserRouter>
     
        
        <Routes>
          <Route path="/" element={<Singup/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/UserStranica" element={<UserStranica/>} />
          <Route path="/About" element={<About/>} />
          
        </Routes>
     
    </BrowserRouter>
      
        
    
  )}


export default App
