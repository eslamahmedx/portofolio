import React from 'react';
import ProjectBox from './ProjectBox';
import YummyImage from '../images/YummyPreview.png'; 
import PortfolioImage from '../images/YummyPreview.png';
import BookmarkImage from '../images/YummyPreview.png';

const Projects = () => {
  return (
    <div style={{ padding: '18px' }}>
      <h1 className='projectHeading' style={{ color: '#018a7b', textAlign: 'center' }}>
        My <b style={{ color: '#dfeee6' }}>Projects</b>
      </h1>

      <div 
        className='project' 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 24, 
          marginTop: 32,
          justifyItems: 'center'
        }}
      >

        {/* Project 1 */}
        <ProjectBox 
          projectPhoto={YummyImage} 
          projectName="Yummy Explorer"
          projectDescription="A responsive meal discovery web app. Search by name, category, area, or ingredients. Built with TheMealDB API."
          projectGithub="https://github.com/eslamahmedx/Yummy-Explorer"
          projectDemo="https://github.com/eslamahmedx/Yummy-Explorer" 
        />

        {/* Project 2 */}
        <ProjectBox 
          projectPhoto={PortfolioImage} 
          projectName="Portfolio Website"
          projectDescription="A personal portfolio website built with React to showcase projects, skills, and experience in a clean modern layout."
          projectGithub="https://github.com/eslamahmedx/Portfolio"
          projectDemo="https://eslamahmedx.github.io/Portfolio"
        />

        {/* Project 3 */}
        <ProjectBox 
          projectPhoto={BookmarkImage} 
          projectName="Dashboard"
          projectDescription="A simple bookmark manager that allows you to save, edit, and organize your favorite links. Built with React and local storage."
          projectGithub="https://github.com/eslamahmedx/Bookmark-App"
          projectDemo="https://eslamahmedx.github.io/Bookmark-App"
        />

      </div>
    </div>
  )
}

export default Projects;
