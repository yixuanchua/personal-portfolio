import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="bg-black text-white">
            <h2 id="contact" className="text-4xl font-extrabold text-center my-6 pt-18">Get in touch!</h2>
            <div className=" flex justify-center items-center">
                <div className="relative group w-[260px] my-6">
                    <h3 className="relative z-10 font-sharetechmono font-semibold text-xl">cyx.chuayixuan@gmail.com</h3>
                    <span className="absolute bottom-0 left-0 w-full bg-rose-600/70 h-[10px] group-hover:h-full transition-all duration-200"></span>
                </div>
            </div>
            <div className="flex justify-center">
                <a href="/Chua_Yi_Xuan_Resume.pdf" target="_blank" className="font-sharetechmono mb-12 px-3 py-2 border border-white hover:border-rose-600 hover:text-rose-600">
                    View resume
                </a>
            </div>
            <div className="flex justify-center gap-6 pb-18">
                <a href="https://www.linkedin.com/in/chuayixuan01/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:text-rose-600 hover:scale-110 hover:-translate-y-1 transition duration-300" />
                </a>
                <a href="https://github.com/yixuanchua" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="text-4xl hover:text-rose-600 hover:scale-110 hover:-translate-y-1 transition duration-300" />
                </a>
            </div>
        </div>
    );
}

export default Contact