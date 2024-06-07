import Image from 'next/image'
import React from 'react'
import project1 from '../../public/images/project1.jpg'
import project2 from '../../public/images/project2.jpg'
import project3 from '../../public/images/project3.jpg'
import project4 from '../../public/images/project4.jpg'
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="projects-content">
                    <h1 className='projects-title'>Projects</h1>

                    <div className="projects-cards">
                        <div className="project-card">
                            <div className='projects-image'>
                                <Image className='projects-img' src={project1} alt='Project' />
                            </div>
                            <Link href="https://mustafo02.vercel.app" className="projects-items">
                                <div>
                                    <h2 className="projects-card_title">CLICK HERE TO VISIT</h2>
                                    <h1 className='projects-name'>Travel agency</h1>
                                </div>
                                <div>
                                    <GoArrowRight color='white' fontSize={25} />
                                </div>
                            </Link>
                        </div>

                        <div className="project-card">
                            <div className='projects-image'>
                                <Image className='projects-img' src={project2} alt='Project' />
                            </div>
                            <Link href="https://mustafo01.vercel.app" className="projects-items">
                                <div>
                                    <h2 className="projects-card_title">CLICK HERE TO VISIT</h2>
                                    <h1 className='projects-name'>E-commerce</h1>
                                </div>
                                <div>
                                    <GoArrowRight color='white' fontSize={25} />
                                </div>
                            </Link>
                        </div>

                        <div className="project-card">
                            <div className='projects-image'>
                                <Image className='projects-img' src={project3} alt='Project' />
                            </div>
                            <Link href="https://mustafo-e-commerce.vercel.app" className="projects-items">
                                <div>
                                    <h2 className="projects-card_title">CLICK HERE TO VISIT</h2>
                                    <h1 className='projects-name'>E-commerce</h1>
                                </div>
                                <div>
                                    <GoArrowRight color='white' fontSize={25}/>
                                </div>
                            </Link>
                        </div>

                        <div className="project-card">
                            <div className='projects-image'>
                                <Image className='projects-img' src={project4} alt='Project' />
                            </div>
                            <Link href="https://onlineweather.vercel.app" className="projects-items">
                                <div>
                                    <h2 className="projects-card_title">CLICK HERE TO VISIT</h2>
                                    <h1 className='projects-name'>Weather app</h1>
                                </div>
                                <div>
                                    <GoArrowRight color='white' fontSize={25}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects