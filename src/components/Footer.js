import Arrow from '../images/arrow-down.png';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import '../styles/components/footer.scss';

const Footer = () => {
  const onClickUp = () => {
    console.log('estás dentro');
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="footer">
        <div className="footer__arrow" onClick={onClickUp}>
          <Link smooth={true} to="header">
            <img src={Arrow} alt="arrow-up" className="footer__arrow--image" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
