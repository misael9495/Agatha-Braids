'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Box Braids Premium',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imggg-z7PnuWUnghQRQ8enFLJWvQEUPEl3iH.jpeg',
  },
  {
    title: 'Tranças Criativas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9-uIJpgiERS11hgx5nFosfJLhqCjTLgA.jpeg',
  },
  {
    title: 'Tranças Coloful',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-23%20at%2021.06.05-9C7IzFMvVgt42Z8lE0EsshbhjWcj9F.jpeg',
  },
  {
    title: 'Penteado Complexo',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgg-GgwKh9jzsxrhdI7ZDlwcZYKn7s2DBI.jpeg',
  },
  {
    title: 'Box Braids Curto',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img7-Va8obJAfuHcFlltUhaDbhjlfuWmOZ8.jpeg',
  },
  {
    title: 'Tranças Rosa',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-QIgqS2RPApLjbHBu3n5TUWiGDe1Fb1.jpeg',
  },
  {
    title: 'Penteado Elegante',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img8-VsIBxOzrVnYz86oxFFfPlj8p4gq7kw.jpeg',
  },
  {
    title: 'Tranças Coloridas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-23%20at%2021.06.06-RIFshQ9utoOZNmGDxnqAFclvYTkRNO.jpeg',
  },
  {
    title: 'Crochet Braids',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-gCBJ8jVPdifKRHP1j6zqDe9G2fehwf.jpeg',
  },
  {
    title: 'Tranças Grossas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-DBRT9q297XCPwNAF6AVR9wP1hYSrDC.jpeg',
  },
  {
    title: 'Box Braids Fino',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-hwgkwSWa20QM7Glq0oYzdbpLTAoRCE.jpeg',
  },
  {
    title: 'Tranças Técnicas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-Ao60G4PzEpyVHxZcISS0WS3XB4C3Qa.jpeg',
  },
  {
    title: 'Penteado Artístico',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-PNHsGvIfd2hRUa9Oev7DslUeELTeUM.jpeg',
  },
  {
    title: 'Tranças Wavy',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-CBeYaHTA35gthXnfaeoPUCXg0gPo3G.jpeg',
  },
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-muted/30 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Galeria de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos lindos trabalhos realizados com dedicação e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={80}
                  priority={false}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = item.image;
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm mt-1">Trabalho exclusivo</p>
                  </div>
                </div>
              </div>

              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
