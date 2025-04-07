const brands = [
    { href: "https://www.adidas.com/", title: "Adidas", imgSrc: "/assets/advertising/brands/Adidas.png" },
    { href: "https://www.amazon.com/", title: "Amazon", imgSrc: "/assets/advertising/brands/Amazon.png" },
    { href: "https://www.apple.com/", title: "Apple", imgSrc: "/assets/advertising/brands/Apple.png" },
    { href: "https://www.aramco.com/", title: "Aramco", imgSrc: "/assets/advertising/brands/Aramco.png" },
    { href: "https://www.audi.com/", title: "Audi", imgSrc: "/assets/advertising/brands/Audi.png" },
    { href: "https://www.bang-olufsen.com/", title: "Bang & Olufsen", imgSrc: "/assets/advertising/brands/Bang _ Olufsen.png" },
    { href: "https://www.christianlouboutin.com/", title: "Christian Louboutin", imgSrc: "/assets/advertising/brands/Christian Louboutin.png" },
    { href: "https://www.coca-cola.com/", title: "Coca Cola", imgSrc: "/assets/advertising/brands/Coca Cola.png" },
    { href: "https://www.dior.com/", title: "Dior", imgSrc: "/assets/advertising/brands/Dior.png" },
    { href: "https://www.dolcegabbana.com/", title: "Dolce & Gabbana", imgSrc: "/assets/advertising/brands/Dolce _ Gabbana.png" },
    { href: "https://www.emirates.com/", title: "Emirates", imgSrc: "/assets/advertising/brands/Emirates.png" },
    { href: "https://www.formula1.com/", title: "F1", imgSrc: "/assets/advertising/brands/F1.png" },
    { href: "https://www.gucci.com/", title: "Gucci", imgSrc: "/assets/advertising/brands/Gucci.png" },
    { href: "https://leica-camera.com/", title: "Leica", imgSrc: "/assets/advertising/brands/Leica.png" },
    { href: "https://www.lg.com/", title: "LG", imgSrc: "/assets/advertising/brands/LG.png" },
    { href: "https://www.loreal.com/", title: "Loreal", imgSrc: "/assets/advertising/brands/Loreal.png" },
    { href: "https://www.louisvuitton.com/", title: "Louis Vuitton", imgSrc: "/assets/advertising/brands/Louis Vuitton.png" },
    { href: "https://www.mercedes-benz.com/", title: "Mercedes", imgSrc: "/assets/advertising/brands/Mercedes.png" },
    { href: "https://www.microsoft.com/", title: "Microsoft", imgSrc: "/assets/advertising/brands/Microsoft.png" },
    { href: "https://www.netflix.com/", title: "Netflix", imgSrc: "/assets/advertising/brands/Netflix.png" },
    { href: "https://www.nike.com/", title: "Nike", imgSrc: "/assets/advertising/brands/Nike.png" },
    { href: "https://www.patek.com/", title: "Patek Phillipe", imgSrc: "/assets/advertising/brands/Patek Phillipe.png" },
    { href: "https://www.pepsi.com/", title: "Pepsi", imgSrc: "/assets/advertising/brands/Pepsi.png" },
    { href: "https://www.porsche.com/", title: "Porsche", imgSrc: "/assets/advertising/brands/Porsche.png" },
    { href: "https://www.playstation.com/", title: "PS5", imgSrc: "/assets/advertising/brands/PS5.png" },
    { href: "https://www.puma.com/", title: "Puma", imgSrc: "/assets/advertising/brands/Puma.png" },
    { href: "https://www.qatarairways.com", title: "Qatar Airways", imgSrc: "/assets/advertising/brands/Qatar Airways.png" },
    { href: "https://www.rolex.com/", title: "Rolex", imgSrc: "/assets/advertising/brands/Rolex.png" },
    { href: "https://www.samsung.com/", title: "Samsung", imgSrc: "/assets/advertising/brands/Samsung.png" },
    { href: "https://www.spotify.com/", title: "Spotify", imgSrc: "/assets/advertising/brands/Spotify.png" },
    { href: "https://www.starbucks.com/", title: "Starbucks", imgSrc: "/assets/advertising/brands/Starbucks.png" },
    { href: "https://www.tesla.com/", title: "Tesla", imgSrc: "/assets/advertising/brands/Tesla.png" },
  ];
  
  export default function BrandsSection() {
    return (
      <section className="mt-8 3xl:mt-16 flex gap-4 lg:gap-6 3xl:gap-8 flex-wrap justify-center">
        {brands.map((brand) => (
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
  