"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-07dlbPc7KMjYP6k7CsPNh95CZ2Neq1.png"
            alt="A.M Braids Logo"
            width={80}
            height={80}
            className="h-14 w-auto object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Trabalhos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold cursor-pointer"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-white animate-in fade-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Trabalhos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold w-full cursor-pointer"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
