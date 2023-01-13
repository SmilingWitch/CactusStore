import ProductCard from "../productCard/ProductCard";
import "./Suculentas.css";
import axios from "axios";
import { useState , useEffect } from "react";
import { json } from "react-router-dom";

const succUrl = "http://localhost:3001/suculentas" ;


function Suculentas() {

    const [getData, setGetData] = useState([{}]);

    useEffect( () => {
        async function handleGet() {
            let res = await axios.get(succUrl) ;
            console.log(res.data)
            setGetData(res.data)
        }
        handleGet();
    }, [])
    

    return  <div className = "contcard">
    <div className="fancy">
    
        <div className="headerCactus">
            Succulents
        </div>
        <div className="gridCard">
            {getData.map((item)=> {
                console.log(item)
                return <ProductCard name = {item.name} precio = {item.price} img = {item.photo}/>
            })}
        </div>

    </div>
    
</div>
}

export default Suculentas ;