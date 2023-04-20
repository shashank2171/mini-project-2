import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.js"; 
import SignInForm from "./SignInForm.js"; 
import Sign from "./Sign.js"; 

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  // handleHover,
  // handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import Horror from "../images/dallas.jpg";
import Fiction from "../images/austin.jpg";
import newyork from "../images/newyork.jpg";
import sanfrancisco from "../images/sanfrancisco.png";
import beijing from "../images/beijing.jpg";

const cities = [
  { name: "Horror", image: Horror },
  { name: "Fiction", image: Fiction },
  { name: "Humor", image: newyork },
  { name: "History", image: sanfrancisco },
  { name: "Adventure", image: beijing }
];


// function to render the login form of already signed up 


const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  // let line1 = useRef(null);
  // let line2 = useRef(null);
  // let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      //staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                    
                 
                   <Sign/>
                   
              </nav>


              <div>
      
    </div>


              <div ref={el => (info = el)} className='info'>
                <h3>How?</h3>
                <p>
                  please create an account to browse for books of your choice. Crawler will get you your desired books.
                </p>
              </div>
              <div className='locations'>
                Genre:
                {/* Returning the list of book types */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
