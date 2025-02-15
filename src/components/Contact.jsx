import React from 'react'
import styled from 'styled-components';

import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact({email, gitHub, linkedIn}) {
  return (
    <Wrapper id='contact'>
      <div className="container mt-5 p-2 ">
        <div className="row">
          <div className="col-md">
            <h2>
              My Contacts
              <hr />
            </h2>
           <div className="links">
           <a href={`mailto:${email}`}target='_blanck'><TfiEmail /></a>
            <a href={`${gitHub}`}target='_blanck'><FaGithub /></a>
            <a href={`${linkedIn}`}target='_blanck'><FaLinkedin/></a>
           </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
font-family: urbanist;
 min-height: 20vh;
 background-color: white;
 color: black;

  text-align : center;
  a{
  font-size : 38px;
  text-decoration: none;
  color: black;
}
  .links{
  display: flex;
  justify-content: center;
   align-items: center; /* Center-align the items */
  gap: 2.2rem; };
`;