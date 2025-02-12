import React from 'react'
import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper >
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md p-4">
          About Me
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md">
                <span className='p-5'>
                I'm a Web Design student studying at K.J. Institute of Technology. I have  fundamental knowledge of Developing React projects. Enthusiast to learn
                new things which are going to be useful in my future for my career. 
                </span>
                <hr />
                <h2 className='p-5'>
                  My Skills
                </h2>
                <table className="table table-borderless">
                  <tbody>
                  <tr>
                    <td>Html/Css</td>
                    <td>JavaScript</td>
                  </tr>
                  <tr>
                    <td>Bootstrap</td>
                    <td>Tailwind</td>
                  </tr>
                  <tr>
                    <td>Jquery</td>
                    <td>React</td>

                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.section.attrs({
  id: 'about', 
})`
.container-fluid{
min-height: 500px;
width : 100%;
background-color : white; 
color : black;
font-family: urbanist;
font-size: 40px;
align-item: center;
align-content : center;
}
.col-md{
text-align:center;
}
span{
font-size: 27px;
// font-weigh : 200;
}
table{
font-size: 30px;
}
td::before{
content: "- "
}
`;
