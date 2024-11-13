'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedin, FaGithubSquare, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Satisfy, Itim } from "next/font/google"
import Menu from './Menu';
import { IoCloseSharp } from "react-icons/io5";
import style from './navbar.module.css'


const lobster = Satisfy({
    weight: '400',
    subsets: ['latin']
})
const itim = Itim({ weight: '400', subsets: ['latin'] })

const Navbar = () => {

    const [display, setState] = useState(false)

    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <RxHamburgerMenu className={style.ham} onClick={() => setState(!display)} />
                {
                    display ?
                        <div className={style.list}>
                            <IoCloseSharp className={style.close} onClick={() => setState(!display)} />
                            <Menu></Menu>
                        </div>
                        : null
                }
                <ul className={`${itim.className} ${style.navlist}`}>
                    <li><Link href="/" className={`${style.border} ${style.navigations}`}>Home</Link></li>
                    <li><Link href="about" className={style.navigations}>About</Link></li>
                    <li><Link href="/skills" className={style.navigations}>Skills</Link></li>
                    <li><Link href="/project " className={style.navigations}>Projects</Link></li>
                    <li><Link href="/contact" className={style.navigations}>Contact</Link></li>
                </ul>
                <h1 className={`${lobster.className} ${style.heading}`}>Zain</h1>
                <div className=''>
                    <Link href='/'><Image src="/pic.png" alt="logo" width={500} height={500} title="logo" className={style.image}></Image></Link>
                </div>
                <ul className={style.links}>
                    <li><Link href="https://www.linkedin.com/in/zain-shah-961b5428b/" target='_blank'><FaLinkedin title='LinkedIn' /></Link></li>
                    <li><Link href="https://github.com/Zainshah7741" target='_blank'><FaGithubSquare title='GitHub' /></Link></li>
                    <li><Link href="mailto:zainshah7741@gmail.com" target='_blank'><SiGmail title='Gmail' /></Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar