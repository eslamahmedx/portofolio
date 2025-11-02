import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";

const iconMap = {
    'C++': <CgCPlusPlus/>,
    'Postman': <SiPostman/>,
    'React': <FaReact/>,
    'Javascript': <DiJavascript1/>,
    'Node' : <DiNodejs/>,
    'Express' : <SiExpress/>,
    'MongoDb' : <SiMongodb/>,
    'Git' : <FaGitAlt/>,
    'Github' : <FaGithub/>,
    'Npm' : <FaNpm/>,
    'Figma' : <FaFigma/>,
    'Bootstrap': <FaBootstrap/>,
    'Vercel' : <SiVercel/>,
    'TypeScript': null,
    'HTML': null,
    'CSS': null,
    'Linux': null
}

const Skills = ({skill}) => {
    const icon = iconMap[skill] ?? skill[0]; // fallback: first letter
    const style = { color: '#00e676', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' };

  return (
    <div title={skill} className='SkillBox' style={{ width: 56, height: 56, borderRadius: 10, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 8px rgba(0,0,0,0.6), 0 6px 18px rgba(0,0,0,0.6)', cursor: 'default' }}>
      <div style={style}>
        {icon ?? <span style={{ color: '#cfeee0', fontSize: 16 }}>{skill}</span>}
      </div>
    </div>
  )
}

export default Skills;
