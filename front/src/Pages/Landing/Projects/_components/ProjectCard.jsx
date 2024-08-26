import React from 'react'
import { Link } from 'react-router-dom'
import { source } from '../../../../methods'

const ProjectCard = ({_id , title , image}) => {
  return (
    <Link to={`/projects/${_id}`}>
        <div className="flex flex-col items-center p-2">
            <img className='rounded-lg w-full h-48 ' src={source(image)} alt={title} />
            <p className="text-center my-2">{title}</p>
        </div>
    </Link>
  )
}

export default ProjectCard