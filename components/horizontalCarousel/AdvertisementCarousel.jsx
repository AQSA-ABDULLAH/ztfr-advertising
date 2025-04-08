"use client";
import React, { useState } from "react";
import AdVideoModal from "./AdVideoModal"; // make sure path is correct
import MarqueeRow from "./MarqueeRow"; // make sure path is correct

function AdvertisementCarousel() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full overflow-hidden py-4 space-y-4">
      {showModal && <AdVideoModal onClose={() => setShowModal(false)} />}
      {[...Array(3)].map((_, index) => (
        <MarqueeRow
          key={index}
          direction={index % 2 === 0 ? "left" : "right"}
          onVideoClick={() => setShowModal(true)} // 👈 pass handler
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
