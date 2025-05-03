const Hero = () => {
    return (
        <>
        <div id="hero" className='z-10 h-screen place-content-center mx-4'>
            <h1 className='flex flex-col sm:flex-row justify-center font-aileron font-bold text-white hover:text-rose-500/90 transition-all duration-300 animate-scalePulse py-3 px-6 sm:text-5xl text-4xl'>
                <span>Hi,&nbsp;</span>
                <span>I'm Chua Yi Xuan</span>
            </h1>
            <h2 className="font-sharetechmono flex justify-center text-white mx-6">
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