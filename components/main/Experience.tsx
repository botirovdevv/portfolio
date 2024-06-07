import Image from 'next/image'
import React from 'react'
import html from "../../public/images/html.png"
import css from "../../public/images/css.png"
import sass from "../../public/images/sass.png"
import javascript from "../../public/images/javascript-logo.png"
import next from "../../public/images/next.png"
import react from "../../public/images/react.webp"

const Experience = () => {
  return (
    <section className="experience" id='experience'>
        <div className="container">
            <div className="experience-content">
                <h1 className='experience-title'>EXPERIENCE WITH</h1>

                <div className="experience-items">
                  <div className='experience-image'>
                    <Image className='experience-img' src={html} alt="html logo"/>
                  </div>
                  <div className='experience-image'>
                    <Image className='experience-img' src={css} alt="css logo"/>
                  </div>

                  <div className='experience-image'>
                    <Image className='experience-img' src={sass} alt="sass logo"/>
                  </div>

                  <div className='experience-image'>
                    <Image className='experience-img' src={javascript} alt="javascript logo"/>
                  </div>

                  <div className='experience-image'>
                    <Image className='experience-img' src={next} alt="next logo"/>
                  </div>

                  <div className='experience-image'>
                    <Image className='experience-img' src={react} alt="react logo"/>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience