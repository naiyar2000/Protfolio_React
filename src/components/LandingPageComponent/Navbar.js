import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import './css/landing.css';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }
    return (
        <div>
            <i onClick={()=>toggle()} style={{visibility: show ? "hidden": "visible"}} className="fa fa-bars fa-2x"/>
            <CSSTransition
                in={show}
                timeout={10}
                classNames="NavAnimation"
                unmountOnExit
            >
            <nav className="navbar">
                <div className="close">
                    <i onClick={()=>toggle()} className="fa fa-close fa-2x"/>
                </div>
                <div className="logo">
                    <h1>Logo/image</h1>
                </div>
                <ul className="navbar-nav">
                    <li onClick={()=>toggle()} className="nav-item"><a href="#Home" className="nav-link"><i className="fas fa-home fa-2x"/><span className="link-text">Home</span></a></li>
                    <li onClick={()=>toggle()} className="nav-item"><a href="#About" className="nav-link"><i className="fas fa-address-card fa-2x"/><span className="link-text">About</span></a></li>
                    <li onClick={()=>toggle()} className="nav-item"><a href="#Services" className="nav-link"><i className="fas fa-bell fa-2x"/><span className="link-text">Services</span></a></li>
                    <li onClick={()=>toggle()} className="nav-item"><a href="#Portfolio" className="nav-link"><i className="fas fa-briefcase fa-2x"/><span className="link-text">Portfolio</span></a></li>
                    {/* <li onClick={()=>toggle()} className="nav-item"><a href="#Blog" className="nav-link"><i className="fas fa-file fa-2x" style={{marginLeft: '-0.2em'}}/><span className="link-text">Blog</span></a></li> */}
                    <li onClick={()=>toggle()} className="nav-item"><a href="#Contact" className="nav-link"><i className="fas fa-address-book fa-2x"/><span className="link-text">Contact</span></a></li>
                </ul>
            </nav>
            </CSSTransition>
            
        </div>
    )
}


export default React.memo(Navbar);