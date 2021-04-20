import React, {useState} from 'react'
import { project_data } from './ProjectData'
import ProjectCard from './ProjectCard'

function Projects() {
    const [projects, setProjects] = useState(project_data)
    const [active, setActive] = useState('All')
    const handleFilterCategory = (name) => {
    const new_array =  project_data.filter(project => project.category.includes(name))
    setProjects(new_array)
    setActive(name)
    }
    return (
        <section id="projects">
           <div className="filter-wrapper">
              <div className="project-filterBar">
                <div className={active === 'All' && 'project-filterBar__active'} onClick={
                    () =>{
                        setProjects(project_data)
                        setActive('All')
                    }
                    
                    }>All</div>
                <div className={active === 'CSS' && 'project-filterBar__active'} onClick={() => handleFilterCategory('CSS')}>CSS </div>
                <div className={active === 'React' && 'project-filterBar__active'} onClick={() => handleFilterCategory('React')}>React</div>
                <div className={active === 'JS' && 'project-filterBar__active'} onClick={() => handleFilterCategory('JS')}>JS</div>
                <div className={active === 'Gatsby' && 'project-filterBar__active'} onClick={() => handleFilterCategory('Gatsby')}>Gatsby</div>
                <div className={active === 'Node.js' && 'project-filterBar__active'} onClick={() => handleFilterCategory('Node.js')}>Node</div>
             </div>
           </div>
        <div className="card-wrapper">
              {
                  projects.map(project => 
                  <ProjectCard key={project.name} project={project} />)
              }
              </div>

        </section>
    );
}

export default Projects
  