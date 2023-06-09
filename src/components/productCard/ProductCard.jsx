
import "./ProductCard.css"
import {AiOutlinePlus} from "react-icons/ai"
import img1 from "./1.jpeg"
import axios from "axios";
import { useState , useEffect } from "react";
import { json } from "react-router-dom";


const orderUrl = "http://localhost:3001/orderItem"
const qty = 1;

function newOrder(name,price,photo,qty) {
    return {
        name: name,
        price: price,
        photo:photo,
        qty:qty
    }
}

function cartNotExist(res) {
    return res.data.length == 0
}

function createCart(name,price,photo,qty) {
    const order = newOrder(name,price,photo,1);
    axios.post(orderUrl, order);
}

function ProductCard({name , precio, img}) {

    

    const addItem = async(name,price,img,qty) => {
        
        let isExisting = false;
        const res = await axios.get(orderUrl);
                
        if (cartNotExist(res)) {
            createCart(name,price,img,qty)
            return
        }

        res.data.map( (orderItem) => {
            if (name === orderItem.name) {
                orderItem.qty += 1;
                const order = newOrder(name,price,img,orderItem.qty)
                axios.put(`${orderUrl}/${orderItem.id}`,order);
                isExisting = true ;
            }               
        });

        if (isExisting == false) {                            
            const order = newOrder(name,price,img,qty)
            axios.post(orderUrl,order);
        }
        
    }
    
    return (
        <div className="allCard1">
            <div className="card12">
                <div className="imgBx1">
                        <img src={`/${img}.jpeg`}  />
                </div>
                <div className="namePlant">
                        {name}
                </div>
                <div className="information">
                   
                    <div className="price">
                        <span>${precio}</span>
                    </div>
                    <div className="add" onClick={() => addItem(name,precio,img,qty,img)}>
                        <AiOutlinePlus/>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default ProductCard ;