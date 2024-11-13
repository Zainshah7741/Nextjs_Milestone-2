import React from 'react'
import Link from 'next/link';
import { IoArrowBackCircle, IoLogoJavascript, IoArrowBackOutline } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import styles from './page.module.css';

const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Link href={"/"} className={`${styles.backButtonLarge}`}>
                    <IoArrowBackOutline className={styles.icon} />
                </Link>
                <Link href={"/"} className={`${styles.backButtonSmall}`}>
                    <IoArrowBackCircle className={styles.icon} />
                </Link>
                <div className={styles.skillsTitleContainer}>
                    <h1 className={styles.skillsTitle}>SKILLS</h1>
                    <div className={`${styles.skillsGrid} `}>
                        <div className={styles.iconContainer}>
                            <FaHtml5 className={`_hovr ${styles.icons} ${styles.iconHtml} `} />
                            <span className={` ${styles.skillLabel}`}>HTML</span>
                        </div>
                        <div className={styles.iconContainer}>
                            <FaCss3Alt className={`_hovr ${styles.icons} ${styles.iconCss} `} />
                            <span className={` ${styles.skillLabel}`}>CSS</span>
                        </div>
                        <div className={styles.iconContainer}>
                            <IoLogoJavascript className={`_hovr ${styles.icons} ${styles.iconJavascript}`} />
                            <span className={` ${styles.skillLabel}`}>Javascript</span>
                        </div>
                        <div className={styles.iconContainer}>
                            <BiLogoTypescript className={`_hovr ${styles.icons} ${styles.iconTypescript} `} />
                            <span className={` ${styles.skillLabel}`}>Typescript</span>
                        </div>
                        <div className={styles.iconContainer}>
                            <RiNextjsFill className={`_hovr ${styles.icons} ${styles.iconNextjs} `} />
                            <span className={` ${styles.skillLabel}`}>Next.js</span>
                        </div>
                        <div className={styles.iconContainer}>
                            <RiTailwindCssFill className={`_hovr ${styles.icons} ${styles.iconTailwind} `} />
                            <span className={` ${styles.skillLabel}`}>Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
