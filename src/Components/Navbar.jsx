import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    useEffect(() => {
      function scrollHandler() {
          if (window.scrollY >= 24) setnavbarblur(true);
          else setnavbarblur(false);
      }
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const showMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        if (bar.length >= 3 && ham.length >= 1) {
          bar[0].classList.toggle("barOne");
          bar[1].classList.toggle("barTwo");
          bar[2].classList.toggle("barThree");
          ham[0].classList.toggle("showNavbar");
        }
    };

    const hideMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        if (bar.length >= 3 && ham.length >= 1) {
          bar[0].classList.remove("barOne");
          bar[1].classList.remove("barTwo");
          bar[2].classList.remove("barThree");
          ham[0].classList.remove("showNavbar");
        }
    };

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'} style={{ background: navbarblur ? 'rgba(10,10,10,0.92)' : 'transparent', borderBottom: navbarblur ? '1px solid rgba(0,230,118,0.06)' : 'none' }}> 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo' style={{ color: '#00e676', cursor: 'pointer', letterSpacing: 0.6 }}>Eslam.dev</h1>

        <div className='Hamburger' onClick={showMenu} style={{ cursor: 'pointer' }}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li onClick={hideMenu}><Link to="/About"><BsPerson/> About</Link></li>
            <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash/> Projects</Link></li>
            <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument/> Resume</Link></li>
        </ul>
        
    </nav>
  )
}

export default Nav;
