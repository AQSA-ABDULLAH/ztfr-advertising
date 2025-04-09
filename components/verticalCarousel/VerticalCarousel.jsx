"use client";

import { useState, useRef } from "react";
import "./brand-scroller.css";
import data from "../data/brandColumns.json";

const BrandScroller = ({ brands, animationClass, hoveredImage, setHoveredImage }) => {
  const imageRefs = useRef([]);

  const [pauseImage, setPauseImage] = useState(false); // default should be false

  const handleImageMouseEnter = (idx) => {
    setHoveredImage(imageRefs.current[idx]);
    setPauseImage(true); // ✅ typo fixed
  };

  const handleImageMouseLeave = () => {
    setHoveredImage(null);
    setPauseImage(false); // ✅ typo fixed
  };

  return (
    <div className="relative overflow-hidden h-[100vh] w-[150px] 2xl:w-[200px]">
      <div className={`scroll-track ${animationClass} ${pauseImage ? "paused" : ""}`}>
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
              className={`image-item rounded-[12px] my-[20px] cursor-pointer transition-all duration-300 ${
                hoveredImage && hoveredImage !== imageRefs.current[idx] ? "opacity-25" : "opacity-100"
              }`}
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
    <div className="flex gap-[16px] justify-around group w-screen 2xl:border-y border-white 2xl:overflow-hidden 2xl:h-[946px]">
      <BrandScroller brands={brandsColumn1} animationClass="scroll-up" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn2} animationClass="scroll-down" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn3} animationClass="scroll-up" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn4} animationClass="scroll-down" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn5} animationClass="scroll-up" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn6} animationClass="scroll-down" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn7} animationClass="scroll-up" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
      <BrandScroller brands={brandsColumn8} animationClass="scroll-down" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
    </div>
  );
};

export default VerticalCarousel;










// const BrandScroller = ({ brands, animationClass }) => {
//   const imageRefs = useRef([]);
//   const [hoveredImage, setHoveredImage] = useState(null);

//   const handleImageMouseEnter = (idx) => {
//     setHoveredImage(imageRefs.current[idx]);
//   };

//   const handleImageMouseLeave = () => {
//     setHoveredImage(null);
//   };

//   return (
//     <div className="relative overflow-hidden h-[100vh] w-[150px] 2xl:w-[200px]">
//       <div className={`scroll-track ${animationClass} ${hoveredImage ? "paused" : ""}`}>
//         {[...brands, ...brands].map((brand, idx) => (
//           <div
//             key={`brand-${idx}`}
//             className="brand-image"
//             onMouseEnter={() => handleImageMouseEnter(idx)}
//             onMouseLeave={handleImageMouseLeave}
//           >
//             <img
//               ref={(el) => (imageRefs.current[idx] = el)}
//               src={brand.src}
//               alt={`brand-${idx}`}
//               className={`image-item rounded-[12px] my-[12px] cursor-pointer transition-all duration-300 ${
//                 hoveredImage && hoveredImage !== imageRefs.current[idx]
//                   ? "opacity-25"
//                   : "opacity-100"
//               }`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };




