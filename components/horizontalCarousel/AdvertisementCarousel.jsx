'use client';
import React, { useState } from 'react';
import VideoMarquee from './VideoMarquee';

function AdvertisementCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <VideoMarquee
        direction="left"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
      <VideoMarquee
        direction="right"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
      <VideoMarquee
        direction="left"
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
    </div>
  );
}

export default AdvertisementCarousel;


