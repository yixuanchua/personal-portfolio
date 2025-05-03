const ExperienceCard = ( { date, title, company, points } ) => {
    return (
        <>
        <div data-aos="fade-up" className="font-sharetechmono flex justify-center mx-2 my-3">
            <div className="flex flex-col sm:flex-row w-[80%] sm:w-[60%] max-w-[800px] text-white bg-white/10 backdrop-blur-sm rounded-lg px-4 py-5">
                <div className="mx-2 text-sm mt-1 text-nowrap text-gray-400 min-w-40">
                    {date}
                </div>
                <div className="mx-2">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{company}</p>
                    <ul className="font-aileron list-disc my-2 ml-4">
                        {points.map((p, index) => (
                            <li key={index} className="text-xs text-white">{p}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default ExperienceCard