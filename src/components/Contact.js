import '../styles/components/contact.scss';
import githubIcon from '../images/github.ico';
import emailIcon from '../images/email.ico';
import linkedinIcon from '../images/link_edin.ico';

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h2 className="contact__title">Puedes encontrarme aquí</h2>
        <p className="contact__text">¿Hablamos?</p>
        <div className="contact__list">
          <a href="mailto:nayraromerosalas@gmail.com">
            <img src={emailIcon} alt="html" className="contact__list--icon" />
            <p className="contact__list--name">Email</p>
          </a>
          <a
            href="https://www.linkedin.com/in/nayra-romero-salas/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="html"
              className="contact__list--icon"
            />
            <p className="contact__list--name">Linkedin</p>
          </a>

          <a
            href="https://github.com/nayraromero"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="html" className="contact__list--icon" />
            <p className="contact__list--name">GitHub</p>
          </a>
        </div>
        <div className="contact__cv"></div>
      </section>
    </>
  );
};

export default Contact;
