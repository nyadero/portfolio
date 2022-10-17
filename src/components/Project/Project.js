import React from 'react'
import Link from "next/link"
import styles from "./Project.module.css"

export default function Project({project}) {
  const {id, name, type, languages, heroimage, description} = project;
  return (
    <Link href="/project/[id]" as={`/project/${name}`}>
    <a className={styles.project}>
      <>
      <div className={styles.bannerImage}>
         <img src={heroimage} width="90px" height="90px" layout='responsive' loading='lazy' alt={name} className={styles.image} />
      </div>

     <div className={styles.container}>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>
        {description.length > 140 ? description.substring(0, 120).concat("...") : description}
      </p>
      </div>
      </>
    </a>
    </Link>
  )
}
