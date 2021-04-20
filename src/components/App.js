import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Footer from './NavBar/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
   <div className="App-wrapper">
    <div className="App-container">
       <Router>
         <NavBar />
         <div className='content-container'>
         <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pages/About' component={About} />
          <Route exact path='/contact' component={Contact} />
         </Switch>
         <Footer />
         </div>

       </Router>
    </div>
   </div>
  );
}

export default App;
