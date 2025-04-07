import React from 'react'
import AdvertisementCarousel from './horizontalCarousel/AdvertisementCarousel';
import VerticalCarousel from './VerticalCarousel';
import BrandScroller from './verticalCarousel/BrandScroller';

function Hero() {
  return (
    <div>
      <AdvertisementCarousel />
      <BrandScroller />
    </div>
  )
}

export default Hero
