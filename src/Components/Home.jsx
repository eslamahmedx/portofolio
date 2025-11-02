import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/Coder Coding.json";
import Typed from "./Typed.jsx";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.gif';

const neon = {
  color: '#e6fff3', // light text
  textShadow: '0 0 10px rgba(0, 230, 118, 0.12)',
};

const nameStyle = {
  color: '#00e676', // neon green
  textShadow: '0 0 12px rgba(0,230,118,0.25)',
  display: 'inline-block',
};

const Home = () => {
  return (
    <div>
      <div className='HomePage' style={{ background: 'rgba(13, 13, 13, 0.65)' }}>



        <div className='HomeText' style={{ padding: 20 }}>
          <h1 style={neon}>Hello,</h1>
          <h1 style={{ ...neon, marginTop: 8 }}>
            I'M <b style={nameStyle}>ESLAM AHMED</b>
          </h1>
          <Typed/>
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
          style={{ maxWidth: 420 }}
        />
        
      </div>

      <div className='AboutPage' style={{ background: 'rgba(13, 13, 13, 0.65)', padding: '40px 20px' }}>


        <div className='AboutText' style={{ color: '#dfeee6', maxWidth: 760 }}>
          <h1 className='AboutTextHeading' style={{ color: '#00e676' }}>About <b style={{ color: '#dfeee6' }}>Me</b></h1>
          <p style={{ lineHeight: 1.7 }}>
            I am a <b>Front-End Developer</b> focused on building modern, responsive web interfaces.
            I prioritize readable code, consistent layouts, and predictable user interactions.<br /><br />
            I completed a certified <b>Front-End Development</b> program at <b>Route Academy</b> and delivered several practical projects using
            <b> HTML, CSS, JavaScript, and React.js</b> — including a public project: <i>Yummy Explorer</i> (see Projects).<br /><br />
            I work with Linux-based development environments and apply basic UI/UX principles to improve accessibility and clarity.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Eslam Ahmed" style={{ width: 220, borderRadius: 12, boxShadow: '0 6px 22px rgba(0,0,0,0.6)' }}/>
        </Tilt>
      </div>
    </div>
  )
}

export default Home;
