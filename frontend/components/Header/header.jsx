import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import dyc from "../../src/assets/dyc.png"
import "./Header.css";

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('jsonwebtoken');
  const closeMenu = () => setMenuOpen(false);
  const [active,setActive]=useState('home');
  const handleClick=(option)=>{
    setActive(option);
  }


  return (
     <nav className='flex font-bold w-full h-[70px] justify-between ' style={{fontFamily:'hack'}}>
        <Link to="/" className="">
            <img src={dyc} className="mr-3 h-[70px]" alt="Logo" />
        </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul  className={`${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={()=>{closeMenu();handleClick('home')}} className={active === 'home' ? 'text-[#ed1c43]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Home</NavLink>
        </li>
       
        <li>
          <NavLink to="/rules"  onClick={()=>{closeMenu();handleClick('rules')}} className={active === 'rules' ? 'text-[#ed1c43]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Rules</NavLink>
        </li>
        <li>
          <NavLink to="/resources"  onClick={()=>{closeMenu();handleClick('resources')}} className={active === 'resources' ? 'text-[#ed1c43]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>resources</NavLink>
        </li>
        <li>
          <NavLink to="/warground"  onClick={()=>{closeMenu();handleClick('warground')}} className={active === 'warground' ? 'text-[#ed1c43]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Warground</NavLink>
        </li>
        <li>
          <NavLink to="/scoreboard"  onClick={()=>{closeMenu();handleClick('scoreboard')}} className={active === 'scoreboard' ? 'text-[#ed1c43]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Scoreboard</NavLink>
        </li>
      </ul>
    <ul className={`${menuOpen ? "open" : ""}`}>
  {token !== null ? (
    <div className='flex items-center justify-center'>
      <img src={"../../src/assets/user.png"} className="h-10 object-cover" alt="Logo"/> 
      <p className='ml-3 text-gray-700 font-semibold'>Welcome !</p>
    </div>
  ) : (
    <>
      <li>
        <NavLink to="/login" onClick={()=>{closeMenu();handleClick('login')}} className={active === 'login' ? 'text-[#ed1c43]':'hover:text-[#b8b8b8] hover:scale-110  transition-transform duration-300 ease-in-out'}>Login</NavLink>      
      </li>
    </>
  )}
</ul>
    </nav>
  );
};
