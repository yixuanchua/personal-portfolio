import Tag from "../common/Tag";

const ProjectCard = ({ title, description, image1, image2, imageAlt, technologies }) => {
    return (
        <>
            {/* <div data-aos="zoom-in-up" className="flex flex-col relative overflow-hidden shadow-lg border border-2 border-white bg-neutral-200 h-60 max-w-100 lg:h-80 lg:max-w-150 rounded-lg group">
                <img src={image1} alt={imageAlt} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                {image2 ?
                    <img src={image2} alt={imageAlt} className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110 opacity-0 group-hover:opacity-100 transition duration-500" />
                    : <div className="hidden"></div>
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40 group-hover:opacity-100 transition duration-300"></div>
                <h3 className="font-sharetechmono text-lg text-white font-semibold group-hover:-translate-y-24 group-hover:opacity-0 transition-all duration-300 absolute bottom-0 mb-2 text-center w-full">
                    {title}
                </h3>
                <div className="text-white mt-auto text-center w-full absolute bottom-0 translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                    <h3 className="font-sharetechmono text-lg font-semibold mx-4">{title}</h3>
                    <h6 className="text-xs text-wrap my-2 mx-4">{description}</h6>
                    <div className="flex gap-4 justify-center mb-4 overflow-x-scroll">
                        {technologies.map((tech) => (
                            <Tag key={tech} text={tech} />
                        ))}
                    </div>
                </div>
            </div> */}
            {/* small screen - non-hover version */}
            <div data-aos="zoom-in-up" className="relative max-w-[650px] sm:overflow-hidden">
                <div className="absolute bg-rose-500 w-sm sm:w-100 h-40 -translate-x-24 z-0"></div>
                <div className="relative z-10 my-2 mx-6">
                    <h3 className="relative text-lg font-sharetechmono">{title}</h3>
                    <img src={image1} alt={imageAlt} className="relative mt-1 z-10 aspect-16/9 w-full h-full object-cover shadow-xl border-2 border-transparent hover:border-white transition duration-200" />
                    <p className="text-white text-sm sm:text-base font-aileron my-2">{description}</p>
                    <div className="flex gap-4 justify-left my-4 overflow-x-scroll">
                        {technologies.map((tech) => (
                            <Tag key={tech} text={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard