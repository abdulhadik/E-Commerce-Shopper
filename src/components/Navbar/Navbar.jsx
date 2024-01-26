import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";
import dropDown_arrow from '../Assets/downdrop.png';

const Navbar = () => {
  
  const {totalitemsInCart}=useContext(ShopContext);
  const [menu,setMenu]=useState("shop");
  const menuRef=useRef();
  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-vissible');
    e.target.classList.toggle('open');
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo}   alt="Shopers-logo" />
        <p>SHOPPER</p>
      </div>
      <img src={dropDown_arrow} onClick={dropdown_toggle} className="nav-dropdown" alt="" />
      <ul ref={menuRef} className="nav-menu"> 
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"inherit"}} to='/'>Shop</Link>{menu==="shop"?<hr/>:"" }</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none",color:"inherit"}} to='/mens'>Mens</Link>{menu==="men"?<hr/>:"" }</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"inherit"}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:"" }</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"inherit"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:"" }</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img  src={cart_icon} alt="cart-icon"/></Link>
        <div className="nav-cart-count">{totalitemsInCart()}</div>
      </div>
    </div>
  );
};

export default Navbar;
