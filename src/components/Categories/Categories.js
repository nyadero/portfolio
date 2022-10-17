import React from 'react'
import styles from "./Categories.module.css"

export default function Categories({categories, filterProjects}) {

  const click =() => {
    alert("clicked me")
  }
  return (
    <div className={styles.categoriesContainer}>
        {categories.map(category => {
            return (
                <button
                type='button'
                 key={category}
                 onClick={() => filterProjects(category)}
                 className={styles.categoryBtn}
                 >{category}
                 </button>
            )
        })}
    </div>
  )
}
