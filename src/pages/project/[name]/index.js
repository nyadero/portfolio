/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Layout from "../../../components/Layout/Layout";
import projects from "../../../data/projects";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../styles/ProjectPage.module.css";

export default function Project({ project }) {
  const { name, id, languages, type, description, heroimage, demolink } =
    project;
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    let nextProject = id + 1;
    let myprojects = projects.filter((project) => project.id === nextProject);
    myprojects.map((project) => {
      setProjectName(project.name);
    });
  }, [id]);

  return (
    <Layout title={`Project : ${name}`}>
      <div className={styles.projectPage}>
        <div className={styles.container}>
          <div key={name} className={styles.imgCont}>
            <img
              src={heroimage}
              alt={name}
              width="100%"
              layout="responsive"
              className={styles.img}
            />
          </div>

          <div>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>

            <h3>Tools and languages used: </h3>
            <div className={styles.technologiesContainer}>
              {languages.map((language) => {
                return (
                  <div className={styles.technology} key={language}>
                    {language}
                  </div>
                );
              })}
            </div>

            <div className={styles.linksContainer}>
            {/* github links and/or download link if app or live url if web */}
            <a href={demolink}>
              <FaGithub className={styles.icon}/>
            </a>

            {type == "web" ? (
              <Link href={demolink}>Live demo</Link>
            ) : (
              <Link href="/">Download apk</Link>
            )}

            </div>
          </div>
        </div>

        {/* view next project */}
        <div className={styles.nextProject}>
          <Link href="/project/[name]" as={`/project/${projectName}`}>
            Next Project
          </Link>
        </div>
        
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const myProjects = projects.filter((project) => project.name === params.name);
  return {
    props: {
      project: myProjects[0],
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { name: project.name },
  }));

  return { paths, fallback: false };
}
