import { Avatar, IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {FaSun, FaMoon} from "react-icons/fa"
import styles from "./Navigation.module.css"




export default function Navigation() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "dark"
  )

  const getStorageTheme = () => {
  let theme = "light-theme"
  if(localStorage.getItem("theme")){
    theme = localStorage.getItem("theme")
  }
  return theme;
 }

 useEffect(() => {
  getStorageTheme()
 }, [theme])

  const toggleTheme = () => {
    if(theme === "light-theme"){
      setTheme("dark-theme")
    }else{
      setTheme("light-theme")
    }
  }

  useEffect(() => {
     document.documentElement.className = theme;
     localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <nav className={styles.nav}>
        {/* header container */}
        <div className={styles.navHeader}>
            {/* logo */}
        <div className={styles.logoContainer}>
                <h1>
                   <Link href="/">B</Link>
                </h1>
        </div>

       <div className={styles.container}>
        {/* link to projects page */}
        <Link href="/projects">Projects</Link>

        {/* toggle menu */}
        <IconButton className={styles.iconContainer} onClick={toggleTheme}>
          {theme === "light-theme" ? 
            <FaMoon className={styles.toggleIcon}/> :
            <FaSun className={styles.toggleIcon}/>
          }
        </IconButton>
        </div>

</div>


    </nav>
  )
}
