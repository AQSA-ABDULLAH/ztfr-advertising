import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeRow = ({
  direction = "left",
  rows,
  onVideoClick,
  hoveredVideo,
  setHoveredVideo,
}) => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover direction={direction}>
      {rows.map((video, index) => {
        const isHovered = hoveredVideo === video;
        const videoOpacity = hoveredVideo
          ? isHovered
            ? "opacity-100"
            : "opacity-25"
          : "opacity-100";

        return (
          <div
            key={index}
            className={`relative mx-2 ${videoOpacity} flex items-center`} // Use flex for layout
            onClick={() => onVideoClick(video)}
            onMouseEnter={() => setHoveredVideo(video)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <video
              className={`w-[284px] h-[160px] lg:w-[355px] lg:h-[200px] 3xl:h-[358px] 3xl:w-[636px] object-cover rounded-2xl transition-all duration-300 cursor-pointer outline-none focus:outline-none`} // Ensure no outline or margin on click
              poster={video.poster}
              src={video.videoSrc}
              loop
              muted
              playsInline
              preload="auto"
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



