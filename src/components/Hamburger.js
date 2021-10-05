import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import {
  staggerReveal,
  staggerRevealClose,
  staggerText,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCity,
  handleCityReturn
} from './Animations';

import seoul from '../images/seoul.jpg';
import busan from '../images/busan.jpg';
import gyeongju from '../images/gyeongju.jpg';
import jeju from '../images/jeju.jpg';
import dokdo from '../images/dokdo.jpg';

const cities = [
  {name: 'Seoul', image: seoul},
  {name: 'Busan', image: busan},
  {name: 'Gyeongju', image: gyeongju},
  {name: 'Jeju', image: jeju},
  {name: 'Dokdo', image: dokdo},
];

function Hamburger({ state }) {

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if(state.clicked === false) {
      // close our menu
      // menu.style.display = 'none';
      staggerRevealClose(revealMenu, revealMenuBackground);
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none'}
      });
    } else if(state.clicked === true || (state.clicked === true && state.initial === null)) {
      // open our menu
      // menu.style.display = 'block';
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        height: '100%',
        opacity: 1
      });
      gsap.to(menu, {
        duration: 0,
        css: { display: 'block'}
      });
      staggerReveal(revealMenuBackground, revealMenu);
      staggerText(line1, line2, line3);
      fadeInUp(info);
    }
  }, [state]);

  return (
    <div ref={i => (menu = i)} className="hamburger-menu">
      <div ref={i => (revealMenuBackground = i)} className="menu-secondary-background-color"></div>
      <div ref={i => (revealMenu = i)} className="menu-layer">
        <div ref={i => (cityBackground = i)} className="menu-city-background"></div>
            
        <div className="container">
          <div className="wrapper">
            
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link 
                      onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={i => (line1 = i)}
                      to="/opportunities">
                        Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link 
                      onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={i => (line2 = i)}
                      to="/solutions">
                        Solutions
                    </Link>
                  </li>
                  <li>
                    <Link 
                      onMouseEnter={handleHover}
                      onMouseOut={handleHoverExit}
                      ref={i => (line3 = i)}
                      to="/contact-us">
                        Contact-us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={i => (info = i)} className="info">
                <h3>Our Promise</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>

              <div className="locations">
                Locations:
                { cities.map(city => (
                  <span 
                    key={city.name}
                    onMouseEnter={() => handleCity(city.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;