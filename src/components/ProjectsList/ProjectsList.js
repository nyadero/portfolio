import React, {useState} from 'react'
// import projects from '../../data/projects'
import Project from '../Project/Project'
import styles from "./ProjectsList.module.css"

export default function ProjectsList({myProjects, pathname}) {
  const [projects, setProjects]= useState(myProjects)
  return (
    <div className={styles.projectsList}>
        {pathname == "/" ? projects.slice(0, 6).map(project => {
          return (
            <Project key={project.id}  project={project} /> 
          )
        }) : myProjects.map(project => {
            return (
              <Project key={project.id} project={project} />
             )
        })}
    </div>
  )
}
