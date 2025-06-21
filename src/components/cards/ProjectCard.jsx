import Tag from "../common/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, image1, image2, imageAlt, technologies, link }) => {
    const isMobile = window.innerWidth < 768;

    return (
        <>
        {!isMobile ? (
            <div data-aos="zoom-in-up" className="flex flex-col relative overflow-hidden shadow-lg border border-2 border-white bg-neutral-200 h-60 max-w-100 lg:h-80 lg:max-w-150 rounded-lg group">
                <img src={image1} alt={imageAlt} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                {image2 ?
                    <img src={image2} alt={imageAlt} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110 opacity-0 group-hover:opacity-100 transition duration-500" />
                    : <div className="hidden"></div>
                }
                <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-40 group-hover:opacity-100 transition duration-300"></div>
                <h3 className="font-sharetechmono text-lg text-white font-semibold group-hover:-translate-y-24 group-hover:opacity-0 transition-all duration-300 absolute bottom-0 mb-2 text-center w-full">
                    {title}
                </h3>
                <div className="absolute top-0 right-0 mx-3 my-6 text-white text-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
                <div className="text-white mt-auto text-center w-full absolute bottom-0 translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                    <h3 className="font-sharetechmono text-lg font-semibold mx-4">{title}</h3>
                    <h6 className="text-xs text-wrap my-2 mx-4">{description}</h6>
                    <div className="flex gap-4 justify-center mb-4 overflow-x-scroll">
                        {technologies.map((tech) => (
                            <Tag key={tech} text={tech} />
                        ))}
                    </div>
                </div>
                </a>
            </div>
        ) : (
            // small screen - non-hover version
            <div data-aos="zoom-in-up" className="relative max-w-[650px] w-full overflow-hidden z-10 group">
                <div className="absolute bg-rose-500 w-sm sm:w-100 h-40 -translate-x-24 z-0 group-hover:scale-120 transition duration-300"></div>
                <div className="z-10 my-2 mx-6">
                    <h3 className="relative text-lg font-sharetechmono font-bold text-rose-200">{title}</h3>
                    <div className="relative aspect-w-16 aspect-h-9 aspect-video">
                        <a href={link} target={"_blank"}>
                            <div className="absolute w-full h-full z-50 bg-black/20"></div>
                            <img src={image1} alt={imageAlt} className="group-hover:-translate-y-2 relative mt-1 z-10 w-full h-full object-cover shadow-xl border-2 border-transparent hover:border-white transition duration-200" />
                            <div className="absolute top-0 right-2 mx-2 my-3 text-white z-99 text-lg">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </div>
                        </a>
                    </div>
                    <p className="relative z-10 text-white text-sm sm:text-base font-aileron my-2">{description}</p>
                    <div className="relative flex gap-4 justify-left my-4 z-10">
                        {technologies.map((tech) => (
                            <Tag key={tech} text={tech} />
                        ))}
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default ProjectCard