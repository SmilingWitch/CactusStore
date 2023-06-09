import "./CartCard.css"
import {GoTrashcan} from "react-icons/go"
import {AiOutlinePlus} from "react-icons/ai"
import axios from "axios";
import { useState , useEffect } from "react";



const orderUrl = "http://localhost:3001/orderItem";


function CartCard() {

    const [items, setItems] = useState([{}]);
    const [totalP, setTotalP] = useState();
    const [totalI, setTotalI] = useState();

    useEffect(() => {
        loadItems();
        
    },[]);

    var totalPrice = 0;
    var totalItems = 0;

    const loadItems = async () => {
        const res = await axios.get(orderUrl);
        setItems(res.data);
        res.data.map((item) =>{
            totalPrice += item.qty * item.price;
            totalItems += item.qty ;

        });
        setTotalP(totalPrice.toFixed(2));
        setTotalI(totalItems);
    };


    const incDec = async (a,b,c,d,e,f) => {
        if(c === "dec"){
            if(a > 1){
                a -= 1;
            } else {
                 axios.delete(`http://localhost:3001/orderItem/${b}`);
                 loadItems();
            }
        } else {
           a += 1;
        }

        const order = {name:d, price:e, qty:a, photo:f }
        await axios.put(`http://localhost:3001/orderItem/${b}`, order);
        loadItems()
        console.log(items)
    };

    return (
        <div className="orderArea">
            <div className='infobar'>
                <div className='namebar'>
                    Mi carrito
                </div>
                <div className='items'>
                    <div className='totalItems'>
                        {totalI}
                    </div>
                    <div className='totalPrice'>
                        ${totalP}
                    </div>
                </div>
                </div>
                
                {items.map((item) => {
                    return <div className="cartCont">
                    <div className="productImg">
                        <img src={`/${item.photo}.jpeg`} />
                        
                    </div>
                    <div className="productInfo">
                     <div className="prodBx">
                         <div className="productName">
                              <span>{item.name}</span>
                         </div>
                         <div className="productPrice">
                              <span>${item.price}</span>
                         </div>
                     </div>

                    </div>
                    <div className="iconBx">
                        <div className="trash" onClick={() =>
                             incDec(item.qty,item.id,"dec",item.name, item.price, item.photo)}>
                                <GoTrashcan/>
                        </div>
                        <div className="addNumber">{item.qty}</div>
                        <div className="addIcon" onClick={() => {
                            incDec(item.qty,item.id,"inc",item.name, item.price,item.photo)
                        }
                             }>
                                <AiOutlinePlus/>
                        </div>
                    </div>
                    </div>
                })}
            
        </div>
                
    );
}

export default CartCard ;