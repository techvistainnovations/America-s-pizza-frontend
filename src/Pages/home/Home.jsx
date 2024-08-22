import React from 'react';
import HomeBanner from './sections/HomeBanner';
import FeaturedItems from './sections/FeaturedItems';
import HomeSlider from './sections/HomeSlider';
import BulkOrderBanner from './sections/BulkOrderBanner';
import LetsGetOrdering from './sections/LetsGetOrdering';
import GetAppSection from './sections/GetAppSection';
import NewsLetter from './sections/NewsLetter';

const Home = () => {
  return (
    <>
    <div className='mt-[142px]'>
      <HomeBanner></HomeBanner>
      <HomeSlider></HomeSlider>
      <FeaturedItems></FeaturedItems>
      <NewsLetter></NewsLetter>
      <BulkOrderBanner/>
      <LetsGetOrdering></LetsGetOrdering>
      <GetAppSection></GetAppSection>
    </div>
    </>
  )
}

export default Home