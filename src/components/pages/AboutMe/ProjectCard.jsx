import React from 'react'

const ProjectCard = ({project:{title,tech,links,linkBtnTitle,image,category}}) => {
    return (
         <div className="projectCard">
            <img src={image} alt={title} />
             <div className="projectCard__info overlay-top">
               <h6 className='projectCard__info-title'><span>Title: </span>{title}</h6>
               <h6 className='projectCard__info-tech'><span>Technologies: </span>{tech}</h6>
               <a href={links} className='projectCard__info-linkBtn' target='_blank' rel="noreferrer">{linkBtnTitle}</a>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default ProjectCard
    