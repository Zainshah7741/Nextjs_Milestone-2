import Link from 'next/link'
import React from 'react'
import { Itim } from 'next/font/google'
import style from './navbar.module.css'

const itim = Itim({ weight: '400', subsets: ['latin'] })

const Menu = () => {

    return (
        <>
            <div className={style.flex}>
                <ul className={`${itim.className}  ${style.list_phone}`}>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="about" >About</Link></li>
                    <li><Link href="/skills" >Skills</Link></li>
                    <li><Link href="/project " >Projects</Link></li>
                    <li><Link href="/contact" >Contact</Link></li>
                </ul>
            </div>

        </>

    )
}

export default Menu