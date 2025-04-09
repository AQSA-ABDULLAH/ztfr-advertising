"use client";

import React, { useState } from "react";
import MarqueeRow from "./ScrollingRows";
import imageData from "../data/horizontal-carousel";

function HorizontalCarousel() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const rows = [imageData.row1, imageData.row2, imageData.row3, imageData.row4, imageData.row5, imageData.row6, imageData.row7, imageData.row8];

  return (
    <section className="w-full overflow-hidden py-4 flex flex-col gap-4">
      {rows.map((row, index) => (
        <MarqueeRow
          key={`row-${index}`}
          direction={index % 2 === 0 ? "left" : "right"}
          rows={row}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
        />
      ))}
    </section>
  );
}

export default HorizontalCarousel;




// "use client";

// import { useState, useRef } from "react";
// import "./scroll.css";
// import data from "../data/horizontal-carousel.json";

// const BrandScroller = ({
//   brands,
//   animationClass,
//   hoveredImage,
//   setHoveredImage,
// }) => {
//   const imageRefs = useRef([]);

//   const [pauseImage, setPauseImage] = useState(false); // default should be false

//   const handleImageMouseEnter = (idx) => {
//     setHoveredImage(imageRefs.current[idx]);
//     setPauseImage(true); // ✅ typo fixed
//   };

//   const handleImageMouseLeave = () => {
//     setHoveredImage(null);
//     setPauseImage(false); // ✅ typo fixed
//   };

//   return (
//     <div className="relative overflow-hidden h-[150px] 2xl:h-[200px] w-screen">
//       <div
//         className={`scroll-track ${animationClass} ${
//           pauseImage ? "paused" : ""
//         }`}
//       >
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
//               className={`image-item rounded-[12px] mx-[8px] cursor-pointer transition-all duration-300
//     w-[150px] h-[150px] 2xl:w-[200px] 2xl:h-[200px]
//     ${
//       hoveredImage && hoveredImage !== imageRefs.current[idx]
//         ? "opacity-25"
//         : "opacity-100"
//     }`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const HorizontalCarousel = () => {
//   const {
//     brandsColumn1,
//     brandsColumn2,
//     brandsColumn3,
//     brandsColumn4,
//     brandsColumn5,
//     brandsColumn6,
//     brandsColumn7,
//     brandsColumn8,
//   } = data;

//   const [hoveredImage, setHoveredImage] = useState(null);

//   return (
//     <div className="flex flex-col gap-[16px] justify-around group overflow-x-hidden">

//       <BrandScroller
//         brands={brandsColumn1}
//         animationClass="scroll-left"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn2}
//         animationClass="scroll-right"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn3}
//         animationClass="scroll-left"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn4}
//         animationClass="scroll-right"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn5}
//         animationClass="scroll-left"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn6}
//         animationClass="scroll-right"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn7}
//         animationClass="scroll-left"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//       <BrandScroller
//         brands={brandsColumn8}
//         animationClass="scroll-right"
//         hoveredImage={hoveredImage}
//         setHoveredImage={setHoveredImage}
//       />
//     </div>
//   );
// };

// export default HorizontalCarousel;
