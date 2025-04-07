import brandLogos from '../path/to/brand-logo.json';

export default function BrandsSection() {
  return (
    <section className="mt-8 3xl:mt-16 flex gap-4 lg:gap-6 3xl:gap-8 flex-wrap justify-center">
      {brandLogos.map((brand) => (
        <a
          key={brand.title}
          href={brand.href}
          title={brand.title}
          className="transition-all duration-200 hover:invert"
        >
          <img
            src={brand.imgSrc}
            alt={brand.title}
            className="w-[100px] lg:w-[140px] 2xl:w-[180px] 3xl:w-[200px]"
          />
        </a>
      ))}
    </section>
  );
}
