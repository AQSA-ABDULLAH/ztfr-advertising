import "./brand-scroller.css";

const brandsColumn1 = [
  {
    src: "/assets/images/1.1.png",
  },
  {
    src: "/assets/images/1.2.png",
  },
  {
    src: "/assets/images/1.3.png",
  },
  {
    src: "/assets/images/1.4.png",
  },
  {
    src: "/assets/images/1.5.png",
  },
  {
    src: "/assets/images/1.6.png",
  },
];

const brandsColumn2 = [
  {
    src: "/assets/images/2.1.png",
  },
  {
    src: "/assets/images/2.2.png",
  },
  {
    src: "/assets/images/2.3.png",
  },
  {
    src: "/assets/images/2.4.png",
  },
  {
    src: "/assets/images/2.5.png",
  },
  {
    src: "/assets/images/2.6.png",
  },
];

const brandsColumn3 = [
  {
    src: "/assets/images/3.1.png",
  },
  {
    src: "/assets/images/3.2.png",
  },
  {
    src: "/assets/images/3.3.png",
  },
  {
    src: "/assets/images/3.4.png",
  },
  {
    src: "/assets/images/3.5.png",
  },
  {
    src: "/assets/images/3.6.png",
  },
];

const brandsColumn4 = [
  {
    src: "/assets/images/4.1.png",
  },
  {
    src: "/assets/images/4.2.png",
  },
  {
    src: "/assets/images/4.3.png",
  },
  {
    src: "/assets/images/4.4.png",
  },
  {
    src: "/assets/images/4.5.png",
  },
  {
    src: "/assets/images/4.6.png",
  },
];

const brandsColumn5 = [
  {
    src: "/assets/images/5.1.png",
  },
  {
    src: "/assets/images/5.2.png",
  },
  {
    src: "/assets/images/5.3.png",
  },
  {
    src: "/assets/images/5.4.png",
  },
  {
    src: "/assets/images/5.5.png",
  },
  {
    src: "/assets/images/5.6.png",
  },
];

const brandsColumn6 = [
  {
    src: "/assets/images/6.1.png",
  },
  {
    src: "/assets/images/6.2.png",
  },
  {
    src: "/assets/images/6.3.png",
  },
  {
    src: "/assets/images/6.4.png",
  },
  {
    src: "/assets/images/6.5.png",
  },
  {
    src: "/assets/images/6.6.png",
  },
];

const brandsColumn7 = [
  {
    src: "/assets/images/7.1.png",
  },
  {
    src: "/assets/images/7.2.png",
  },
  {
    src: "/assets/images/7.3.png",
  },
  {
    src: "/assets/images/7.4.png",
  },
  {
    src: "/assets/images/7.5.png",
  },
  {
    src: "/assets/images/7.6.png",
  },
];

const brandsColumn8 = [
  {
    src: "/assets/images/8.1.png",
  },
  {
    src: "/assets/images/8.2.png",
  },
  {
    src: "/assets/images/8.3.png",
  },
  {
    src: "/assets/images/8.4.png",
  },
  {
    src: "/assets/images/8.5.png",
  },
  {
    src: "/assets/images/8.6.png",
  },
];

const BrandScroller = ({ brands, animationClass }) => (
  <div className="relative overflow-hidden h-[100vh] w-[150px] 2xl:w-[200px]">
    <div className={`scroll-track ${animationClass}`}>
      {brands.map((brand, idx) => (
        <div key={`dup-${idx}`} className="brand-image">
          <img
            src={brand.src}
            alt={`brand-${idx}`}
            className="rounded-[12px] my-[12px] cursor-pointer transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
);

const VerticalCarousel = () => (
  <div className="flex gap-[16px] justify-around ">
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

export default VerticalCarousel;
