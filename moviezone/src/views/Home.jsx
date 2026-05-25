import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import TrailerSection from '../components/TrailerSection.jsx'

function Home() {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <FeatureSection />
        <TrailerSection />
      <Footer />
    </div>
  )
}

export default Home