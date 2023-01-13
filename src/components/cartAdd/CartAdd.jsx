
import  './CartAdd.css'
import Cart from "../cart/Cart"
import axios from "axios";
import { useState , useEffect, Context } from "react";

const ordersUrl = "http://localhost:3001/orderItem" ;

//async function loadItems() {
//    const res = await axios.get(ordersUrl);
//    setItems(res.data);
//    console.log(res)
//}


function CartAdd() {

    const [order, setOrder] = useState([{}]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    // useEffect( () => {
    //     console.log("useEffect called in ",name)
    //     const res = axios.get(orderUrl);          
    //     setItems(res.data);
    //     console.log(res)
    //},[items]);

    useEffect( () => {
        async function handleOrder() {
            let price = 0;
            let items = 0;
            let res = await axios.get(ordersUrl) ;
            res.data.map((item) =>{
                price += item.qty*item.price;
                items += item.qty
            })
            setTotalPrice(price)
            setTotalItems(items)
            setOrder(res.data)
        }
        handleOrder();
    }, )

    return (

        <div className="cartPP">
            <div className='infobar'>
                <div className='namebar'>
                    Mi carrito
                </div>
                <div className='items'>
                    <div className='totalItems'>
                        {totalItems}
                    </div>
                    <div className='totalPrice'>
                        ${totalPrice}
                    </div>
                </div>
            </div>
            <div className='petitionsBx'>
                <div className='gridCart'>
                    {order.map((item)=> {                        
                        return <Cart name = {item.name} precio = {item.price} img = {item.photo} qty = {item.qty}/>
                    }
                )}            
                </div>
            </div> 
            <div className='order'>
               Comprar 
            </div>           
        </div>
        
    );
}

export default CartAdd ;