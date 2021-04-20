import React from 'react'
import SkillBar from './SkillBar'
import { languages } from './SkillsData'
import { SiVisualstudio, SiAdobephotoshop,SiAdobeillustrator,SiAsana,SiGithub } from "react-icons/si";

const tools = [
  {
  icon:<SiAdobephotoshop />,
  name : 'Photo Shop'
  },
  {
  icon:<SiAdobeillustrator />,
  name : 'Illustrator'
  },
  {
  icon:<SiAsana />,
  name : 'Asana'
  },
  {
  icon:<SiVisualstudio />,
  name : 'VS Code'
  },
  {
  icon:<SiGithub />,
  name : 'Git & GitHub'
  }

];
function Skills() {

  const Tools =({value: {icon,name} }) => {
    return (
    <div className="tool-card">
      <div className="card-content">
        {icon}
        <h6>{name}</h6>
        </div>     
    </div>
    );
};

    return (
        <section id='my-skiils'>
          <div className='paragraph'>
           <h2>Inter-Personal Skills</h2>
             <div className="softSkills-wrapper">
             <ul>
              <li>Well Organised</li> 
              <li>Self-Motivated</li> 
              <li>Value Learning new Skills</li> 
              <li>Quick Leaner</li>
            </ul> 
            <ul>
              <li>Good communication skills </li> 
              <li>Team Player</li> 
              <li>Project Management</li> 
              <li>Knowledge of Scrum</li>
            </ul> 
             </div>

          </div>
          <div className='skills'>
            <div className="languages">
              <h2>Languages & FrameWorks</h2> 
              <div className="languages-body">
                 {
                   languages.map(language=>
                    <SkillBar value={language} />)
                 }
              </div>
            </div>
            <div className="tools">
              <h2>Tools</h2>
              <div className="tools-boby">
              {
                   tools.map(tool=>
                    <Tools className='icon' value={tool} />)
                 }
              </div>
            </div> 
          </div>
        </section>

    )
}



export default Skills
