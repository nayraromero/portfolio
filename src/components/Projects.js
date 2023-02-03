import OneProject from './oneProject';
import '../styles/components/projects.scss';

import Rick from '../images/rick.png';
import Debuggers from '../images/debuggers.png';
import Balloon from '../images/balloon.png';
import RGB from '../images/colorGenerator.png';
import BreakingBad from '../images/breakingBad.png';

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">Proyectos</h2>
        <div className="projects__list">
          {/* RICK AND MORTY FINDER */}
          <OneProject
            img={Rick}
            name={'Rick and Morty Finder'}
            text={
              'Buscador de personajes de la serie Rick y Morty. Podemos buscarlos por nombre y/o especie y seleccionarlos para saber más sobre ellos.'
            }
            tech={'HTML, CSS, React, Apis, Git'}
            demo={'https://nayraromero.github.io/Rick-Morty-Characters/'}
            repo={'https://github.com/nayraromero/Rick-Morty-Characters'}
          />
          {/* DEBUGGER CARDS */}
          <OneProject
            img={Debuggers}
            name={'Debugger Cards'}
            text={
              'Creador de tarjetas de visita online personalizables. Se pueden compartir por las redes sociales.'
            }
            tech={'HTML, CSS, JavaScript, Git'}
            demo={'https://nayraromero.github.io/Debuggers-Cards/'}
            repo={'https://github.com/nayraromero/Debuggers-Cards'}
          />
          {/* Blow up the Balloon */}
          <OneProject
            img={Balloon}
            name={'Blow up the Balloon'}
            text={
              'Juego que consiste en explotar un globo. Este se agranda y se hace pequeño y cambia de color.'
            }
            tech={'HTML, CSS, JavaScript, Git'}
            demo={'https://nayraromero.github.io/blow-up-the-balloon/'}
            repo={'https://github.com/nayraromero/blow-up-the-balloon'}
          />
          {/* RGB color generator*/}
          <OneProject
            img={RGB}
            name={'RGB color generator'}
            text={
              'Generador de colores al azar. Modifica el color del fondo y del botón e informa al usuario del color seleccionado aleatoriamente.'
            }
            tech={'HTML, CSS, JavaScript, Git'}
            demo={'https://nayraromero.github.io/RGB-color-generator/'}
            repo={'https://github.com/nayraromero/RGB-color-generator'}
          />
          {/* Breaking Bad Favorites*/}
          <OneProject
            img={BreakingBad}
            name={'Breaking Bad Favorites'}
            text={
              'Buscador de personajes de la serie Braking Bad. Podemos buscarlos por nombre y guardar en favoritos aquellos que más nos gusten.'
            }
            tech={'HTML, CSS, JavaScript, Apis, Git'}
            demo={'https://nayraromero.github.io/Breaking-Bad-Favorites/'}
            repo={'https://github.com/nayraromero/Breaking-Bad-Favorites'}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
