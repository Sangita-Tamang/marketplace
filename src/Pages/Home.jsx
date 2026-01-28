import React from 'react'
import Hero from '../Components/Hero'
import TrendingProducts from './TrendingProducts'
import DiscountItem from './DiscountItem'
import ShopexOffer from './ShopexOffer'
import TopCategories from './TopCategories'
import UniqueFea from './UniqueFea'
import LatestProducts from './LatestProducts'
import Newslater from './Newslater'
import LatestBlog from './LeatestBlog'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
   <LatestProducts/>
      <ShopexOffer/>
       <UniqueFea/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <Newslater/>
      <LatestBlog/>
      <Footer/>
     
    </div>
  )
}

export default Home