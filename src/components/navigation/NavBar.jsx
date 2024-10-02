import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import CustomNavlink from './custom_components/CustomNavlink'
import Logo_fadec from '../../assets/img/Logo_fadec.png'
 

const NavBar = () => {


    

    const navItems = [
        {link: 'Home', path: '/'},
        {link: 'A Propos', path: '/a-propos'},
        {link: 'Programmes', path: '/programmes'},
        {link: 'Partenariats', path: '/partenariats'},
        {link: 'Contacts', path: '/contacts'},
    ]

    const [ isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className=''>
            <nav className='' >
                <div className="container px-4 sm:px-8 py-4 flex justify-between ">
                    {/*website logo*/}
                    <div className="flex ">
                        <a className='flex items-center space-x-1' href="/">
                        <img className='h-10 w-10 hover:text-green-700' src={Logo_fadec} alt='logo' />
                        <p className='text-brandPrimary hover:text-green-700 text-lg text-bold'>FADEC Cameroun<span className='text-brandSecondary'>.</span></p>
                        </a>
                        
                    </div>
                    {/*The website navigation*/}
                    <ul className='hidden md:block space-x-4 sm:space-x-2 pt-1'>
                    {
                        navItems.map(({link, path}) =>
                            <CustomNavlink to={path} key={path}>
                                {link}
                            </CustomNavlink>
                        ) 
                    }
                    </ul>
                    <button onClick={toggleMobileMenu} className='md:hidden'>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className="" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen && 
                        <div className={`absolute  right-0 left-0  px-2 py-2 space-y-3 bg-lightGreen transform transition-transform duration-700 ease-in-out translate-y-0  mt-8`}>
                        <button>
                            {
                                navItems.map(({path, link}) =>
                                    <NavLink className='flex' to={path} key={path}>
                                        {link}
                                    </NavLink>
                                )
                            }  
                        </button>
                        </div>
                        
                    }
                </div>
                
            </nav>
        </header>
    )
}

export default NavBar