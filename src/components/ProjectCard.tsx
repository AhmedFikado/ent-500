import '../styles/ProjectCard.css';
import type { Project } from '../types/Project';

function ProjectCard({ project }: Project) {
  return (
    <section className="project-card">
      <img src={project.image} alt={project.title} />
      <article>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>🎯 {project.objectif}</p>
        <p>⚙️ {project.tech}</p>
        <div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              🌐 Site
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer">
            💻 GitHub
          </a>
        </div>
      </article>
    </section>
  );
}
export default ProjectCard;
