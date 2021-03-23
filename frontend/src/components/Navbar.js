import React, {useState,useEffect} from 'react'

import './Navbar.css'
// import SearchIcon from '@material-ui/icons/Search';
// import { IconButton } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu'
function Navbar() {
    const [show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll",handleShow());
        }
    }, [])
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className={`navbar ${show &&"navbar__black"}`}>
            <div className="navbar__logo">
                <h2>Event Promoter</h2>
            </div>
            <div className='navbar__right'>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className='menu'>
                <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <Close className="menu-icon" />
                    ) : (
                    <MenuIcon className="menu-icon" />
        )        }
                </div>
                <div className={` ${!click && "menu__option"}`}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
