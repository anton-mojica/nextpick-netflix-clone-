import logo from './nxtpicks.svg';
import avatar from './Netflix-avatar.png';
import './styles/NavBar.css';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
       window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }else handleShow(false);
       });
       return () => {
           window.removeEventListener("scroll");
       };
    }, [])
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img 
            src={logo} 
            // width="50" 
            // height="50"
            alt="logo" className="nav__logo" />

            <img 
            src={avatar} 
            // width="50" 
            // height="50"
            alt="" className="nav__avatar" />
        </nav>
    )
}

export default NavBar
