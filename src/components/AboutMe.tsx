import { useEffect, useState } from 'react';
import '../styles/AboutMe.css';

function AboutMe() {
  const words = [
    'de code',
    "d'innovation",
    "par l'IA",
    'de manga',
    'de randonnée',
    'de... Encore la ? 😉',
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <section className="aboutme-section" id="about">
      <h1>Hello World ! Je m'appelle Ahmed !</h1>
      <h2>
        Passionné{' '}
        <span className="dynamic-text" aria-live="polite">
          {text}
        </span>
        <span className="cursor">|</span>
      </h2>
      <h3>Étudiant en 3ème année à Epitech</h3>
      <div className="aboutme-actions">
        <a
          href="CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cv"
          aria-label="Voir mon CV en PDF"
        >
          Voir mon CV
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
