import { SectionHeader } from "@/components/sub/section-header";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <SectionHeader
        tag="work"
        title="Featured Projects"
        subtitle="A selection of projects showcasing full-stack development, cloud engineering, and AI/ML."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
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
        className="mt-12 btn-primary py-3 px-8 text-white rounded-lg text-sm"
      >
        View All Projects on GitHub →
      </a>
    </section>
  );
};

