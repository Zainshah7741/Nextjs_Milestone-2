import Image from 'next/image'
import React from 'react'
import { Merriweather, Roboto_Condensed, Playwrite_ES } from "next/font/google"
import Link from 'next/link'
import style from './page.module.css'

const font = Merriweather({ weight: "300", subsets: ['latin'] })
const nameFont = Playwrite_ES({ weight: "400" })
const btnFont = Roboto_Condensed({ weight: "600", subsets: ['latin'] })

const Hero = () => {
    return (
        <div>
            <div className={style.main}>
                <div className={style.image_container}>
                    <Image src="/pic.png" alt='Pic' width={524} height={400} className={style.image}></Image>
                </div>
                <span className={style.right}>
                    <h2 className={`_text-Shadow  ${font.className} ${style.its_me}`}>Hello, It&apos;s Me</h2>
                    <h1 className={` _text-Shadow ${nameFont.className} ${style.name}`}>Zain Shah</h1>
                    <h2 className={`${font.className} ${style.its_me}`}>And I&apos;m a <span className={`_text-Shadow ${style.color}`}>Front-End Developer</span></h2>
                    <Link href="/about"><button className={`text-sm ${btnFont.className} ${style.btn} `}>ABOUT ME</button></Link>
                </span>

            </div>
        </div>
    )
}

export default Hero