import { useEffect, useRef } from 'react';
import '../styles/Formation.css';

function Formation() {
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
    <section className="formation-section">
      <h2 id="formation">Formation</h2>
      <div className="formation-timeline">
        <div
          className="formation-item"
          ref={el => {
            itemsRef.current[0] = el;
          }}
        >
          <div className="formation-date">Mars 2025 - Août 2025</div>
          <div className="formation-content">
            <h3>Wild Code School</h3>
            <p>Formation Développeur Web Fullstack</p>
            <span className="formation-badge">Certificat</span>
            <div className="formation-details">
              <p>
                <strong>Ce que j'ai appris :</strong>
                Développement web moderne, gestion de projet agile, travail en équipe, bonnes
                pratiques de code.
              </p>
              <div className="formation-stacks">
                <span>Stacks :</span>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="formation-item"
          ref={el => {
            itemsRef.current[1] = el;
          }}
        >
          <div className="formation-date">2025 - 2028</div>
          <div className="formation-content">
            <h3>Epitech</h3>
            <p>Master of Science Tech (MSc Pro) - Développement & Innovation</p>
            <span className="formation-badge">En prévision</span>
            <div className="formation-details">
              <p>
                <strong>Objectifs :</strong>
                Approfondir mes compétences en développement logiciel, innovation, gestion de projet
                et technologies avancées.
              </p>
              <div className="formation-stacks">
                <span>Stacks visés :</span>
                <ul>
                  <li>Architecture logicielle</li>
                  <li>Cloud</li>
                  <li>DevOps</li>
                  <li>IA</li>
                  <li>Frameworks avancés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formation;
