import Image from 'next/image'
import React from 'react'
import avatar from '../../public/images/avatar.png'

const Header = () => {
    return (
        <header className="header" id="home">
            <div className="container">
                <div className="header-content">
                    <div>
                        <Image width={213} src={avatar} alt="Avatar" />
                    </div>
                    <h1 className="header-title" data-aos="fade-up">
                        I do code and
                        make content <span className="header-title_linner">about it!</span>
                    </h1>
                    <p className="header-subtitle">
                        I am a Frontend developer with 2 years of experience, so far I have built small websites to professional websites. If you want to see what I&apos;ve done, go to the projects page
                    </p>
                    <div className="header-buttons">
                        <button className="header-button">
                            Get In Touch
                        </button>
                        <button className="header-btn">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
