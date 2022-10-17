/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {FaGithub, FaNodeJs, FaLinkedin, FaTwitter, FaInstagram, FaJava, FaPython, FaAndroid, FaVaadin, FaReact, FaHeart} from "react-icons/fa"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>
          <div className={styles.socialLinks}>
            {/* github link */}
            <div className={styles.iconContainer}>
              <a href="https://www.github.com/nyadero" target="_blank" rel="noreferrer">
                {/* <FaGithub className={styles.icon} /> */}
                <img src="/github-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>

            {/* linkedin link */}
            <div className={styles.iconContainer}>
              <a href="https://www.linkedin.com/in/nyadero-brian" target="_blank" rel="noreferrer" >
                {/* <FaLinkedin className={styles.icon} /> */}
                <img src="/linkedin-app-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>

            {/* twitter link */}
            <div className={styles.iconContainer}>
              <a href="https://twitter.com/Nyadero010" target="_blank" rel="noreferrer">
                {/* <FaTwitter className={styles.icon} /> */}
                <img src="/twitter-color-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>

            {/* instagram */}
            <div className={styles.iconContainer}>
              <a href="https://www.instagram.com/steve.odhiambo.986/" target="_blank" rel="noreferrer" >
                {/* <FaInstagram className={styles.icon} /> */}
                <img src="/instagram-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>
          </div> 

      <span className={styles.copyright}>&copy; {new Date().getFullYear()}</span>


     </div>
      
    </footer>
  )
}
