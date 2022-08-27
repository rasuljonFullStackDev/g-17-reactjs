import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { useState } from 'react';
import Crud from './crud/Crud';
import Player from './context/Player';
import Contact from './context/pages/Contact';
function App() {
  const [ul, setUl] = useState(false)
  const menuFun = () => {
    setUl(!ul)
  }
  return (
    <div className="App">
     <Router>
       <nav>
         <div className="logo">LOGO</div>
         <ul className={ul ? "ul activ" : "ul"}>
            <li><Link onClick={menuFun} to="/">Home</Link></li>
            <li><Link onClick={menuFun} to="/about">About</Link></li>
            <li><Link onClick={menuFun} to="/contact">Contact</Link></li>
         </ul>
         <div className="menu">
           <button onClick={menuFun} id='menu_btn'>Menu</button>
         </div>
       </nav>
       <Routes>
         <Route path='/' element={<Crud/>} />
         <Route path='/about' element={<Player/>} />
         <Route path='/contact' element={<Contact/>} />
       </Routes>
     </Router>
    </div>
  );
}
export default App;
