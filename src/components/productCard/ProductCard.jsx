
import "./ProductCard.css"
import {AiOutlinePlus} from "react-icons/ai"
import img1 from "./1.jpeg"
import axios from "axios";
import { useState , useEffect } from "react";
import { json } from "react-router-dom";

const orderUrl = "http://localhost:3001/orderItem"


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

function createCart(name,price,photo) {
    const order = newOrder(name,price,photo,1);
    axios.post(orderUrl, order);
}

function ProductCard({name , precio, img}) {

    const addItem = async(name,price,photo) => {
        
        let isExisting = false;
        const res = await axios.get(orderUrl);
                
        if (cartNotExist(res)) {
            createCart(name,price,photo)
            return
        }

        res.data.map( (orderItem) => {
            if (name === orderItem.name) {
                orderItem.qty += 1;
                const order = newOrder(name,price,photo,orderItem.qty)
                axios.put(`${orderUrl}/${orderItem.id}`,order);
                isExisting = true ;
            }               
        });

        if (isExisting == false) {                            
            const order = newOrder(name,price,photo,1)
            axios.post(orderUrl,order);
        }
        
    }
    
    return (
        <div className="allCard1">
            <div className="card12">
                <div className="imgBx1">
                        <img src={`./${img}.jpeg`}  />
                </div>
                <div className="namePlant">
                        {name}
                </div>
                <div className="information">
                   
                    <div className="price">
                        <span>${precio}</span>
                    </div>
                    <div className="add" onClick={() => addItem(name,precio,img)}>
                        <AiOutlinePlus/>
                    </div>
                </div>
               
            </div>
            {/*<div className="mmm">
                <img src={img1} alt="" />
    </div>*/}
        </div>
    );
}

export default ProductCard ;