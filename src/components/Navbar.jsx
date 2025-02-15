import React from 'react'
import "../App.css";

import styled from "styled-components"
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';

export default function Navbar() {
    const [menuIcon, setMenuIcon] = useState();
  return (
    <Wrapper>

    <div className={menuIcon ? "navbar active" : "navbar"}>
      <div id="nav-part1">Portfolio</div>
      <div id="nav-part2">
        <nav>
        <ul className='navbar-lists'>
          <li>
            <a href="#home" smooth={true} duration={500} onClick={() => setMenuIcon(false)}>
              <h3>Home</h3>
            </a>
          </li>
          <li>
            <a href="#about" smooth={true} duration={500} onClick={() => setMenuIcon(false)}>
              <h3>About</h3>
            </a>
          </li>
          <li>
            <a href="#portfolio" smooth={true} duration={500} onClick={() => setMenuIcon(false)}>
              <h3>Portfolio</h3>
            </a>
          </li>
          <li>
            <a href="#contact" smooth={true} duration={500} onClick={() => setMenuIcon(false)}>
              <h3>Contact</h3>
            </a>
          </li>
        </ul>
        </nav>
      </div>
      <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
    </div>
  
  </Wrapper>
  );
}

const Wrapper = styled.section`
position: sticky;
z-index: 999;
a{
text-decoration:none;}
.navbar{
box-sizing : border-box;
  background-color:rgba(0, 0, 0, 0.66);
  backdrop-filter: blur(10px);
  padding: 1rem; 
  position: sticky;
  width: fit;
  top: 0;
  
  display: flex;
  justify-content: space-around;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  gap: 1.5vw;
}



/* li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;
} */
#nav-part1 {
  padding: 8.4px 20px;
  font-family: pacifico;
  font-size: 30px;
  font-weight: 800;
  color:rgb(255, 255, 255);
}
#nav-part2 {
  display: flex;
  align-items: center;
  gap: 200px;
}

#nav-part2 h3 {
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 50px;
  font-weight: 500;
  color:rgba(255, 255, 255, 1);
  transition: all ease 0.4s;
  position: relative;
  font-size: 18px;
  overflow: hidden;
}
#nav-part2 h3::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  left: 0;
  bottom: -100%;
  border-radius: 50%;
  transition: all ease 0.4s;
  z-index: -1;
}

#nav-part2 h3:hover::after {
  bottom: 0;
  border-radius: 0;
  /* color: #fff; */
}

#nav-part2 h3 a {
  color: #a82d2dbb;
  text-decoration: none;
  position: relative;
  /* z-index: 9; */
}

#nav-part2 h3:hover {
  color: #000;
}
  
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }
    @media (max-width: 759px) {
    
    .mobile-navbar-btn {
    color : white;
     font-size: 3.5rem;
      display: inline-block;
      z-index: 9999;
      border: black;
      top: 30%;

      .mobile-nav-icon {
        font-size: 3rem;
        top: 50%;
        color: white;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 3rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: white;
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
     
      z-index: 999;
      
       .navbar-link {
        font-size: 3rem;
      }
}
}
`;
