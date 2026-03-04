"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-foreground to-foreground/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-2">A.M Braids</h3>
            <p className="text-white/70">
              Tranças de qualidade com estilo e profissionalismo
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#home" className="hover:text-accent transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition">
                  Trabalhos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <p className="text-white/70 text-sm mb-2">
              📍 Rua: Gabriel Teixeira de Paula,Taquaritinga,SP
            </p>
            <p className="text-white/70 text-sm">
              🕐 Sábado e Feriado: 9h às 18h
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p className="flex items-center justify-center gap-2">
            © 2026 A.M Braids. Feito com{" "}
            <Heart className="w-4 h-4 text-primary" /> por Agatha
          </p>
        </div>
      </div>
    </footer>
  );
}
