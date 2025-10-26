import { useEffect, useRef } from 'react';
import { projects } from '../data/ProjectData';
import '../styles/ProjectSection.css';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      {
        threshold: 0.2,
      }
    );
    for (const el of itemsRef.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section className="projects-section">
      <h2 id="projects">Mes projets</h2>
      <article className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={el => {
              itemsRef.current[index] = el;
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </article>
    </section>
  );
}

export default ProjectsSection;
