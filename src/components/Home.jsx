import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
export default function Home() {
  
  return (
    <Wrapper >
      <div className="container mt-5 mb-5 p-5">
        <div className="row p-5">
          <div className="col-md">
            Hello! <br />
            I AM SATYAJIT. <br />
            AND I AM A -
          </div>
          <div className="row">
            <div className="col-md flash">
             <span><motion.div initial={{width: 0}} animate={{width : "10vh"}} transition={{ease : [0.76, 0, 0.24, 1], duration: 1}}  className="box"></motion.div></span>
            
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section.attrs({
  id: 'home', 
})`

height: 100vh;
.box{
background-color : red; 
height : 7vh;
width : 10vh;
display: inline-block; 
}

.container{
heigh : 100vh;
border : 1px solid white;
 border-radius: 10px;
 font-family: oswald;
 font-weight : 700;
 font-size: 60px
//  min-height : 500vh;
//  line-height : 1.2;
}
.flash {
        // width: 100%;
        // background-color: black;
        // height: 5vh;
        
        // display : flex;
        // text-align: center;
        margin-top: 5px;
       
      }
      .flash span::after  {
        content: "sale";
        color:rgb(255, 255, 255);
        animation: words 3s infinite;
        animation-timing-function: ease-in;
      }
      @keyframes words {
        0%,
        50% {
          content: "WEB DESIGNER.";
        }
        51%,
        100% {
          content: "LEARNER.";
        }
      }
`;
