"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Users, Sparkles } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-75" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agatha.png-xGWbmHuiZelrY3gRNdMViQ7pblIzeM.jpeg"
                alt="Agatha - Profissional de Tranças"
                width={400}
                height={500}
                className="relative rounded-2xl object-cover w-full h-auto shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Conheça Agatha
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}
                Trancista
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de 4 anos de experiência em tranças profissionais, Agatha
              dedica-se a criar looks únicos e personalizados para cada cliente.
              Sua paixão pela arte das tranças reflete-se em cada trabalho
              realizado.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Especializada em box braids, tranças coloridas, crochet braids, e
              muito mais, Agatha utiliza apenas os melhores materiais para
              garantir qualidade, durabilidade e conforto aos seus clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">4+ Anos</h3>
                <p className="text-sm text-muted-foreground">De experiência</p>
              </div>
              <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">100+</h3>
                <p className="text-sm text-muted-foreground">
                  Clientes satisfeitos
                </p>
              </div>
              <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Qualidade garantida
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5516996243301"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg transform hover:scale-105"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
