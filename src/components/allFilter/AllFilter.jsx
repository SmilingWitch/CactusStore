import ProductCard from "../productCard/ProductCard"
import "./AllFilter.css"
import axios from "axios";
import { useState , useEffect } from "react";

const succUrl = "http://localhost:3001/suculentas" ;
const cactusUrl = "http://localhost:3001/cactus" ;


function AllFilter() {

    const [getDataS, setGetDataS] = useState([{}]);
    const [getDataC, setGetDataC] = useState([{}]);

    useEffect( () => {
        async function handleGetS() {
            let res = await axios.get(succUrl) ;
            console.log(res.data)
            setGetDataS(res.data)
        }
        handleGetS();
    }, [])

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
            <div className="gridCard">
            {getDataS.map((item)=> {
                console.log(item)
                return <ProductCard name = {item.name} precio = {item.price} img = {item.photo}/>
            })}
            {getDataC.map((item)=> {
                console.log(item)
                return <ProductCard name = {item.name} precio = {item.price} img = {item.photo}/>
            })}
            </div>
        </div>
        
            
                



        {/*<div className = "section">
            <div className = "product">
                <div className = "itemBox"  ><img src={img1}/></div>
                <div className = "itemBox"  ><img src={img2}/></div>
                <div className = "itemBox"  ><img src={img3}/></div>
                <div className = "itemBox"  ><img src={img4}/></div>
                <div className = "itemBox"  ><img src={img5}/></div> 
            </div>
</div>*/}
    </div>
}


export default AllFilter ;