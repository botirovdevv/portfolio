import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Navbar from '@/components/header/Navbar'
import Experience from '@/components/main/Experience'
import Projects from '@/components/main/Projects'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);
  
  return (
    <div className='wrapper'>
      <Navbar />
      <Header />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default Index;
