import ExperienceCard from "../cards/ExperienceCard";

const experiences = [
    {
      title: "Web Developer",
      company: "Allied Container Group",
      date: "Oct 2023 – May 2024",
      points: [
        "Full stack development of a React-Laravel application.",
        "Implemented features like draft-saving and multi-factor authentication for usability and security.",
        "Collaborated with design team to implement responsive UI.",
        "Developed RESTful APIs and collaborated in Agile sprints to refine features.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Allied Container Group",
      date: "Jun 2023 – Sep 2023",
      points: [
        "Built features using Yii 2 (PHP), Tailwind CSS, and the MVC pattern.",
        "Applied SEO strategies and used GitLab for team collaboration.",
        "Documented new features to support long-term maintainability.",
      ],
    },
];

const Experience = () => {
    return (
        <>
            <h2 id="experience" className="relative text-4xl text-white font-extrabold text-center z-10 my-6 pt-18">My experience.</h2>
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} title={exp.title} company={exp.company} points={exp.points} date={exp.date} />
            ))}
        </>
    );
}

export default Experience