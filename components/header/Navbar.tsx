import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <nav className='nav'>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <h1 className='nav-logo_title'>Mustafo</h1>
                    </div>
                    <ul className={show ? "nav-links show" : "nav-links"}>
                        <Link  href="#home" legacyBehavior>
                            <a onClick={() => setShow(false)} className='nav-link'>Home</a>
                        </Link>
                        <Link  href="#experience" legacyBehavior>
                            <a onClick={() => setShow(false)} className='nav-link'>Experience</a>
                        </Link>
                        <Link  href="#projects" legacyBehavior>
                            <a onClick={() => setShow(false)} className='nav-link'>Projects</a>
                        </Link>
                        <Link  href="#contact" legacyBehavior>
                            <a onClick={() => setShow(false)} className='nav-link'>Contact</a>
                        </Link>
                        <button onClick={() => setShow(false)} className="nav-close_btn">
                            <FiX color='#fff' fontSize="28px"/>
                        </button>
                    </ul>
                    <div className="nav-menu">
                        <button onClick={() => setShow(true)} className="nav-menu_btn">
                            <FiAlignRight color='#fff' fontSize="30px" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar