import { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const stacks = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', img: '/logos/react.webp' },
      { name: 'TypeScript', img: '/logos/typescript.webp' },
      { name: 'JavaScript', img: '/logos/javascript.webp' },
      { name: 'HTML5', img: '/logos/html.webp' },
      { name: 'CSS3', img: '/logos/css.webp' },
      { name: 'Tailwind CSS', img: '/logos/tailwindcss.webp' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', img: '/logos/nodejs.webp' },
      { name: 'Express', img: '/logos/express.webp' },
      { name: 'Flask', img: '/logos/flask.webp' },
    ],
  },
  {
    title: 'Gestion de BDD',
    items: [
      { name: 'SQL', img: '/logos/nodejs.webp' },
      { name: 'MySQL', img: '/logos/tailwindcss.webp' },
    ],
  },
  {
    title: 'Outils & Autres',
    items: [
      { name: 'Git', img: '/logos/git.webp' },
      { name: 'Figma', img: '/logos/figma.webp' },
      { name: 'Vercel', img: '/logos/vercel.webp' },
      { name: 'VS Code', img: '/logos/vscode.webp' },
    ],
  },
];

// Flatten stacks for grid
const allSkills = stacks.flatMap(stack =>
  stack.items.map(item => ({ ...item, category: stack.title }))
);

function Skills() {
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
      { threshold: 0.2 }
    );
    for (const el of itemsRef.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section className="skills-section">
      <h2 id="skills">Mes stacks</h2>
      <div className="skills-grid">
        {allSkills.map((skill, idx) => (
          <div
            className="skill-grid-card"
            key={skill.name}
            ref={el => {
              itemsRef.current[idx] = el;
            }}
          >
            <span className="skill-category-badge">{skill.category}</span>
            <img src={skill.img} alt={`${skill.name} logo`} className="skill-grid-img" />
            <span className="skill-grid-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
