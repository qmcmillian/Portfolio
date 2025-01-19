import React from 'react'
import ProjectsCard from './ProjectsCard';
import { projects } from './projectData';
import SectionTile from '../SectionTile';

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
        <SectionTile text='Web Creations'/>
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {
                projects.map((project) => {
                    return <ProjectsCard key={project.id} { ...project }/>
                })
            }
        </div>
    </section>
  )
}

export default Projects