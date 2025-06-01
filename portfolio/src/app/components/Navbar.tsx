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


const lobster = Satisfy({
    weight: '400',
    subsets: ['latin']
})
const itim = Itim({ weight: '400', subsets: ['latin'] })

const Navbar = () => {

    const [display, setState] = useState(false)

    return (
        <div className='bg-[rgba(0,0,0,.8)] h-16 md:h-[70px] lg:h-20 flex items-center sticky top-0 backdrop-blur-3xl '>
            <div className='  w-[95%] lg:w-85%] flex items-center m-auto justify-between'>
                <RxHamburgerMenu className='order-1 sm:hidden text-2xl ' onClick={() => setState(!display)} />
                {
                    display ?
                        <div className='sm:hidden h-fit pb-20 bg-black absolute top-0 flex flex-col w-[95%] items-center '>
                            <IoCloseSharp className='mt-4  text-3xl place-self-end' onClick={() => setState(!display)} />
                            <Menu></Menu>
                        </div>
                        : null
                }
                <ul className={`${itim.className} hidden sm:flex  gap-3 sm:text-xs md:text-sm lg:text-lg font-semibold `}>
                    <li><Link href="/" className='border-b-[1px] active:text-gray-300'>Home</Link></li>
                    <li><Link href="about" className='hover:border-b-[1px] active:text-gray-300'>About</Link></li>
                    <li><Link href="/skills" className='hover:border-b-[1px] active:text-gray-300'>Skills</Link></li>
                    <li><Link href="/project " className='hover:border-b-[1px] active:text-gray-300'>Projects</Link></li>
                    <li><Link href="/contact" className='hover:border-b-[1px] active:text-gray-300'>Contact</Link></li>
                </ul>
                <h1 className={`${lobster.className} text-2xl  sm:hidden text-transparent bg-clip-text bg-gradient-to-r from-[maroon] to-[gold] pl-3`}>Zain</h1>
                <div className=''>
                    <Link href='/'><Image src="/pi.png" alt="logo" width={500} height={500} title="logo" className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-[50%] hidden sm:block'></Image></Link>
                </div>
                <ul className=' hidden sm:flex gap-10 text-lg md:text-xl lg:text-2xl'>
                    <li><Link href="https://www.linkedin.com/in/zain-shah-659753356/" target='_blank'><FaLinkedin className='hover:text-[#0077B5]  rounded hover:scale-95' title='LinkedIn' /></Link></li>
                    <li><Link href="https://github.com/Zainshah7741" target='_blank'><FaGithubSquare className=' rounded hover:scale-95 hover:text-[#d2c8c8]' title='GitHub' /></Link></li>
                    <li><Link href="mailto:zainshah7741@gmail.com" target='_blank'><SiGmail className='rounded hover:scale-95 hover:text-[#d2c8c8]' title='Gmail' /></Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
