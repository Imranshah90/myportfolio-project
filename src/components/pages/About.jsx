import React from 'react'

import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import NavAboutMe from './AboutMe/NavAboutMe'
import AboutMe from './AboutMe/AboutMe'
import Skills from './AboutMe/Skills'
import Projects from './AboutMe/Projects'


function About() {
    return(
        <Router>
        <div className="about-Container">
          <NavAboutMe />
          <Switch>
                <Route exact path="/">
                  <AboutMe />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
        </div>
        </Router>
    );
}
export default About

