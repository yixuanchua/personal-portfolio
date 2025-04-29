import logo from '../assets/yx-logo-black.png'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        // return () => window, removeEventListener("scroll", handleScroll)
    })

    const scrollToTop = () => {
        window.scrollTo({top: 0});
    }

    return (
        <div className={`sticky top-0 z-99 text-white bg-black h-16 ${!scrolled ? "border-b-1 border-gray-400" : ""}`}>
            <div className="flex h-full items-center">
                <a onClick={scrollToTop} className="group p-3">
                    <img src={logo} alt="logo" className="w-10 h-10 group-hover:scale-120 transition duration-300" />
                </a>
                <div className="flex ml-auto gap-x-3 mr-3 text-sm">
                    <a href="#about" className="px-3 py-5 self-center hover:text-emerald-300 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">About me.</a>
                    <a href="#experience" className="px-3 py-5 self-center hover:text-emerald-300 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">My experience.</a>
                    <a href="#projects" className="px-3 py-5 self-center hover:text-emerald-300 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">My projects.</a>
                    <a href="#contact" className="px-3 py-5 self-center hover:text-emerald-300 transition duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-8">Contact me.</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar