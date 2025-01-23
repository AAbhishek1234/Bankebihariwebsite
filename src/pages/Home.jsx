import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import About from '../components/Abouts'
import Timming from '../components/Timming'
import Footer from '../components/Footer'
import TempleHistory from '../components/TempleHistory'
import Gallery from '../components/Gallery'
import Welcome from '../components/Welcome'
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <About></About>
    <Timming></Timming>
{/*     
    <TempleHistory></TempleHistory> */}
    <Welcome></Welcome>
    {/* <Gallery></Gallery> */}
    <Footer></Footer>
    </>
  )
}

export default Home