import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Featured Projects
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-10">
        Here are some of my recent projects showcasing my skills in full-stack development,
        UI/UX design, and modern web technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
      <a
        href="https://github.com/rudraksha127?tab=repositories"
        target="_blank"
        rel="noreferrer noopener"
        className="mt-10 py-3 px-8 button-primary text-white font-semibold rounded-lg hover:scale-105 transition-transform"
      >
        View All Projects on GitHub
      </a>
    </section>
  );
};
