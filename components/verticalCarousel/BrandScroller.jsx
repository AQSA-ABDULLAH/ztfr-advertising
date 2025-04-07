import './brand-scroller.css';

const brandsColumn1 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
];

const brandsColumn2 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FKhud%20Ko%20Jaga%20Ft.%20Diljit%20Dosanjh%20X%20Coca-Cola.png?alt=media&token=c7a76ab9-873b-417b-9eb1-db1d37322246" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FBurger%20King.png?alt=media&token=your-token-here" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSnickers.png?alt=media&token=your-token-here" },
];

const brandsColumn3 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FLouis%20Vuitton.png?alt=media&token=your-token-here" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FDior.png?alt=media&token=your-token-here" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPepsi.png?alt=media&token=your-token-here" },
];

const brandsColumn4 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FApple.png?alt=media&token=your-token-here" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FNetflix.png?alt=media&token=your-token-here" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FNike.png?alt=media&token=your-token-here" },
];

const BrandScroller = ({ brands, animationClass }) => (
  <div className="brand-scroller">
    <div className={`scroll-track ${animationClass}`}>
      {brands.map((brand, idx) => (
        <div key={idx} className="brand-image">
          <img src={brand.src} alt={`brand-${idx}`} />
        </div>
      ))}
    </div>
    {/* Duplicate for seamless infinite scroll */}
    <div className={`scroll-track ${animationClass}`}>
      {brands.map((brand, idx) => (
        <div key={`dup-${idx}`} className="brand-image">
          <img src={brand.src} alt={`brand-${idx}`} />
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="brand-scroller-wrapper">
    <BrandScroller brands={brandsColumn1} animationClass="scroll-up" />
    <BrandScroller brands={brandsColumn2} animationClass="scroll-down" />
    <BrandScroller brands={brandsColumn3} animationClass="scroll-up" />
    <BrandScroller brands={brandsColumn4} animationClass="scroll-down" />
  </div>
);

export default App;


