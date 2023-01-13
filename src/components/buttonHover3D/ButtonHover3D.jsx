
import "./ButtonHover3D.css"

function ButtonHover3D({icon}) {
    return <div className="bh">
        <li>
            <a href="#"> 
                <i  className="fab instagram">
                    {icon}
                </i>
            </a> 
        </li>
    </div>
}

export default ButtonHover3D ;