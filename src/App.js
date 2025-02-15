
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import Animate from './components/Animate';

const info = {
  name: "Satyajit Mohanty",
  title: "Web Designer ",
  email: "satyajit1816@gmail.com",
  img0 : "Screenshot 2025-02-12 193938.png",
  img1 : "Screenshot 2025-02-12 194028.png",
  img2 : "Screenshot 2025-02-12 194125.png",
  img3 : "Screenshot 2025-02-12 194151.png",
  link : "https://monumental-bienenstitch-a93b19.netlify.app/",
  gitHub : "https://github.com/satyajit25125",

  linkedIn: "https://www.linkedin.com/in/satyajit-mohanty-a0068634a/",
};

export default function App() {
 

  
  
  return (
    <div>
    <Navbar/>
    <Animate><Home/></Animate>
    <Animate><About /></Animate>
    <Animate><Portfolio {...info}/></Animate>
     <Animate><Contact {...info}/></Animate>

  </div>
  );
}
// const Wrapper = styled.div`
// display: flex;
// flex-direction: column;
// `;
// const Content = styled.div`
// // z-index : 10;
// `;
// const Footer = styled.div`
// position: fixed;
// // z-index : 9;
// `;


