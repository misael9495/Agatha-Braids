'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-secondary via-white to-accent/10 flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Tranças de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
                Qualidade & Estilo
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
              Transforme seu visual com nossas tranças profissionais. Mais de 4 anos de experiência em box braids, tranças coloridas, e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5516996243301"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg transform hover:scale-105"
              >
                Agendar Horário
              </a>
              <a
                href="https://instagram.com/thaa.szn_"
                className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/10 transition-all"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>

          {/* Right illustration - gradient shapes */}
          <div
            className={`hidden lg:flex justify-center items-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative w-full h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img6-CBeYaHTA35gthXnfaeoPUCXg0gPo3G.jpeg"
                alt="Tranças profissionais coloridas"
                fill
                className="object-cover rounded-3xl transform rotate-6 shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-3xl transform rotate-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}
