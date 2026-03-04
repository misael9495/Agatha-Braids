"use client";

import { useEffect, useRef, useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
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

  const contactLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/thaa.szn_",
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: null,
      email: "milenaagatha77@gmail.com",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      href: "https://wa.me/5516996243301",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: MapPin,
      label: "Localização",
      href: "https://maps.app.goo.gl/A8skP9bLhHivwu7x6",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}
              Contato
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronta para transformar seu visual? Conecte conosco através de
            nossas redes sociais e agende seu horário
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            // Se é email, renderiza como div ao invés de link
            if (link.email) {
              return (
                <div
                  key={index}
                  className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50 transition-all duration-300 overflow-hidden ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {link.email}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Clique para conectar
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="https://wa.me/5516996243301"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Agendar Agora via WhatsApp
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-12 border-t border-border/50 text-center text-muted-foreground">
          {/*<p className="mb-2">
            📍 Localização: [Insira seu endereço]
          </p>*/}
          <p>Horário de funcionamento: Sábado e Feriado, 9h às 18h</p>
        </div>
      </div>
    </section>
  );
}
