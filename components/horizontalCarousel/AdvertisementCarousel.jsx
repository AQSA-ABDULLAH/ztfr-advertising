import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import videos from "../data/videos";


const MarqueeRow = ({ direction = "left" }) => (
  <Marquee speed={30} gradient={false} pauseOnHover direction={direction}>
    {videos.map((video, index) => (
      <div key={index} className="relative mx-2">
        <video
          className="w-[284px] h-[160px] lg:w-[355px] lg:h-[200px] 3xl:h-[358px] 3xl:w-[636px] object-cover rounded-2xl transition-all duration-300 cursor-pointer"
          poster={video.poster}
          src={video.videoSrc}
          // autoPlay
          loop
          muted
          playsInline
        />
        <Image
          src="/assets/advertising/Model Card - Advertising White.png"
          alt="Ad Overlay"
          width={163}
          height={163}
          className="absolute top-1/2 -translate-y-1/2 left-4 lg:w-[100px] w-[50px] 3xl:w-[163px]"
        />
      </div>
    ))}
  </Marquee>
);

function AdvertisementCarousel() {
  return (
    <section className="w-full overflow-hidden py-4 space-y-4">
      {[...Array(3)].map((_, index) => (
        <MarqueeRow
          key={index}
          direction={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  );
}


export default AdvertisementCarousel;



// 'use client';
// import React, { useState } from 'react';
// import VideoMarquee from './VideoMarquee';

// function AdvertisementCarousel() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div>
//       <VideoMarquee
//         direction="left"
//         hoveredIndex={hoveredIndex}
//         setHoveredIndex={setHoveredIndex}
//       />
//       <VideoMarquee
//         direction="right"
//         hoveredIndex={hoveredIndex}
//         setHoveredIndex={setHoveredIndex}
//       />
//       <VideoMarquee
//         direction="left"
//         hoveredIndex={hoveredIndex}
//         setHoveredIndex={setHoveredIndex}
//       />
//     </div>
//   );
// }

// export default AdvertisementCarousel;
