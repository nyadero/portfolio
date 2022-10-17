/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout/Layout";
// import Image from 'next/image'
import { useRouter } from "next/router";
import {
  FaGithub,
  FaNodeJs,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaJava,
  FaPython,
  FaAndroid,
  FaVaadin,
  FaReact,
  FaUikit,
  FaUnity,
} from "react-icons/fa";
import { Avatar } from "@mui/material";
import {} from "@mui/material"
import projects from "../data/projects";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import { useState } from "react";
import Contact from "../components/Contact/Contact";


export default function Home({ projectsList }) {
  const router = useRouter();
  const pathname = router.asPath;
  const [myProjects, setMyProjects] = useState(projectsList)

  
  return (
    <Layout>
      {/* intro */}
      <div className={styles.hero}>
       
         <Avatar src="/profile.jpg" style={{width:"200px", height:"200px"}} />

          {/* info about me */}
          <div className={styles.leftContainer}>
            <h2 className={styles.introTitle}>
              Hi I am <span>Nyadero Brian Odhiambo</span>,software engineer.
            </h2>
            <p className={styles.introSubtitle}>Welcome to my website, here you can follow me in my path to success in the field of backend development and native 
              android development. I am currently seeking for opportunities in backend or android development. Below you can find 
              links to all of my socials.
            </p>

            {/* <button>Download my CV</button> */}
          </div>

          <div className={styles.socialLinks}>
            {/* github link */}
            <div className={styles.iconContainer}>
              <a href="https://www.github.com/nyadero10" target="_blank" rel="noreferrer">
                {/* <FaGithub className={styles.icon} /> */}
                <img src="/github-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>

            {/* linkedin link */}
            <div className={styles.iconContainer}>
              <a href="linkedin.com">
                {/* <FaLinkedin className={styles.icon} /> */}
                <img src="/linkedin-app-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>

            {/* twitter link */}
            <div className={styles.iconContainer}>
              <a href="twitter.com">
                {/* <FaTwitter className={styles.icon} /> */}
                <img src="/twitter-color-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>

            {/* instagram */}
            <div className={styles.iconContainer}>
              <a href="instagram.com">
                {/* <FaInstagram className={styles.icon} /> */}
                <img src="/instagram-icon.svg" width="100%" alt="" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}

    <section className={styles.section}>
      {/* services me */}
      <div className={styles.services}>
        <div className={`${styles.service} ${styles.header}`}>
          <h2>My Services</h2>
        </div>

        {/* web development */}
        <div className={styles.service}>
          <div className={styles.iconsContainer}>
            <FaUikit className={styles.icon} />
          </div>

          <h3 className={styles.serviceTitle}>Web Development</h3>

          <p>
            I will design and develop simple and minimalistic yet beautiful and responsive user-friendly websites for you or your business/organization.
          </p>

        </div>

        {/* app development */}
        <div className={styles.service}>
          <div className={styles.iconsContainer}>
            <FaAndroid  className={styles.icon} />
          </div>

          <h3 className={styles.serviceTitle}>Android App Development</h3>

          <p>
            I design and develop native android apps using industry best practices
          </p>

        </div>

        {/* ui/ux */}
        <div className={styles.service}>
          <div className={styles.iconsContainer}>
          <FaUikit  className={styles.icon}  />
        </div>

           <h3 className={styles.serviceTitle}>ui/ux design</h3>

           <p>
            I will design and develop beautiful and responsive websites for you or your business
          </p>
        </div>
      </div>

      {/* about me */}
      {/* <div className={styles.aboutMe}>
        <div>
          <h4>About me: </h4>
          <p>
            About me goes here
          </p>
        </div>

        <div className={styles.imgContainer}>
         {/* <img src="/me.jpg" alt="nyadero brian" width="100%" layout="responsive" className={styles.image} /> 
        </div>

      </div> */}


      {/* work experience */}
      {/* <div className={styles.experienceContainer}>
        work experience goes here
      </div> */}

      </section>


      {/* projects showcase */}
      <div className={styles.projectsContainer}>
        {/* see all projects */}
        <div className={styles.container}>
          <h3 className={styles.projectsTitle}>Showcase</h3>

          
                        <Link href="/projects">
                            <a><button className={styles.seeAll}>See all</button></a>
                        </Link>
        
        </div>

        <p className={styles.projectsSubtitle}>I am interested in software development and tech in general. My projects are always experimental.</p>
        {/* projects container */}
        <ProjectsList myProjects={myProjects} pathname={pathname} />
      </div>

        {/* skills */}
      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Tech stacks and tools</h3>

        <div className={styles.skillsContainer}>
          {/* java language */}
          <div className={styles.iconContainer}>
            <FaJava className={styles.skillIcon} />
            <img src="/java-icon.svg" width="100%" alt="" className={styles.icon} />
          </div>

          {/* python */}
          <div className={styles.iconContainer}>
            <FaPython className={styles.skillIcon} />
              <img src="/python-icon.svg" width="100%" alt="" className={styles.icon} />
          </div>
          {/* Kotlin */}
          <div className={styles.iconContainer}>
            <FaVaadin className={styles.skillIcon} />
            <img src="/kotlin-icon.svg" width="100%" alt="" className={styles.icon} />
          </div>
          {/* React */}
          <div className={styles.iconContainer}>
            <FaReact className={styles.skillIcon} />
            {/* <span>Java</span> */}
          </div>
          {/* Nodejs */}
          <div className={styles.iconContainer}>
            <FaNodeJs className={styles.skillIcon} />
            <img src="/node-js-icon.svg" width="100%" alt="" className={styles.icon} />
          </div>
           {/* android studio */}
          <div className={styles.iconContainer}>
            <FaUnity className={styles.skillIcon} />
              <img src="/android-studio-icon.svg" width="100%" alt="" className={styles.icon} />
          </div>
        </div>
      </div>

      {/* contact me */}
      <section className={styles.contactsContainer}>
       <Contact/>
      </section>

    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projectsList: projects,
    },
  };
}
