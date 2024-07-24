import React from 'react';
import HomeBanner from './sections/HomeBanner';
import FeaturedItems from './sections/FeaturedItems';
import HomeSlider from './sections/HomeSlider';
import BulkOrderBanner from './sections/BulkOrderBanner';

const Home = () => {
  return (
    <>
    <div className='mt-[87px]'>
      <HomeBanner></HomeBanner>
      <FeaturedItems></FeaturedItems>
      <HomeSlider></HomeSlider>
      <BulkOrderBanner/>
    </div>
    </>
  )
}

export default Home