"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Importação adicionada
import {
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-[#0e2432] text-gray-300 border-t border-white/10 relative overflow-hidden"
    >
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Sobre a Marca */}
          <div className="space-y-6">
            {/* ALTERAÇÃO: Logo em Imagem no Footer.
               Aumentei um pouco para w-[200px] para destaque.
            */}
            <div className="relative w-[200px] h-[60px]">
              <Image
                src="/logo.png"
                alt="Dr. John Rocha"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Neurocirurgião especializado em técnicas minimamente invasivas.
              Compromisso com a excelência médica e a recuperação da sua
              qualidade de vida.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/drjohnrocha" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 block"></span>
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#" },
                { name: "Sobre o Dr. John", href: "#sobre" },
                { name: "Especialidades", href: "#especialidades" },
                { name: "Locais de Atendimento", href: "#locais" },
                {
                  name: "Agendar Consulta",
                  href: "https://wa.me/558132421234",
                },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm hover:text-teal-400 transition-colors duration-300"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-600 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Cidades de Atuação */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 block"></span>
              Atendimento
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Recife - PE
                  </h4>
                  <span className="text-xs text-gray-500">
                    Max Day • Jayme da Fonte
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    João Pessoa - PB
                  </h4>
                  <span className="text-xs text-gray-500">
                    UMAN • HNSN • CCD
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Campina Grande - PB
                  </h4>
                  <span className="text-xs text-gray-500">Clínica Digest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 block"></span>
              Fale Conosco
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/558132421234"
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">
                    Central de Agendamento
                  </div>
                  <div className="text-white font-medium group-hover:text-teal-400 transition-colors">
                    Agendar via WhatsApp
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@drjohnrocha.com.br"
                className="flex items-center gap-3 text-sm hover:text-teal-400 transition-colors pl-2"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                contato@drjohnrocha.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior: Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Dr. John Rocha. CRM-PE 23377 | RQE 13455. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
