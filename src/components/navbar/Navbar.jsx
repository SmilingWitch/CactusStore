import { NavLink } from "react-router-dom";
import {RiCactusFill} from "react-icons/ri";
import {RiMenuLine} from "react-icons/ri";
import {useState, useEffect} from  "react";
import {BiCart} from "react-icons/bi"
import "./Navbar.css";
import { BsArrowDownShort } from "react-icons/bs";
import axios from "axios";


const orderUrl = "http://localhost:3001/orderItem" ;



function Navbar() {

    const [hMenu,setHmenu] = useState(false) ;
    const [CMenu,setCMenu] = useState(false) ;
    const [items, setItems] = useState();
    const [circle, setCircle] = useState();


    const loadItems = async () => {
        const res = await axios.get(orderUrl);
        setItems(res.data);   
    };



       /* async function handleOrder() {
            let items = 0;
            let res = await axios.get(orderUrl) ;
            res.data.map((item) =>{
                items += item.qty
            })
            setTotalItems(items)
        }
        handleOrder();*/

        const notifications = async (qty,id) => {
            let item = 0;
            if (qty !== 0) {
                item = 1 ;
            } else {
                item = 0;
            }
            setCircle(item)
        }


    return(
    <div className="bar">
        <div className="logo">
            <div className="bx">
                <div className="logo1"><RiCactusFill/></div>
                <div className="logoName">
                 <span>Plant</span> 
                 <span>Desert</span>
                </div>
            </div>  
        </div>
        
        <div className="hamburguerMenu">
            <div className="list">
                <div className="menu" >
                        <RiMenuLine className="Micon" onClick={() => {setHmenu(!hMenu)}} />
                </div>
                <ul className= {hMenu === true  ? "Active dropdown" : "notActive dropdown" } >
                    <li>
                        <NavLink to = "/"  className = {({isActive}) => (isActive ? "active " : "a")  } onClick={() => {setHmenu(!hMenu)}} >Home</NavLink>
                    </li>
                    <li>
                        {/*-----------Menu del catalogo--------- */}
                        <div className="catalogueMenu">
                        
                        <NavLink to = "/catalogue" className = {({isActive}) => (isActive ? "active " : "a")  } >
                            
                                <span className="catalogue" onClick = {() => {setHmenu(!hMenu)}} >Catalogue</span>
                                
                            
                            <div className = {CMenu === true  ? "Active1 sBar" : "notActive1 sBar" }>
                                <ul className="menu1">
                                    <li>
                                        <NavLink to = "/catalogue/cactus" className =  "cMenu"
                                         onClick={() => {
                                            setCMenu(!CMenu)
                                            setHmenu(!hMenu)
                                        }}>Cactus</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to = "/catalogue/succulent" className =  "cMenu"  onClick={() => {
                                            setCMenu(!CMenu)
                                            setHmenu(!hMenu)
                                        }} >Succulents</NavLink>
                                    </li>
                                </ul>
                            </div>  
                        </NavLink>
                        <div className="menuIndicator" onClick={() => {setCMenu(!CMenu)} }> <BsArrowDownShort className="bicon"/> </div>
                        </div>
                    </li>
                    <li>
                        <NavLink to = "/info" className = {({isActive}) => (isActive ? "active " : "a") } onClick = {() => {setHmenu(!hMenu)}}  >Information</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="user">
        <div className =  "log">Login</div> 
            {/*<NavLink to = "/login" className =  "log">
                 
                                    </NavLink>*/}
            
            <div className="sing"> Sing up</div>
        </div>

        
            <div className="cart"> 
                <NavLink to = "/cart" className =  "cCart">
                    <BiCart className="iconCart"/>
                </NavLink>
                {/*<div className = "cartCircle" >
                    <span className="articles" ></span>
                                    </div>*/}
            </div>
        

                                     
                                
        
    </div>
    )


}

export default Navbar ;