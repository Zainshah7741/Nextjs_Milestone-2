import Link from 'next/link'
import React from 'react'
import { Itim } from 'next/font/google'

const itim = Itim({ weight: '400', subsets: ['latin'] })

const Menu = () => {

    return (
        <>
            <div className='flex flex-col items-center w-full'>
                <ul className={`${itim.className}  mt-20 flex flex-col items-center text-lg gap-2  font-semibold w-full`}>
                    <li><Link href="/" className=' active:text-gray-300 '>Home</Link></li>
                    <li><Link href="about" className=' active:text-gray-300'>About</Link></li>
                    <li><Link href="/skills" className=' active:text-gray-300'>Skills</Link></li>
                    <li><Link href="/project " className=' active:text-gray-300'>Projects</Link></li>
                    <li><Link href="/contact" className=' active:text-gray-300'>Contact</Link></li>
                </ul>
            </div>

        </>

    )
}

export default Menu