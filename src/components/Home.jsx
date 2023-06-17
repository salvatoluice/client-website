import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Services from './Services'
import Works from './Works'
import Reviews from './Reviews'
import Footer from './Footer'
import Blog from './Blog'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Works />
      <Blog />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home
