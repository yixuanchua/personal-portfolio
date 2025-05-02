import ProjectCard from "../cards/ProjectCard";
import REviewAll from '../../assets/real-estate-app-picture1.png';
import REviewOne from '../../assets/real-estate-listing.png';
import senseRoom from '../../assets/sense-3droom.png'
import senseHome from '../../assets/sense-homepage.png'

const Projects = () => {
    return (
        <div className="border-b border-white pb-14">
            <h2 id="projects" className="text-4xl text-white font-extrabold text-center my-6 pt-18">Projects.</h2>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 md:gap-2 mx-14">
                    <ProjectCard title={"Real Estate Application"} description={"A real estate application that connects agents, buyers and sellers, smoothening the process of buying and selling property."} image1={REviewAll} image2={REviewOne} imageAlt={"real-estate-application"} technologies={['Flask', 'Tailwind', 'HTML']} />
                    <ProjectCard title={"Sense Spaces Planning Tool"} description={"Enables users to effortlessly design personalised environments tailored to different sensory needs."} image1={senseRoom} image2={senseHome} technologies={['React', 'Tailwind', 'Three.js', 'API', 'AWS s3']} />
                    {/* <ProjectCard title={"Poke API"} description={"nfialninfjieafehf hej"} />
                    <ProjectCard title={"todo"} description={"lorem ispumsfbiaoef iabfilsnfjilnajfbhjw lwaufhiuwanfjwal"} /> */}
                </div>
            </div>
        </div>
    );
}

export default Projects