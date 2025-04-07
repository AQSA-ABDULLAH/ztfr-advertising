"use client";

import { useState } from "react";
import "./brand-scroller.css";
import data from "../data/brandColumns.json";

const BrandScroller = ({ brands, animationClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden h-[100vh] w-[150px] 2xl:w-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`scroll-track ${animationClass} ${isHovered ? "paused" : ""}`}>
        {[...brands, ...brands].map((brand, idx) => (
          <div key={`brand-${idx}`} className="brand-image">
            <img
              src={brand.src}
              alt={`brand-${idx}`}
              className="image-item rounded-[12px] my-[12px] cursor-pointer transition-all duration-300"
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

  return (
    <div className="flex gap-[16px] justify-around w-screen 2xl:border-y border-white 2xl:overflow-hidden 2xl:h-[946px]">
      <BrandScroller brands={brandsColumn1} animationClass="scroll-up" />
      <BrandScroller brands={brandsColumn2} animationClass="scroll-down" />
      <BrandScroller brands={brandsColumn3} animationClass="scroll-up" />
      <BrandScroller brands={brandsColumn4} animationClass="scroll-down" />
      <BrandScroller brands={brandsColumn5} animationClass="scroll-up" />
      <BrandScroller brands={brandsColumn6} animationClass="scroll-down" />
      <BrandScroller brands={brandsColumn7} animationClass="scroll-up" />
      <BrandScroller brands={brandsColumn8} animationClass="scroll-down" />
    </div>
  );
};

export default VerticalCarousel;
