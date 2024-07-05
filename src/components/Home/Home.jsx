import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import $ from "jquery"

export default function Home({ userData }) {
  const [isPressed, setIsPressed] = useState(true);

  const scrollToBottom = () => {
    setIsPressed(!isPressed); // Toggle the isPressed state

    if (!isPressed) {
      // If isPressed is true, scroll to the top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Otherwise, scroll to the bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    window.onload = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: for a smooth scroll effect
      });
    };
  }, []);
  //////////////////////////

  const [currentColor, setCurrentColor] = useState('#e65f78');

  const handleClick = (event) => {
    // Prevent default action to stop page scrolling or jumping
    event.preventDefault();

    // Get the background color of the clicked element
    const curColor = window.getComputedStyle(event.target).backgroundColor;

    // Update the state with the new color
    setCurrentColor(curColor);
  };


  const el = React.useRef(null);

  React.useEffect(() => {
    $('.test').fadeOut(2500).slideUp(2500);
    const typed = new Typed(el.current, {
      strings: [
        "with care, treasured with love.",
        " with care, treasured with love.",
      ],
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      typeSpeed: 40,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <>
      <div className={`${styles.startSection}`}></div>
      <div className={`${styles.colorBox}`}>
        <div className={`${styles.colorOption}`}>
          <ul className="list-unstyled">
            <li className={`${styles.item} ${styles.item1} test11`} onClick={handleClick}></li>
            <li className={`${styles.item} ${styles.item2} test22`} onClick={handleClick}></li>
            <li className={`${styles.item} ${styles.item3} rest33`} onClick={handleClick}></li>
          </ul>
        </div>
        <i className="fa fa-cog fa-spin"></i>
      </div>
      {/* ///////////////Header section /////////////// */}
      <div className={`${styles.homeSec}`}>
        <div className="test bg-info fixed-top"> Have anice time, happy shopping</div>
        <div>
          <h1 className={`${styles.headFont} my-5 theme`}  style={{ color: currentColor }}>Lotus</h1>
          <h2 className="">
            Crafted <span ref={el} style={{ color: currentColor }} />
          </h2>
          {userData ? "" : (
            <div>
              <button className={`btn ${styles.btn1} m-2 px-4 mt-5`} style={{ background: currentColor }}>
                <Link className="text-decoration-none" to="login" >
                  Log in
                </Link>
              </button>
              <button className={`btn ${styles.btn2} m-2 px-3 mt-5`}>
                <Link className="text-decoration-none" to="register" >
                  Register for free
                </Link>
              </button>
            </div>
          ) }
        </div>
      </div>
      <button className={`${styles.takeToB} ${styles.move} shadow`} onClick={scrollToBottom} 
      style={{ background: currentColor }}><i className="fa-solid fa-up-down"></i></button>

      <About userData={userData} currentColor={currentColor}/>

      <div className={`${styles.statistic}`}>
        <div className={`${styles.constTitle} text-center mb-4`}>
          <h3 className="mb-2 pt-5 theme" style={{ color: currentColor }}>Our statistics...</h3>
        </div>
        <div className="count py-3">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.countItem} text-center py-3`}>
                  <i className="fa fa-users"></i>
                  <h3 className="py-2">120</h3>
                  <p className="text-muted fw-bolder">Happy Customers</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className={`${styles.countItem} text-center py-3`}>
                  <i className="fa fa-thumbs-up"></i>
                  <h3 className="py-2">850</h3>
                  <p className="text-muted fw-bolder">Complete Orders</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.countItem} text-center py-3`}>
                  <i className="fa fa-bullhorn"></i>
                  <h3 className="py-2">9450</h3>
                  <p className="text-muted fw-bolder">Advertising</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.countItem} text-center py-3`}>
                  <i className="fa fa-cloud-download"></i>
                  <h3 className="py-2">780</h3>
                  <p className="text-muted fw-bolder">photos Downloaded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* //// developer /// */}
<div className={`${styles.developer}`}>
        <div className={`${styles.constTitle} text-center mb-2`}>
          <h3 className="mb-2 pt-5 theme" style={{ color: currentColor }}>Our Developer..</h3>
        </div>

<div className="count py-5">
  <div className="container m-auto">
    <div className={` flex-wrap d-flex justify-content-center align-items-center`}>
{/* ////dev1 */}
    <div className={`${styles.flipcard} `}>
      <div className={`${styles.flipcardfront}`}>
        <div className={`${styles.inner}`}>
          <h3 style={{ color: currentColor }}>Hajar</h3>
        </div>
      </div>
      <div className={`${styles.flipcardback}`}>
        <div className={`${styles.inner}`}>
          {/* <h3>Hajar samy</h3> */}
          <p>
            Backend developer
            <br />
            ALX student @ holberton school
            <br />
            <Link to={`https://github.com/hagarSamy`} target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-white m-2"></i></Link>
            <Link to={`https://x.com/HagarSamy0`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-white m-2"></i></Link>
            <Link to={`https://www.linkedin.com/in/hagar-samy-420414220/`} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-white m-2"></i></Link>

          </p>
        </div>
      </div>
    </div>
{/* //// dev2 */}
    <div className={`${styles.flipcard}`}>
      <div className={`${styles.flipcardfront}`}>
        <div className={`${styles.inner}`}>
          <h3 style={{ color: currentColor }}>Aya</h3>
        </div>
      </div>
      <div className={`${styles.flipcardback}`}>
        <div className={`${styles.inner}`}>
          {/* <h3>Aya Anwar</h3> */}
          <p>
            Backend developer
            <br />
            ALX student @ holberton school
            <br />
            <Link to={`https://github.com/aya-cs22`} target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-white m-2"></i></Link>
            <Link to={`https://x.com/AyaAnwar501`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-white m-2"></i></Link>
            <Link to={`https://www.linkedin.com/in/aya-anwar-473115279/`} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-white m-2"></i></Link>
          </p>
        </div>
      </div>
    </div>

{/* //// dev3  */}
    <div className={`${styles.flipcard} `}>
      <div className={`${styles.flipcardfront}`}>
        <div className={`${styles.inner}`}>
          <h3 style={{ color: currentColor }}>Sabah</h3>
        </div>
      </div>
      <div className={`${styles.flipcardback}`}>
        <div className={`${styles.inner}`}>
          {/* <h3>Sabah Ahmed</h3> */}
          <p>
            Frontend developer
            <br />
            ALX student @ holberton school
            <br />
            <Link to={`https://github.com/sabah-hue`} target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-white m-2"></i></Link>
            <Link to={`https://x.com/SabahAhmed36`} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-white m-2"></i></Link>
            <Link to={`https://www.linkedin.com/in/sabah-ahmed-0a2a5b100/`} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-white m-2"></i></Link>

          </p>
        </div>
      </div>
    </div>

    </div>
  </div>
</div>

  </div>

{/* ///////////////video/////////// */}
<div className={`${styles.developer}`}>
        <div className={`${styles.constTitle} text-center mb-2`}>
          <h3 className="mb-2 pt-5 theme" style={{ color: currentColor }}>Watch us..</h3>
        </div>
  <div className="count py-5">
  <div className="container m-auto">
    <div className={` flex-wrap d-flex justify-content-center align-items-center`}>

    <div className="shadow">
    <iframe
          width="853"
          height="480"
          src={require("./land.mp4")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="lotus demo"
        />
  </div>


      </div>
      </div>
      </div>
      </div>

      <Contact currentColor={currentColor} />

      <Footer currentColor={currentColor} />
    </>
  );
}
