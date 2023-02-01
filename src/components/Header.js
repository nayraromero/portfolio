import '../styles/components/header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <NavLink to="/" className="header-link">
            Home Page
          </NavLink>
          <NavLink to="/projects" className="header-link">
            Proyectos
          </NavLink>
          <NavLink to="/contact" className="header-link">
            Contacto
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
