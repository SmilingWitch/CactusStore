import ProductCard from "../productCard/ProductCard";
import "./Cactus.css"
import axios from "axios";
import { useState , useEffect } from "react";

const cactusUrl = "http://localhost:3001/cactus" ;

function Cactus() {

    const [getDataC, setGetDataC] = useState([{}]);


    /*----Funcion para pedir la informacion de las card---- */
    
    useEffect( () => {
        async function handleGetC() {
            let res = await axios.get(cactusUrl) ;
            console.log(res.data)
            setGetDataC(res.data)
        }
        handleGetC();
    }, [])


    return <div className = "contcard">
    <div className="fancy">
        <div className="headerCactus">
                Cactus
        </div>
        <div className="gridCard">
        {getDataC.map((item)=> {
                console.log(item)
                return <ProductCard name = {item.name} precio = {item.price} img = {item.photo}/>
            })}
        </div>
    </div>
    
</div>
}

 
export default Cactus ;