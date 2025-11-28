"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importe ícones se precisar para mobile, ou mantenha simples

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica: Detectar scroll para mudar a cor, mas NUNCA esconder a barra
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      // Removemos a animação de esconder (y: -100). Agora ela é fixa.
      initial={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2" // Estilo ao rolar (Fundo Branco)
          : "bg-transparent border-transparent py-4" // Estilo no topo (Transparente)
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo: Muda de cor para garantir contraste */}
          <div
            className={`font-serif text-xl font-bold transition-colors ${
              isScrolled ? "text-[#0e2432]" : "text-white"
            }`}
          >
            Dr. John Rocha
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            {["Sobre", "Especialidades", "Locais", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                  isScrolled ? "text-gray-700" : "text-gray-200"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Botão de Ação */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className={`transition-colors ${
                isScrolled
                  ? "bg-[#0e2432] hover:bg-[#1a3a4f] text-white"
                  : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
              }`}
            >
              <Link href="https://wa.me/558132421234" target="_blank">
                Agendar Consulta
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
