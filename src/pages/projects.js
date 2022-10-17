import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import myProjects from '../data/projects'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import styles from "../styles/Projects.module.css"
import Categories from '../components/Categories/Categories'

export default function Projects({projectsList}) {

  // all projects categories
  const allCategories = ['all', ...new Set(projectsList.map((myProject) => myProject.type))]

  const [myProjects, setMyProjects] = useState(projectsList)
  const [categories, setCategories] = useState(allCategories)

  const filterProjects = (type) => {
    if(type === "all") {
      setMyProjects(projectsList);
      return;
    }

    const filteredProjects = projectsList.filter((project) => project.type === type);
    setMyProjects(filteredProjects);
  }

  return (
    <Layout title='My Projects'>

      <div className={styles.container}>
        
        <h3 className={styles.title}>My Projects</h3>
        
        {/* menu bar to filter by category */}
        <div className={styles.menuContainer}>
        <Categories categories={categories} filterProjects={filterProjects}  />
        </div>

       <div className={styles.projectsListContainer}>
          <ProjectsList myProjects={myProjects} />
       </div>

      </div>    

    </Layout>
  )
}

export async function getStaticProps(){
  return {
    props: {
      projectsList: myProjects
    }
  }
}
