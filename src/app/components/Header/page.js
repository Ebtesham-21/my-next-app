import Image from 'next/image';
import React, { useState } from 'react';
import {Link} from 'react-scroll';
import MobileMenu from "../MobileMenu/page"; 
import Logo from '/public/images/logo.png';
import NavLink from 'next/link';


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
   

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`tp-site-header ${props.hclass}`}>
                <nav className="navigation">
                    <div className="container-fluid">
                        <div className="flex items-center">
                            {/* Mobile Menu */}
                            <div className="lg:hidden block w-1/4 md:w-1/4">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>

                            {/* Logo Section */}
                            <div className="lg:w-3/12 md:w-6/12 w-6/12">
                                <div className="navbar-header">
                                    <NavLink onClick={ClickHandler} className="navbar-brand" href="/">
                                        <Image src={Logo} alt="" />
                                    </NavLink>
                                </div>
                            </div>

                            {/* Navbar Links */}
                            
                            <div className="lg:w-6/12 md:w-full w-full flex justify-center items-center ">
                                <div id="navbar" className=" navigation-holder  ">
                                    <button className="menu-close lg:hidden block  "><i className=" mx-10  "></i></button>
                                    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start  lg:items-center">
                                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-100}>Home</Link></li>
                                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-95}>About</Link></li>
                                        <li><Link activeClass="active" to="service" spy={true} smooth={true} duration={500} offset={-95}>Service</Link></li>
                                        <li><Link activeClass="active" to="project" spy={true} smooth={true} duration={500} offset={-95}>Portfolio</Link></li>
                                        <li><Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} offset={-95}>Blog</Link></li>
                                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Search Section */}
                            <div className="lg:w-3/12 md:w-2/12 w-2/12">
                                <div className="header-right" id="home">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}>
                                                <i className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i>
                                            </button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control" placeholder="Search here..." />
                                                        <button type="submit">
                                                            <i className="fi ti-search"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;