import '../styles/components/footer.scss';
import Arrow from '../images/arrow-down.png';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="footer">
        <div className="footer__arrow" onClick={goToTop}>
          {showTopBtn && (
            <img src={Arrow} alt="arrow-up" className="footer__arrow--image" />
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
