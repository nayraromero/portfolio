import '../styles/components/oneProject.scss';
import 'animate.css';

const oneProject = (props) => {
  return (
    <>
      <div className="container animate__animated animate__fadeInDown animate__delay-750ms animate__slower">
        <img
          src={props.img}
          alt="rick and morty"
          className="container__image"
        />
        <div className="container__info">
          <h2 className="container__info--title">{props.name}</h2>
          <p className="container__info--text">{props.text}</p>
          <p className="container__info--tech">{props.tech}</p>
        </div>
        <div className="container__buttons">
          <a
            href={props.demo}
            className="container__buttons--link"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            href={props.repo}
            className="container__buttons--link"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </>
  );
};

export default oneProject;
