import '../styles/components/introduction-section.scss';
import Arrow from '../images/arrow-down.png';
import photo from '../images/imagenCV.jpg';
import htmlIcon from '../images/html.ico';
import cssIcon from '../images/css.ico';
import jsIcon from '../images/js.ico';
import reactIcon from '../images/react.ico';
import nodejsIcon from '../images/nodejs.ico';
import gitIcon from '../images/git.ico';
import githubIcon from '../images/github.ico';
import sqlIcon from '../images/sql.ico';

const HomePage = () => {
  return (
    <>
      <section className="introduction">
        <h1 className="introduction__title">
          ¡Hola! Mi nombre es Nayra Romero y soy front-end developer.
        </h1>
        <a href="#section2" className="introduction__button">
          <img
            src={Arrow}
            alt="arrow up"
            className="introduction__button--arrow"
          />
          ¿Quieres ver más?
          <img
            src={Arrow}
            alt="arrow up"
            className="introduction__button--arrow"
          />
        </a>
      </section>
      <section className="personal section-2" id="section2">
        <div className="personal__info">
          <h2 className="personal__info--title">Sobre mí</h2>
          <p className="personal__info--text">
            Mi curiosidad me dio paso a cambiar de sector y mis ganas de crecer
            profesionalmente a adentrarme de lleno en el mundo de la
            programación. Me considero una persona proactiva, con iniciativa y
            orientada a los resultados, busco una oportunidad laboral donde
            desarrollarme profesionalmente y dar lo mejor de mí.
          </p>
        </div>
        <img
          src={photo}
          alt="foto de Nayra Romero"
          className="personal__photo"
        />
      </section>
      <section className="skills">
        <div className="techSkills">
          <h2 className="techSkills__title">Technical skills</h2>
          <ul className="techSkills__list">
            <li>
              <img
                src={htmlIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
            <li>
              <img
                src={cssIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
            <li>
              <img src={jsIcon} alt="html" className="techSkills__list--icon" />
            </li>
            <li>
              <img
                src={reactIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
            <li>
              <img
                src={nodejsIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
            <li>
              <img
                src={gitIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
            <li>
              <img
                src={githubIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
            <li>
              <img
                src={sqlIcon}
                alt="html"
                className="techSkills__list--icon"
              />
            </li>
          </ul>
        </div>
        <div className="softSkills">
          <h2 className="softSkills__title">Soft skills</h2>
          <ul className="softSkills__list">
            <li>Filosofía Agile (Scrum) </li>
            <li>Trabajo en equipo</li>
            <li>Capacidad de trabajo en remoto</li>
            <li>Comunicación afectiva: capacidad de dar y recibir feedback</li>
            <li>Autoaprendizaje</li>
            <li>Perseverancia</li>
            <li>Orientación a resultados</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomePage;
