import React from 'react';
import HomeBanner from './sections/HomeBanner';
import FeaturedItems from './sections/FeaturedItems';
import HomeSlider from './sections/HomeSlider';
import BulkOrderBanner from './sections/BulkOrderBanner';
import LetsGetOrdering from './sections/LetsGetOrdering';
import GetAppSection from './sections/GetAppSection';
import Footer from './sections/Footer';

const Home = () => {
  return (
    <>
    <div className='mt-[87px]'>
      <HomeBanner></HomeBanner>
      <FeaturedItems></FeaturedItems>
      <HomeSlider></HomeSlider>
      <BulkOrderBanner/>
      <LetsGetOrdering></LetsGetOrdering>
      <GetAppSection></GetAppSection>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home