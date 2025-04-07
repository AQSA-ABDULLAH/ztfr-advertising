import "./brand-scroller.css";
import data from "../data/brandColumns.json"; // update path as per your file location

const BrandScroller = ({ brands, animationClass }) => (
  <div className="relative overflow-hidden h-[100vh] w-[150px] 2xl:w-[200px]">
    <div className={`scroll-track ${animationClass}`}>
      {[...brands, ...brands].map((brand, idx) => (
        <div key={`brand-${idx}`} className="brand-image">
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
    <div className="flex gap-[16px] justify-around">
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
