// import logo from './logo.svg';
import { Home } from 'react-ionicons';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import All from './pages/All';
import Navbar from './components/navbar/Navbar';
import Info from './components/info/Info';
import Cactus from './components/cactus/Cactus';
import Suculentas from './components/suculentas/Suculentas';
import Error from './components/error/Error';
import HamburguerMenu from './components/hamburguerMenu/HamburguerMenu';
import PrincipalPage from './components/pricipalPage/PrincipalPage';
import CartTotal from './components/cartTotal/CartTotal';
import LogIn from './components/logIn/LogIn';
import Menu from "./components/menu/Menu"





function App() {
  return ( 
   <div>

     <Navbar></Navbar>
      
      <Routes>
        <Route path = "*" element = { <PrincipalPage /> } />
        <Route path = "/catalogue" element = {<All/>}/>
        <Route path = "/catalogue/cactus" element = {<Cactus/>}/>
        <Route path = "/catalogue/succulent" element = {<Suculentas/>}/>
        <Route path = "/*" element = {<Error/>}> </Route>
        <Route path = "/info" element = {<Info/>}/>
        <Route path = "/cart" element = {<CartTotal/>}/>
        <Route path = "/login" element = {<LogIn/>}/>
  </Routes>
  </div>
    
  );
}

export default App;
