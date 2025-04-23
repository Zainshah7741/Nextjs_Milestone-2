import Image from 'next/image'
import React from 'react'
import { Merriweather, Roboto_Condensed, Playwrite_ES } from "next/font/google"
import Link from 'next/link'

const font = Merriweather({ weight: "300", subsets: ['latin'] })
const nameFont = Playwrite_ES({ weight: "400" })
const btnFont = Roboto_Condensed({ weight: "600", subsets: ['latin'] })

const Hero = () => {
    return (
        <div className='bg-black'>
            <div className='w-[95%]  m-auto flex flex-col sm:flex-row justify-center items-center  py-16 gap-20 md:gap-16 md:w-[90%] '>
                <div className='sm:w-1/2 flex justify-center items-center'>
                    <Image src="/pic.png" alt='Pic' width={1024} height={1024} className='rounded-full w-72 md:w-96 shadow-[0_0_5px_0px_rgba(0,0,0,0.3)] shadow-blue-500    '></Image>
                </div>
                <span className='sm:w-1/2 sm:mt-2'>
                    <h2 className={`_text-Shadow  ${font.className} font-extrabold text-lg md:text-xl`}>Hello, It&apos;s Me</h2>
                    <h1 className={` _text-Shadow ${nameFont.className} text-[3rem] lg:text-[4rem]`}>Suhail Shah</h1>
                    <h2 className={`${font.className} font-extrabold text-lg md:text-xl`}>And I&apos;m a <span className='_text-Shadow text-blue-300 font-semibold'>Front-End Developer</span></h2>
                    <Link href="/about"><button className={`${btnFont.className} bg-blue-400 rounded-md py-1 px-4 sm:py-2 sm:px-6 text-xs sm:text-sm text-slate-950 mt-10 hover:bg-blue-500 active:scale-95 transition-all`}>ABOUT ME</button></Link>
                </span>

            </div>
        </div>
    )
}

export default Hero
