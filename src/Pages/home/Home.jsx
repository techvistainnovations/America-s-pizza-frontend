import React from 'react';
import HomeBanner from './sections/HomeBanner';
import FeaturedItems from './sections/FeaturedItems';

const Home = () => {
  return (
    <>
    <div className='mt-[87px]'>
      <HomeBanner></HomeBanner>
      <FeaturedItems></FeaturedItems>
    </div>
    </>
  )
}

export default Home