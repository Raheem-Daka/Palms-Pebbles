import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import palms_logo from "../assets/palms_logo.png";


const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Navbar styles
    const navbarStyle = {
        backgroundColor: isHomePage ? 'transparent' : '#1f2937',
        color: isHomePage ? 'white' : '#0000',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isHomePage) {
            setIsScrolled(false); // reset when leaving home
            return;
        }
    
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);
    
    return (
            <nav style={navbarStyle} className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-2 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to="/">
                    <div className="flex flex-col items-center">
                        <img
                            src={palms_logo}
                            alt="Palms & Pebbles"
                            className={`
                            h-12 w-16
                            sm:h-10 sm:w-10
                            md:h-14 md:w-14
                            lg:h-18 lg:w-18
                            object-contain
                            transition-colors duration-300
                            ${isScrolled ? "text-black" : "text-white"}
                            `}
                        />

                        <span
                        className={`
                            font-playfair
                            text-lg
                            sm:text-lg
                            md:text-xl
                            lg:text-2xl
                            font-semibold
                            transition-colors duration-300
                            ${isScrolled ? "text-black" : "text-white"}
                        `}
                        >
                        Palms & Pebbles
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 font-playfair ${isScrolled ? "text-black" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-black" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                    {/*<button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        New Launch
                    </button>*/}
                </div>

                {/* Desktop Right */}
                {/*<div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>
                </div>*/}

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden text-white">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <Link className="hover:bg-gray-800 hover:text-white hover:p-1 hover:rounded hover:transition-all" key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    {/*<button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        New Launch
                    </button>

                    <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>*/}
                </div>
            </nav>
    );
}

export default Navbar;
