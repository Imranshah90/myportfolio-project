import React from 'react'
import { VscLocation } from 'react-icons/vsc';

function AboutMe() {
    return (
     <section id="about-me">
        <div className='paragraph'>
            <p>Graduate of Computing and Information Systems with a keen interest in web and database development. Able to work collaboratively within a team in addition to effectively managing my own time and using my own initiative.I like to take part in projects that instigate me to learn new technologies. I am a critical thinker with a passion to expand my skillset and knowledge further within software/web development.</p>
        </div>
        <div className="experiences">
            <div className="education">
                <h2>Education</h2>
                <div className="education-box">
                  <div className="circle-dot"></div>
                    <div className="timeline-content">
                    <h2 className='timeline-title'>Computing and Information System</h2>
                     <div>
                     <h4 className='timeline-location'><VscLocation />Bradford college</h4>
                    <h4 className='timeline-date'>2015-2018</h4>
                     </div>
                    </div>
                </div>
                <div className="education-box">
                  <div className="circle-dot"></div>
                    <div className="timeline-content">
                    <h2 className='timeline-title'>BTEC LEVEL 5 HND DIPLOMA in Business</h2>
                     <div>
                     <h4 className='timeline-location'><VscLocation />Bradford Metropolitian college</h4>
                    <h4 className='timeline-date'>2012-2013</h4>
                     </div>
                    </div>
                </div>
            </div>
            <div className="work ">
             <h2>Work Experience</h2>
             <div className="education-box">
                  <div className="circle-dot"></div>
                    <div className="timeline-content">
                    <h2 className='timeline-title'>Junior Web Developer</h2>
                    <div>
                     <h4 className='timeline-location'><VscLocation />Leeds</h4>
                     <h4 className='timeline-date'>2018-2020</h4>
                    </div>
                     <p>Through my 2+ years of experience as a web developer, my role was to write and style the front-end components that meet the requirements of our mocks. Through my experience I have used the following technologies: PHP, WordPress, Magento UI dashboard, Foundation Zurb , Css Animation, Photoshop.</p>
             </div>
           </div>

            </div>
        </div>
     </section>

    )
}

export default AboutMe
