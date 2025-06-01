import React from 'react'
import Link from 'next/link';
import { Dancing_Script, Abril_Fatface } from 'next/font/google'
import { IoArrowBackCircle, IoLogoJavascript, IoArrowBackOutline } from "react-icons/io5";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiBootstrap, SiMysql } from "react-icons/si";


const nameFont = Abril_Fatface({ weight: "400", subsets: ['latin'] })
const fontStyle = Dancing_Script({ weight: "400", subsets: ['latin'] })

const Skills = () => {
    return (
        <div className=' w-screen flex  justify-center ' >
            <div className='w-[80%]  flex flex-col items-center justify-center '>
                <Link href={"/"} className='text-blue-300 hidden sm:block text-4xl place-self-start mt-7 rounded-full transition-colors duration-300 hover:bg-gray-900  ' ><IoArrowBackOutline className='_text-Shadow' /></Link>
                <Link href={"/"} className='text-blue-300 sm:hidden block text-3xl place-self-start mt-7' ><IoArrowBackCircle className='_text-Shadow ' /></Link>
                <div className='w-full flex flex-col items-center gap-10 my-10 md:my-5'>
                    <h1 className={`_text-Shadow ${nameFont.className} text-2xl md:text-3xl`}>SKILLS</h1>
                    <div className={`_text-Shadow_skill ${fontStyle.className} w-full grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-lg sm:text-2xl md:text-3xl xl:text-5xl`}>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1 '><FaHtml5 className='_hovr text-[#E54C21] text-3xl w-full sm:text-5xl md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>HTML</span>
                        </div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><FaCss3Alt className='_hovr text-[#264DE4] text-3xl w-full sm:text-5xl md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>CSS</span></div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><IoLogoJavascript className='_hovr text-[#F7E025] text-3xl w-full sm:text-5xl md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>Javascript</span></div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><BiLogoTypescript className='_hovr text-[#037ACC] text-3xl sm:text-5xl w-full md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>Typescript</span></div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><SiBootstrap  className='_hovr text-white text-3xl sm:text-5xl w-full md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>Bootstrap</span></div>
                            <div className='flex flex-col items-center  bg-[#141311] rounded-lg px-3 py-4 shadow-sm shadow-blue-500 gap-1 '>
                                <RiTailwindCssFill className='_hovr text-[#3EBFF8] text-3xl w-full sm:text-5xl md:text-7xl xl:text-8xl' />
                                <span className='text-white md:-z-10 md:text-black'>Tailwind CSS</span></div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><RiNextjsFill className='_hovr text-white text-3xl sm:text-5xl w-full md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>Next.js</span></div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><SiPhp className='_hovr text-white text-3xl sm:text-5xl w-full md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>Php</span></div>
                        <div className='flex flex-col items-center bg-[#141311] rounded-lg px-9 py-5 shadow-sm shadow-blue-500 gap-1'><SiMysql className='_hovr text-white text-3xl sm:text-5xl w-full md:text-7xl xl:text-8xl' /><span className='text-white md:-z-10 md:text-black'>MySQL</span></div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
