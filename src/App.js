// import logo from './logo.svg';
import './App.css';
import PrincipalPage from './components/pricipalPage/PrincipalPage';
import { Routes, Route } from 'react-router-dom';
import All from './pages/All';
import Navbar from './components/navbar/Navbar';
import Info from './components/info/Info';
import Cactus from './components/cactus/Cactus';
import Suculentas from './components/suculentas/Suculentas';
import Error from './components/error/Error';
import HamburguerMenu from './components/hamburguerMenu/HamburguerMenu';
import CartAdd from './components/cartAdd/CartAdd';



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
        <Route path = "/cart" element = {<CartAdd/>}/>
  </Routes>
    </div>
    
  );
}

export default App;
