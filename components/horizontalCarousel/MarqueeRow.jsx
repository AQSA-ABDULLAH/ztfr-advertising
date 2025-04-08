import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeRow = ({
  direction = "left",
  rows, // Use the rows prop here
  onVideoClick,
  hoveredVideoIndex,
  setHoveredVideoIndex,
}) => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover direction={direction}>
      {rows.map((video, index) => { // Now map over rows
        const isHovered = hoveredVideoIndex === index;
        const isSomeHovered = hoveredVideoIndex !== null;

        return (
          <div
            key={index}
            className={`relative mx-2 ${isSomeHovered ? (isHovered ? "opacity-100" : "opacity-25") : "opacity-100"}`}
            onClick={() => onVideoClick(video)}
            onMouseEnter={() => setHoveredVideoIndex(index)}
            onMouseLeave={() => setHoveredVideoIndex(null)}
          >
            <video
              className={`w-[284px] h-[160px] lg:w-[355px] lg:h-[200px] 3xl:h-[358px] 3xl:w-[636px] object-cover rounded-2xl transition-all duration-300 cursor-pointer `}
              poster={video.poster}
              src={video.videoSrc}
              loop
              muted
              playsInline
              preload="auto" // Preload the video
            />
            <Image
              src="/assets/advertising/Model Card - Advertising White.png"
              alt="Ad Overlay"
              width={163}
              height={163}
              className="absolute top-1/2 -translate-y-1/2 left-4 lg:w-[100px] w-[50px] 3xl:w-[163px]"
            />
          </div>
        );
      })}
    </Marquee>
  );
};

export default MarqueeRow;
