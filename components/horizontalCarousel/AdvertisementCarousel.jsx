"use client";
import React, { useState } from "react";
import AdVideoModal from "./AdVideoModal";
import MarqueeRow from "./MarqueeRow";

function AdvertisementCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="w-full overflow-hidden py-4 space-y-4">
      {selectedVideo && (
        <AdVideoModal
          videoSrc={selectedVideo.videoSrc}
          onClose={() => setSelectedVideo(null)}
        />
      )}
      {[...Array(3)].map((_, index) => (
        <MarqueeRow
          key={index}
          direction={index % 2 === 0 ? "left" : "right"}
          onVideoClick={(video) => setSelectedVideo(video)} // Pass video
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
