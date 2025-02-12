import React from 'react'
import styled from 'styled-components';

export default function Portfolio({img0, img1, img2, img3, link }) {
  let arr = [img0, img1, img2, img3];
  
  return (
    <Wrapper id='portfolio'>
      
      <div className="container m-5 p-5 ">
      <h1>
        My Portfolio
      </h1>
      <br />
      <hr />
        <div className="row">
          <div className="col-md-6 left">
            {/* <div className="row m-1">
              <div className="col-sm-6"><img style={{objectFit: "cover"}} src="Screenshot 2025-02-12 193938.png" alt="" /></div>
              <div className="col-sm-6"><img style={{objectFit: "cover"}} src="Screenshot 2025-02-12 194028.png" alt="" /></div>
            </div>
            <div className="row m-1">
              <div className="col-sm-6"><img style={{objectFit: "cover"}} src="Screenshot 2025-02-12 194125.png" alt="" /></div>
              <div className="col-sm-6"><img style={{objectFit: "cover"}} src="Screenshot 2025-02-12 194151.png" alt="" /></div>
            </div> */}
            <div className="grid">
              {arr.map((curElem, )=>{
                return <img src={curElem} alt="" />
              })}
            </div>
          </div>
          <div className="col-md-6 right">
            <h3>
             <a href={link}> R-store (e-commerce website)</a>
              <hr />
            </h3>
            <p>
              E-commerce site made with Html, css, JS, React, Styled-components(React-library).
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
font-family: urbanist;
text-align : center;

p{
font-size: 25px;}
img{
width : 100%;
height : 100%;
object-fit: cover;
}
.grid{
display: grid;
gap : 1rem;
 grid-template-columns: repeat(2, 1fr);
}
 a{
 text-decoration: none;
 color : white;}
 a:hover{
 color: blue}
`;
