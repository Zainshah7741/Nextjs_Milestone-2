import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircle, IoArrowBackOutline } from "react-icons/io5";
import { Oldenburg, Caveat, Comme } from "next/font/google"
import { FaGithubSquare, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image';
import style from "./page.module.css"

const fontStyle = Caveat({ weight: '400', subsets: ['latin'] })
const fontHeading = Oldenburg({ weight: '400', subsets: ['latin'] })
const btnFont = Comme({ weight: '500', subsets: ['latin'] })


const About = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Link href={"/"} className={style.arrow_back_one} ><IoArrowBackOutline className='_text-Shadow' /></Link>
                <Link href={"/"} className={style.arrow_back_two} ><IoArrowBackCircle className='_text-Shadow ' /></Link>
                <h1 className={style.heading}>ABOUT ME</h1>
                <div className={style.about}>
                    <div className={style.image_container}>
                        <Image src={'/pic.png'} alt='' width={400} height={400} className={style.image}></Image>
                    </div>
                    <div className={`${fontStyle.className} ${style.right_container}`}>
                        <h1 className={`${fontHeading.className} ${style.about_me} `}>ABOUT ME</h1>
                        <p className={style.paragraph}><span className={style.text}>Hello, I’m</span> <span className={`_text-Shadow  ${style.name}`}>Zain Shah</span> A Front-End Developer with a true passion for creating beautiful and functional websites. I specialize in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS, and I love bringing designs to life with clean, responsive code that works seamlessly on all devices.</p>
                        <p >Web development isn’t just my profession; it’s something I genuinely enjoy. I’m always excited to explore new tools, learn new techniques, and take on challenges that push my skills further. Every project is an opportunity for me to combine creativity with technical expertise, and I’m committed to delivering quality results that make a difference.</p>
                        <Link href='/contact' className={`${btnFont.className} ${style.btn}`}>CONTACT</Link>
                    </div>
                    <div className={style.social}>
                        <Link href="https://www.linkedin.com/in/zain-shah-961b5428b/" target='_blank'><FaLinkedinIn className='text-[#0077B5] p-1 bg-black rounded ' title='LinkedIn' /></Link>
                        <Link href="https://github.com/Zainshah7741" target='_blank'><FaGithubSquare className=' rounded  text-[#d2c8c8]' title='GitHub' /></Link>
                        <Link href="mailto:zainshah7741@gmail.com" target='_blank'><SiGmail className={`rounded  `} title='Gmail' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

