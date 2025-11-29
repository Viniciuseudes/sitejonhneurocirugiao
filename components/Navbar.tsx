"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Importação adicionada

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* ALTERAÇÃO: Logo em Imagem.
            Ajuste 'w-[180px]' e 'h-[50px]' conforme a proporção da sua logo.
          */}
          <Link href="/" className="relative w-[180px] h-[50px]">
            <Image
              src="/logoj.png"
              alt="Dr. John Rocha"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

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
