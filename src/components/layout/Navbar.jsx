import logo from '/favicon.svg'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [ scrolled, setScrolled ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {setIsOpen(!isOpen)};

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        // return () => window, removeEventListener("scroll", handleScroll)
    })

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    const scrollToTop = () => {
        window.scrollTo({top: 0});
    }

    return (
        <div className={`font-sharetechmono sticky top-0 z-99 text-white h-16 bg-black/100 transition duration-300 ${!scrolled ? "border-b-1 border-gray-400 bg-transparent" : ""}`}>
            <div className="flex h-full items-center">
                <a onClick={scrollToTop} className="group py-3 px-5">
                    <img src={logo} alt="logo" className="w-10 h-10 group-hover:scale-120 transition duration-300" />
                </a>

                {/* desktop menu */}
                <div className="hidden md:flex ml-auto gap-x-3 mr-3 text-sm">
                    <a href="#about" className={`px-3 py-5 self-center hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8`}>About me.</a>
                    <a href="#experience" className={`px-3 py-5 self-center hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8`}>My experience.</a>
                    <a href="#projects" className={`px-3 py-5 self-center hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8`}>My projects.</a>
                    <a href="#contact" className={`px-3 py-5 self-center hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8`}>Contact me.</a>
                </div>

                {/* small screen hamburger icon */}
                <button onClick={toggleMenu} className="md:hidden ml-auto mx-5 right-0">
                    <FontAwesomeIcon icon={faBars} className="text-xl"/>
                </button>
                
            </div>
            {/* small screen menu */}
            {/* {isOpen && ( */}
                    <div ref={menuRef} className={`fixed top-0 right-0 flex flex-col items-end h-screen py-5 px-2.5 bg-white/10 backdrop-blur-sm transform transition-transform duration-300 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <button onClick={toggleMenu} className="md:hidden ml-auto mx-6 right-0 mb-8">
                            <FontAwesomeIcon icon={faXmark} className="text-xl"/>
                        </button>
                        <a href="#about" onClick={toggleMenu} className="px-3 py-5 text-sm hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">About me.</a>
                        <a href="#experience" onClick={toggleMenu} className="px-3 py-5 text-sm hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">My experience.</a>
                        <a href="#projects" onClick={toggleMenu} className="px-3 py-5 text-sm hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">My projects.</a>
                        <a href="#contact" onClick={toggleMenu} className="px-3 py-5 text-sm hover:text-rose-500 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">Contact me.</a>
                    </div>
                {/* )} */}
        </div>
    );
}

export default Navbar