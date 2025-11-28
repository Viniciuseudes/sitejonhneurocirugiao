"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0e2432] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-serif text-2xl font-bold mb-2">
              Dr. John Rocha
            </div>
            <p className="text-gray-400">
              Neurocirurgia com excelência e humanidade
            </p>
          </div>
          <div className="flex gap-4">{/* Ícones sociais aqui */}</div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dr. John Rocha. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
