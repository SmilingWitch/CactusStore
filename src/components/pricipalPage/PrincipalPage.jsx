import Card from "../card/Card";
import "./PrincipalPage.css"
import { useNavigate } from "react-router-dom";
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import ButtonHover3D from "../buttonHover3D/ButtonHover3D";


function PrincipalPage() {

    const navigate = useNavigate() 
    const handleClick  = () => {
        navigate("/catalogue")
    }
    return <div className = "page">
                <div className = "container">

                    <div className = "Bx">
                        <div className = "cardBx">
                            <div className = "suculentas Card">
                                <Card userId = "cactus & suculents"/>
                            </div>
                            <div className = "btBx">
                                <submit className = "button" onClick = {handleClick}> View all</submit> 
                            </div>    
                        </div>
                        <div className = "SMBx">
                            <ul className="social_icons">
                                <li>
                                    <AiFillInstagram className="icon2"/>   
                                </li>
                                <li>
                                    <FaFacebookF className="icon2"/>   
                                </li>
                                <li>
                                    <FaTelegramPlane className="icon2"/>   
                                </li>
                            </ul>
                        </div>   
                   </div> 
                    <div className = "header">
                            <h1 className = "texto">Cactus  </h1>
                         
                    </div>

                                       
                </div>
                 
    </div>
}

export default PrincipalPage ;