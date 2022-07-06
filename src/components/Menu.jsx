import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faX } from "@fortawesome/free-solid-svg-icons";
import { IoPhonePortraitOutline , IoHeadsetOutline} from "react-icons/io5";

import './menu.css'
import { Link } from 'react-router-dom';



const Menu = (props) => {

  const [menu, setmenu] = useState(props.menuOpen)
  const [subMenu, setsubMenu] = useState(false)

  return (
    <div className="box-menu">
      <button className="container-close-menu">
      <FontAwesomeIcon onClick={()=> setmenu(false)} icon={faX} className="icon-close-menu"></FontAwesomeIcon>
      </button>
        <ul className="cont-menu">
          <li className="menu_links">
            <Link to={"/celulares"} onMouseEnter={()=>{setsubMenu(true)}} onMouseLeave={()=>setsubMenu(false)} className="menu-categories">
            <IoPhonePortraitOutline className='icon-category'></IoPhonePortraitOutline>
            <span className="text-link">Celulares</span>
            </Link>

          {
            subMenu ? <ul className='sub-category-list'>
            <li className='sub-category'>
            <Link to={"/celulares/xiaomi"} className="menu-categories">
              <span className="text-link">Xiaomi</span>
              </Link>
                </li>
            </ul>
            : "" 
          }

          </li>

          <li className="menu_links">
            <Link to={"/celulares"} className="menu-categories">
            <IoHeadsetOutline className='icon-category'></IoHeadsetOutline>
            <span className="text-link">Audifonos</span>
            </Link>
          </li>
          
        </ul>
    </div>
  )
}

export default Menu