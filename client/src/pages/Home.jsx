import React from 'react'
import Banner from '../components/Banner.jsx'
import Navbar from '../components/Navbar'
import BestSeller from '../components/BestSeller.jsx'
import FavouriteBook from '../components/FavouriteBook.jsx'
import OurSelf from '../components/OurSelf.jsx'
import Testimonies from '../components/Testimonies.jsx'
const Home = () => {
  return (
    <>
      <Banner />
      <BestSeller></BestSeller>
      <FavouriteBook></FavouriteBook>
      <OurSelf></OurSelf>
      <Testimonies></Testimonies>
      
    </>
 
  )
}

export default Home
