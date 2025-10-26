import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2 id="contact">Contact</h2>
      <div>
        <a
          href="https://www.linkedin.com/in/ahmed-firoum"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/AhmedFikado"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
