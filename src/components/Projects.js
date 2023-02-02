import '../styles/components/projects.scss';
import Rick from '../images/rick.png';

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">Proyectos</h2>
        <div className="container">
          <img src={Rick} alt="rick and morty" className="container__image" />
          <div className="container__info">
            <h2 className="container__info--title">Title</h2>
            <p className="container__info--text">Text</p>
          </div>
          <div className="container__buttons">
            <a
              href="https://www.linkedin.com/in/nayra-romero-salas/"
              className="container__buttons--link"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href="https://www.linkedin.com/in/nayra-romero-salas/"
              className="container__buttons--link"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
