import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coderr from '../LottieFiles/Coderr.json';

const About = () => {
  return (
    <>
      <div 
        className='AboutPage' 
        style={{ 
          background: 'rgba(13, 13, 13, 0.75)', 
          padding: '40px 20px' 
        }}
      >

        <div className='AboutText' style={{ maxWidth: 760 }}>
          <h1 
            className='AboutTextHeading' 
            style={{ color: '#018a7b' }}
          >
            Get to <b style={{ color: '#dfffe8' }}>know</b> me
          </h1>
          <p style={{ lineHeight: 1.7 }}>
            My name is <b style={{ color: '#018a7b' }}>Eslam Ahmed</b>. 
            I work as a <b style={{ color: '#018a7b' }}>Front-End Developer</b> 
            with practical experience in building responsive web applications using React.
            I completed a certified Front-End program at Route Academy and delivered practical projects, 
            including <b style={{ color: '#018a7b' }}>Yummy Explorer</b> — a responsive meal discovery app.
            <br/><br/>
            I focus on clear interfaces, accessibility basics, and maintainable code. 
            I also use Linux for development and version control systems such as Git/GitHub.
            <br/><br/>
            I am available for freelance projects and entry-level or internship roles in front-end development. 
            Links are available in the footer.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coderr} 
              loop={true} 
              style={{ width: 320 }}
            />
          </Tilt>
        </div>

      </div>
      
      <h1 
        className='SkillsHeading' 
        style={{ color: '#018a7b', marginTop: 28 }}
      >
        Professional Skillset
      </h1>

      <div 
        className='skills' 
        style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}
      >
        <Skills skill='React' />
        <Skills skill='Javascript' />
        <Skills skill='TypeScript' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Figma' />
        <Skills skill='Linux' />
      </div>
    </>
  )
}

export default About;
