import { useState, useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'


function NavAboutMe() {
    const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
        else if (currentURL.endsWith('/skills'))
            setActive('Skills')

    }, [active])

  return(
    <div className='aboutNav'>
    <div className="about-active">
      {active}
    </div>
    <div className="aboutNav__links">
        {active !== 'About' && <Link to='/'><div className="aboutNav__link" onClick={() => setActive('About')}>About</div></Link>}

        {active !== 'Skills' ? <Link to='/skills'><div className="aboutNav__link" onClick={() => setActive('Skills')}>Skills</div></Link> : null}

        {active !== 'Projects' && <Link to='/projects'><div className="aboutNav__link" onClick={() => setActive('Projects')}>Projects</div></Link>}


    </div>
</div>
  );
}

export default NavAboutMe

