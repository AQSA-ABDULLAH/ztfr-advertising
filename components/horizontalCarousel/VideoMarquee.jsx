'use client';

import React from 'react';
import './video-marquee.css';
import videos from './videos.json';

export default function VideoMarquee({ direction = 'left', hoveredIndex, setHoveredIndex }) {
  // Determine if marquee should be paused
  const isPaused = hoveredIndex !== null;

  return (
    <div className="overflow-hidden mt-8">
      <div
        className={`flex space-x-4 ${
          direction === 'right' ? 'marquee-right' : 'marquee-left'
        } ${isPaused ? 'pause-marquee' : ''}`}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <video
              className={`w-[284px] h-[160px] lg:w-[355px] lg:h-[200px] 3xl:h-[358px] 3xl:w-[636px] object-cover mx-2 rounded-2xl transition-all duration-300 cursor-pointer
                ${hoveredIndex === null ? 'opacity-100' : hoveredIndex === index ? 'opacity-100' : 'opacity-25'}
              `}
              src={video.src}
              poster={video.poster}
              loop
              muted
              controlsList="nodownload noplaybackrate"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


