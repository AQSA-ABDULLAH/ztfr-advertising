// import React from 'react'

// function VerticalCarousel() {
//   return (
//     <div className='md:flex hidden h-[946px] gap-x-4 justify-around    border-y border-white overflow-hidden'>
      
//     </div>
//   )
// }

// export default VerticalCarousel

// components/BrandSlider.tsx
import Image from "next/image";

const brands = [
  { name: "Adidas", src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { name: "Amazon Prime Video", src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { name: "Apple VR", src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
  { name: "Aston Martin", src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FKhud%20Ko%20Jaga%20Ft.%20Diljit%20Dosanjh%20X%20Coca-Cola.png?alt=media&token=c7a76ab9-873b-417b-9eb1-db1d37322246" },
  { name: "Audi", src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FWu-Tang.%20Tiger%20Style.%20Nike.png?alt=media&token=014dec9d-1f43-450c-abf0-708c04f02ad6" },
  { name: "Bang & Olufsen", src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSuperflat%20First%20Love%20Film%20(2009)%20-%20Remastered%20%20%C2%A0Louis%20Vuitton%20x%20Murakami.%20LOUIS%20VUITTON.png?alt=media" },
];

export default function VerticalCarousel() {
  return (
    <div className="relative h-[946px] w-[200px] overflow-hidden bg-transparent">
      <div className="absolute animate-scroll flex flex-col gap-4">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} title={brand.name} className="flex justify-center">
            <img
  src={brand.src}
  alt={brand.name}
  className="rounded-xl transition-all duration-300 cursor-pointer w-[150px] h-[100px]"
/>

          </div>
        ))}
      </div>
    </div>
  );
}

