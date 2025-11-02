import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      style={{ 
        background: 'rgba(13, 13, 13, 0.65)', 
        color: '#dfeee6',   
        padding: 18, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 8 
      }}
    >
      <h4 style={{ margin: 0 }}>
        Designed by <b style={{ color: '#00e676' }}>Eslam Ahmed</b>
      </h4>

      <h4 style={{ margin: 0, color: '#9fd9b9' }}>
        Copyright &copy; 2025
      </h4>

      <div className='footerLinks' style={{ display: 'flex', gap: 14, marginTop: 8 }}>
        <a 
          href="https://github.com/eslamahmedx" 
          target='_blank' 
          rel="noreferrer" 
          aria-label="GitHub"
          style={{ color: '#cfeee0', fontSize: 22 }}
        >
          <FaGithub />
        </a>

        <a 
          href="http://www.linkedin.com/in/eslam-ahmed-x" 
          target='_blank' 
          rel="noreferrer" 
          aria-label="LinkedIn"
          style={{ color: '#cfeee0', fontSize: 22 }}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
