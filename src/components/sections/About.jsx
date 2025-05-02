import selfPortrait from '../../assets/self-portrait.jpg'
import netSS from '../../assets/net-ss.png'

const About = () => {
    return (
        <>
            <h2 id="about" className="text-4xl text-white font-extrabold text-center mb-6 pt-18">About me.</h2>
            <div className="flex flex-col md:flex-row items-stretch items-center justify-center">
                <img src={netSS} className="absolute z-0"/>

                <div className='relative h-50 md:h-full md:w-[400px] mx-16 md:mx-6 my-3 z-10 group'>
                <img src={selfPortrait} alt="self-portrait" className="object-cover h-full w-full rounded-xl shadow-lg" />
                    <div className="absolute inset-0 bg-pink-500/40 mix-blend-multiply pointer-events-none rounded-xl group-hover:opacity-0 transition duration-300"></div>
                </div>
                
                <div className="w-[85%] self-center md:self-stretch md:max-w-[700px] font-inter text-xs md:text-sm lg:text-lg xl:text-xl bg-white/0 text-white p-6 md:mr-6 my-3 rounded-xl shadow-lg backdrop-blur-xs">
                    <p className="p-3">Hi! I'm Yixuan — a web developer who enjoys building clean, responsive interfaces and creating smooth user experiences. I graduated with a degree in Computer Science (Big Data) and discovered my passion for web development through hands-on projects.</p>
                    <p className="p-3">Lately, I’ve been diving deeper into React and Tailwind CSS, and exploring full-stack projects using the MERN stack. I love experimenting with design ideas, learning new tools, and turning concepts into real, usable websites. I’m currently working on personal projects and building out my portfolio to reflect the skills I’ve picked up.</p>
                    <p className="p-3">I'm open to opportunities where I can continue learning, contribute to a team, and grow as a developer. If you’re working on something exciting or want to connect, feel free to reach out!</p>
                </div>
            </div>
        </>
    );
}

export default About