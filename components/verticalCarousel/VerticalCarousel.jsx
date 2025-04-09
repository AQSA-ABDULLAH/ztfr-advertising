"use client";

import { useState, useRef } from "react";
import "./brand-scroller.css";
import data from "../data/brandColumns.json";

const BrandScroller = ({
  brands,
  animationClass,
  hoveredImage,
  setHoveredImage,
  direction = "vertical", // "vertical" by default
}) => {
  const imageRefs = useRef([]);
  const [pauseImage, setPauseImage] = useState(false);

  const handleImageMouseEnter = (idx) => {
    setHoveredImage(imageRefs.current[idx]);
    setPauseImage(true);
  };

  const handleImageMouseLeave = () => {
    setHoveredImage(null);
    setPauseImage(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${
        direction === "vertical"
          ? "h-[100vh] w-[150px] 2xl:w-[200px]"
          : "w-full h-[150px]"
      }`}
    >
      <div
        className={`scroll-track ${animationClass} ${
          pauseImage ? "paused" : ""
        } flex ${
          direction === "horizontal" ? "flex-row gap-x-[16px]" : "flex-col"
        }`}
      >
        {[...brands, ...brands].map((brand, idx) => (
          <div
            key={`brand-${idx}`}
            className="brand-image"
            onMouseEnter={() => handleImageMouseEnter(idx)}
            onMouseLeave={handleImageMouseLeave}
          >
            <img
              ref={(el) => (imageRefs.current[idx] = el)}
              src={brand.src}
              alt={`brand-${idx}`}
              className={`image-item rounded-[12px] cursor-pointer transition-all duration-300
              ${
                direction === "horizontal"
                ? "w-[150px] h-[150px]"
                : "w-full h-full my-[20px]"
              }
              ${
                hoveredImage && hoveredImage !== imageRefs.current[idx]
                ? "opacity-25"
                : "opacity-100"
              } `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const VerticalCarousel = () => {
  const {
    brandsColumn1,
    brandsColumn2,
    brandsColumn3,
    brandsColumn4,
    brandsColumn5,
    brandsColumn6,
    brandsColumn7,
    brandsColumn8,
  } = data;

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="flex justify-around gap-[16px] group w-screen 2xl:border-y border-white 2xl:overflow-hidden 2xl:h-[946px]">
      <div className="flex gap-[16px] justify-around w-[50%]">
        <BrandScroller
          brands={brandsColumn1}
          animationClass="scroll-up"
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
        />
        <BrandScroller
          brands={brandsColumn2}
          animationClass="scroll-down"
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
        />
        <BrandScroller
          brands={brandsColumn3}
          animationClass="scroll-up"
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
        />
        <BrandScroller
          brands={brandsColumn4}
          animationClass="scroll-down"
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
        />
      </div>
      <div className="flex flex-col gap-[16px] justify-around w-[50%]">
        <BrandScroller
          brands={brandsColumn5}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
          direction="horizontal"
          animationClass="scroll-left"
        />
        <BrandScroller
          brands={brandsColumn6}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
          direction="horizontal"
          animationClass="scroll-right"
        />
        <BrandScroller
          brands={brandsColumn7}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
          direction="horizontal"
          animationClass="scroll-left"
        />
        <BrandScroller
          brands={brandsColumn8}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
          direction="horizontal"
          animationClass="scroll-right"
        />
      </div>
    </div>
  );
};

export default VerticalCarousel;
