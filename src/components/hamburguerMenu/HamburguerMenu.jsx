import "./HamburguerMenu.css"
import { useState } from "react"; 

function HamburguerMenu() {

    const [activeMenu,setActiveMenu] = useState(false) ;

    return <div className="body">
        <div  
            className= {activeMenu === true  ? "open  burguer-div" : "noOpen burguer-div " }
            onClick={() => {setActiveMenu(!activeMenu)}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    
    
}

export default HamburguerMenu ;