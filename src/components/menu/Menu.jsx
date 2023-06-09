
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import "./Menu.css"
import { useState } from 'react';


function Menu() {

    const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropmenu-container">
      <button className="dropmenu-toggle" onClick={handleToggle}>
        {isOpen ? "Cerrar" : "Menú"}
      </button>
      <ul className={`dropmenu ${isOpen ? "open" : ""}`}>
        <li className="dropmenu-item">
          Opción 1
          <ul className="submenu">
            <li className="submenu-item">Subopción 1</li>
            <li className="submenu-item">Subopción 2</li>
            <li className="submenu-item">Subopción 3</li>
          </ul>
        </li>
        <li className="dropmenu-item">Opción 2</li>
        <li className="dropmenu-item">Opción 3</li>
      </ul>
    </div>
  );
};
   


export default Menu ;