import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeRow = ({
  direction = "left",
  rows,
  hoveredImage,
  setHoveredImage,
}) => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover direction={direction}>
      {rows.map((img, index) => {
        const isHovered = hoveredImage === img;
        const opacity = hoveredImage
          ? isHovered
            ? "opacity-100"
            : "opacity-25"
          : "opacity-100";

        return (
          <div
            key={index}
            className={`relative mx-2 ${opacity} transition-opacity duration-300`}
            onMouseEnter={() => setHoveredImage(img)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img.src}
              alt={`scroll-image-${index}`}
              width={200} // Largest needed size for layout purposes
              height={200}
              className="rounded-2xl object-cover w-[150px] h-[150px] 2xl:w-[200px] 2xl:h-[200px]"
            />
          </div>
        );
      })}
    </Marquee>
  );
};

export default MarqueeRow;
