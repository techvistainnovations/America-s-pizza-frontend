import React from 'react';
import HomeBanner from './sections/HomeBanner';
import FeaturedItems from './sections/FeaturedItems';
import HomeSlider from './sections/HomeSlider';

const Home = () => {
  return (
    <>
    <div className='mt-[87px]'>
      <HomeBanner></HomeBanner>
      <FeaturedItems></FeaturedItems>
      <HomeSlider></HomeSlider>
    </div>
    </>
  )
}

export default Home