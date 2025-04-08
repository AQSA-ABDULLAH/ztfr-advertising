import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeRow = ({
  direction = "left",
  rows, // Use the rows prop here
  onVideoClick,
  hoveredVideo, // Use the hovered video object
  setHoveredVideo, // Use the function to set hovered video
}) => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover direction={direction}>
      {rows.map((video, index) => {
        // Check if the current video is hovered
        const isHovered = hoveredVideo === video;

        // If no video is hovered, set opacity to 100 for all videos
        const videoOpacity = hoveredVideo ? (isHovered ? "opacity-100" : "opacity-25") : "opacity-100";

        return (
          <div
            key={index}
            className={`relative mx-2 ${videoOpacity}`} // Apply opacity based on hover state
            onClick={() => onVideoClick(video)}
            onMouseEnter={() => setHoveredVideo(video)} // Set the hovered video when mouse enters
            onMouseLeave={() => setHoveredVideo(null)} // Reset the hovered video when mouse leaves
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


