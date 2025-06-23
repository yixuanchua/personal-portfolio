import { useState, useEffect, useRef } from 'react'
import NET from 'vanta/src/vanta.net'
import netSplash from '../../assets/net-splash-ss.png'

const Hero = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        const timeout = setTimeout(() => {
            // if (!isMobile && !vantaEffect && typeof window !== "undefined") {
            if (!vantaEffect && vantaRef.current && typeof window !== "undefined") {
                setVantaEffect(
                    NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xfa6a8b,
                    backgroundColor: 0x190e2d,
                    points: 7.00,
                    maxDistance: 15.00,
                    spacing: 18.00
                    })
                );
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [vantaEffect]);

    return (
        <>
            <div ref={vantaRef} className="absolute z-0 inset-0 w-full h-screen" id="vanta"></div>
            <div className="absolute z-10 h-screen w-full bg-gradient-to-t from-black to-black-10 -translate-y-16"></div>
            <div id="hero" className='relative z-50 h-screen place-content-center mx-4'>
                <h1 className='flex flex-col sm:flex-row justify-center font-aileron font-bold text-white hover:text-rose-500/90 transition-all duration-300 animate-scalePulse py-3 px-6 sm:text-5xl text-4xl'>
                    <span>Hi,&nbsp;</span>
                    <span>I'm Chua Yi Xuan</span>
                </h1>
                <h2 className="font-sharetechmono flex justify-center text-white mx-6 z-99">
                    A web developer. A builder of better experiences.
                </h2>
                <div className='flex justify-center'>
                    <a href="#contact" className="font-sharetechmono mt-8 px-3 py-2 text-white border border-white hover:border-rose-500 hover:text-rose-500">
                        Get in touch
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hero