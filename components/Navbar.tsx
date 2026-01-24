"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "/#hero" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Especialidades", href: "/#especialidades" },
  { name: "Vídeos e Mídia", href: "/#conteudos" },
  { name: "Locais de Atendimento", href: "/#locais" },
];

// Link centralizado para facilitar manutenção futura
const WHATSAPP_LINK =
  "https://wa.me/5581981044889?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20para%20agendar%20uma%20consulta%20com%20Dr.%20John%20Rocha";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/", "");
      const element = document.querySelector(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm"
          : "bg-transparent border-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Otimizada para SEO */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao início - Dr. John Rocha Neurocirurgião"
        >
          <div className="relative h-10 w-40 md:h-12 md:w-48 transition-all">
            <Image
              src={isScrolled ? "/logoj.png" : "/logojb.png"}
              alt="Dr. John Rocha - Neurocirurgião Especialista em Coluna"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 160px, 192px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-gray-700" : "text-white/90 hover:text-white",
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Botão Call-to-Action - ATUALIZADO */}
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className={cn(
              "font-semibold",
              !isScrolled && "bg-white text-primary hover:bg-white/90",
            )}
            asChild
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta via WhatsApp"
            >
              Agendar Consulta
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                isScrolled ? "text-gray-900" : "text-white",
              )}
              aria-label="Abrir menu de navegação"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {/* Botão Mobile - ATUALIZADO */}
              <Button className="mt-4 w-full" asChild>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
