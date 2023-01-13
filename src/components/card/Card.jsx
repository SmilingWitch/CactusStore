import { Link, useNavigate } from "react-router-dom";
import "./Card.css"
import {BiRightArrow} from "react-icons/bi"


function Card(/*{userId}*/) {

    /*const navigate = useNavigate() 
    const handleClick  = () => {
        navigate(`/${userId}`)
   }*/
   
   return <>

            <div className = "card" >
                <div className = " suculentas cactus"></div>
                    
                    <h1 className = "name">
                        <div className ="line"></div>
                        Cactus & Succulents
                    </h1>
                
                <div className = "img">
                    <p>The fascinating and amazing world of <span>cactus</span> and <span>succulents</span></p>
                </div>
            </div>
 
    </>
}

export default Card ;