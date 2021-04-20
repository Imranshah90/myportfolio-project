
import Project from '../../images/project.jpg'
import ProjectOne from '../../images/profile.jpg'
import ProjectNode from '../../images/nodejs.jpg'
import ProjectCss from '../../images/css.jpg'

const Projectnode = ProjectNode;
const Projectcss = ProjectCss;
const ProjectPortfolio = ProjectOne;
const ProjectImg = Project;

export const project_data = [
    {
    title : 'My Portfolio',
    tech:'CSS, React, Particle.js, Email.js',
    links:'https://imran-shah.netlify.app/',
    linkBtnTitle:'Web Link',
    image: ProjectPortfolio,
    category: ['React']
    },
    {
    title : 'Node.js Demo',
    tech:'JavaScript, Node.js',
    links:'https://nodejs.org/en/',
    linkBtnTitle:'Web Link',
    image: Projectnode,
    category: ['Node.js']
    },
    {
    title : 'CSS Demo',
    tech:'HTML, CSS, flexbox, Css Animation',
    links:'https://css-tricks.com/',
    linkBtnTitle:'Web Link',
    image: Projectcss,
    category: ['CSS']
    },
    {
    title : 'Demo 4',
    tech:'HTML & CSS',
    links:'https://github.com/',
    linkBtnTitle:'Source Code',
    image: ProjectImg,
    category: ['JS']
    },
    {
    title : 'Demo 5',
    tech:'HTML & CSS',
    links:'https://github.com/',
    linkBtnTitle:'Source Code',
    image: ProjectImg,
    category: ['Gatsby']
    },
    {
    title : 'Demo 6',
    tech:'HTML & CSS',
    links:'https://github.com/',
    linkBtnTitle:'Source Code',
    image: ProjectImg,
    category: ['Gatsby','Node.js']
    }
  ];

