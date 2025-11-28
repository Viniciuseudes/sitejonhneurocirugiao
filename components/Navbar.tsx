"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-serif text-xl font-bold text-[#0e2432]">
            Dr. John Rocha
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#sobre"
              className="text-gray-700 hover:text-[#0e2432] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#especialidades"
              className="text-gray-700 hover:text-[#0e2432] transition-colors"
            >
              Especialidades
            </a>
            <a
              href="#locais"
              className="text-gray-700 hover:text-[#0e2432] transition-colors"
            >
              Locais
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-[#0e2432] transition-colors"
            >
              Contato
            </a>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-[#0e2432] hover:bg-[#1a3a4f] text-white"
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
