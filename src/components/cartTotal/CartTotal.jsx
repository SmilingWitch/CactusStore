import  './CartTotal.css'
import CartCard from "../cartCard/CartCard"
import axios from "axios";
import { useState , useEffect, Context } from "react";


function CartTotal() {
    return (
       <div className="cartPP">
            <div className='petitionsBx'>
                <div className='gridCart'>
                <CartCard className = "cardcart"/>           
                </div>
            </div> 
            <div className='order'>
               Comprar 
            </div>           
        </div>
         
    );
}

export default CartTotal ;