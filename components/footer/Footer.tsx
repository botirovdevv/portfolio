import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
          <h1 className='footer-title'>Contact</h1>
        <div className="footer-content">
          <div className='footer-inputs'>
            <input type="text" className='footer-input' placeholder='Your Name' />
            <button className="footer-button">Send</button>
          </div>
          <div className='footer-socials'>
            <Link href="#">
              <FaInstagram color='white' fontSize={30}/>
            </Link>
            <Link href="#">
              <FaTelegram color='white' fontSize={30}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer