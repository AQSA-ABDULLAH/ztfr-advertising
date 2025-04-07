import './brand-scroller.css';

const brandsColumn1 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
];

const brandsColumn2 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
];

const brandsColumn3 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
];

const brandsColumn4 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
];

const brandsColumn5 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
];

const brandsColumn6 = [
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FSamsung%20Galaxy%20Z%20Fold%201.png?alt=media&token=b2820d7b-ed16-4120-83e1-d52ee28ae23c" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FZG%20-%20ASUS%20Zenbook%2014%20OLED%20(UM3406)%20%23AMD%20_%202024.png?alt=media&token=898f064c-17eb-4ef0-9a35-efe89dbf4f48" },
  { src: "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/thumbnailVideo%2FPaper%20Football%20With%20Patrick%20Mahomes%20%20%20adidas.png?alt=media&token=c3315a52-1169-4a14-9b72-0c3fea8f0655" },
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
    <BrandScroller brands={brandsColumn5} animationClass="scroll-up" />
    <BrandScroller brands={brandsColumn6} animationClass="scroll-down" />
  </div>
);

export default App;


