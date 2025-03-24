import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
import MobileMenu from "../MobileMenu/page"; 
import Logo from '/public/images/logo.png';
import NavLink from 'next/link';


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={`w-full fixed top-0 z-50 bg-[#090909] shadow ${props.topbarNone}`}>
        <div className={`tp-site-header ${props.hclass}`}>
            <nav className='w-full flex items-center justify-between px-6 py-4'>
                {/* mobile menu button */}
                <div className='lg:hidden'>
                    <MobileMenu/>

                </div>

                {/* logo */}
                <div className='flex-shrink-0'>
                    <NavLink href="/" onClick={ClickHandler}>
                        <Image src={Logo} alt="Logo" width={120} height={40}/>
                    </NavLink>

                </div>

                {/* Navbar Links */}
                <div className='hidden lg:flex items-center space-x-6'>
                    <ul className='flex space-x-6 text-[#f6f6f7] font-medium'>
                        <li>
                            <Link to="home" smooth={true} duration={500} off={-100} className='hover:text-[#fa8853] cursor-pointer'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-95} className='hover:text-[#fa8853] cursor-pointer'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-95} className='hover:text-[#fa8853] cursor-pointer'>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-95} className='hover:text-[#fa8853] cursor-pointer'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-95} className='hover:text-[#fa8853] cursor-pointer'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-95} className='hover:text-[#fa8853] cursor-pointer'>
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>

                {/* Search and cart */}
                <div className='flex items-center space-x-4'>
                    {/* search toggle button */}
                    <button onClick={() => setSearchOpen(!searchOpen)} className='text-gray-700 focus:outline-none'>
                        <i className={`ti ${searchOpen ? "ti-close": "ti-search"}`}></i>

                    </button>

                    {/* search input */}
                    {searchOpen && (
                        <div className='absolute top-16 right-6 bg-white shadow-lg p-3 rounded-md'>
                            <form onSubmit={SubmitHandler} className='flex items-center border border-gray-300 rounded-md overflow-hidden'>
                                <input
                                    type="text"
                                    placeholder='Search here...'
                                    className='px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none '

                                />

                                <button type="submit" className='px-3 bg-blue-500 text-white'>
                                    <i className='fi ti-search'></i>
                                </button>
                                
                                
                            </form>

                        </div>
                    )}

                </div>

            </nav>
        </div>

   </header>
    );
};

export default Header;