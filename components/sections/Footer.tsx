"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Clock,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-[#091822] text-gray-300 border-t border-[#2D4F6C]/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D4F6C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#152838]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Coluna 1: Sobre a Marca */}
          <div className="space-y-6">
            <div className="relative w-[180px] h-[60px]">
              <Image
                src="/logojb.png"
                alt="Dr. John Rocha - Neurocirurgião"
                fill
                className="object-contain object-left opacity-90 hover:opacity-100 transition-opacity"
                sizes="180px"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-400 border-l-2 border-[#2D4F6C]/30 pl-4">
              Neurocirurgia de alta precisão com foco em técnicas minimamente
              invasivas. Tecnologia a favor da sua qualidade de vida.
            </p>

            <div className="flex gap-4 pt-2">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/drjohn.neuro/",
                  label: "Siga no Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#152838] flex items-center justify-center text-[#A3C3D9] hover:bg-[#2D4F6C] hover:text-white transition-all duration-300 border border-[#2D4F6C]/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(45,79,108,0.4)]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#2D4F6C] rounded-full"></span>
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "/" },
                { name: "Sobre a Trajetória", href: "/#sobre" },
                { name: "Especialidades", href: "/#especialidades" },
                { name: "Locais de Atendimento", href: "/#locais" },
                { name: "Galeria de Vídeos", href: "/#conteudos" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#2D4F6C] transition-colors duration-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#2D4F6C]/50 group-hover:text-[#2D4F6C] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Presença Regional */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#2D4F6C] rounded-full"></span>
              Atendimento
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3 group cursor-default">
                <div className="mt-1 p-1.5 rounded bg-[#2D4F6C]/10 text-[#2D4F6C] group-hover:bg-[#2D4F6C] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-200 font-medium text-sm group-hover:text-white">
                    Recife & Goiana (PE)
                  </h4>
                  <span className="text-xs text-gray-500 block mt-1">
                    Jayme da Fonte • Max Day • Memorial
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-default">
                <div className="mt-1 p-1.5 rounded bg-[#2D4F6C]/10 text-[#2D4F6C] group-hover:bg-[#2D4F6C] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-gray-200 font-medium text-sm group-hover:text-white">
                    João Pessoa & Campina (PB)
                  </h4>
                  <span className="text-xs text-gray-500 block mt-1">
                    UMAN Clinic • Clínica Digest
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 4: Agendamento */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#2D4F6C] rounded-full"></span>
              Agendamento
            </h3>
            <div className="space-y-4">
              <a
                href="5583998446175"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#152838]/50 border border-[#2D4F6C]/20 hover:border-[#2D4F6C] hover:bg-[#2D4F6C]/10 transition-all group shadow-lg shadow-black/20"
                aria-label="Agendar via WhatsApp"
              >
                <div className="w-10 h-10 rounded-full bg-[#2D4F6C] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#2D4F6C] font-bold">
                    Agende Agora
                  </div>
                  <div className="text-white font-semibold text-sm group-hover:text-[#A3C3D9] transition-colors">
                    (83) 99668-6436
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@drjohnrocha.com.br"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#2D4F6C] transition-colors pl-2"
              >
                <Mail className="w-4 h-4" />
                contato@drjohnrocha.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2D4F6C]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Dr. John Rocha.{" "}
            <span className="text-[#2D4F6C]">CRM-PE 23377 | RQE 13455</span>.
            Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> Atualizado em 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
