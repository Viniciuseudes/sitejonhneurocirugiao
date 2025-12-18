"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, Star } from "lucide-react";

// Dados da Trajetória (Formatados para o Design)
const educationData = [
  {
    year: "2025",
    title: "Membro do BR NEURO",
    subtitle:
      "Brazilian Neurosurgery Training Hands-On Course (Fresh Frozen Specimen)",
    institution: "M.A.R.C. Institute (Miami Anatomical Research Center)",
    location: "Miami, Florida – USA",
    type: "internacional", // Destaque diferente
    icon: Star,
  },
  {
    year: "2025",
    title: "Curso de Endoscopia de Coluna Avançada",
    subtitle: "Serviço de Residência Médica em Ortopedia de Coluna",
    institution: "Sociedade Brasileira de Coluna Articulare",
    location: "Belém/PA",
    type: "curso",
    icon: Award,
  },
  {
    year: "Atual",
    title: "Preceptor da Residência Médica",
    subtitle: "Neurocirurgia da Coluna - Serviço do Prof. Dr. Hildo Azevedo",
    institution:
      "Hospital da Restauração (Sociedade Brasileira de Neurocirurgia)",
    location: "Recife/PE",
    type: "cargo",
    icon: GraduationCap,
  },
  {
    year: "Fellowship",
    title: "Fellowship em Neurocirurgia de Coluna",
    subtitle: "Especialização com Dr. Ronald Farias",
    institution:
      "Clínica da Coluna do Brasil / Sociedade Brasileira de Neurocirurgia",
    location: "Brasil",
    type: "fellow",
    icon: Award,
  },
  {
    year: "Eletivo",
    title: "Estágio Eletivo em Cirurgia Minimamente Invasiva",
    subtitle:
      "Referência em Cirurgia Degenerativa - Dr. Rodrigo Amaral e Dr. Luiz Pimenta",
    institution: "Instituto de Patologia da Coluna (IPC)",
    location: "São Paulo/SP",
    type: "estagio",
    icon: MapPin,
  },
];

export function Education() {
  return (
    <section id="sobre" className="py-24 bg-[#05111A] relative overflow-hidden">
      {/* Elementos de Fundo (Luzes Sutis) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#2D4F6C]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#152838]/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#2D4F6C] font-bold tracking-widest text-xs uppercase mb-3 block">
            Excelência e Dedicação
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">
            Trajetória <span className="text-[#2D4F6C]">Profissional</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Uma jornada marcada pela busca constante por inovação técnica e
            aprimoramento em grandes centros de referência nacionais e
            internacionais.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Linha Vertical Central (Desktop) / Lateral (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2D4F6C]/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Ponto da Linha do Tempo (Marker) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#05111A] border-2 border-[#2D4F6C] rounded-full z-20 shadow-[0_0_10px_#2D4F6C]" />

                  {/* Espaço Vazio para Alinhamento */}
                  <div className="hidden md:block w-1/2" />

                  {/* Conteúdo (Card) */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                    <div className="group relative p-6 rounded-2xl bg-[#152838]/40 border border-[#2D4F6C]/10 hover:border-[#2D4F6C]/30 hover:bg-[#152838]/60 transition-all duration-300 backdrop-blur-sm">
                      {/* Efeito Glow no Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2D4F6C]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Ano / Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 text-xs font-bold rounded-full ${
                              item.type === "internacional"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                : "bg-[#2D4F6C]/20 text-[#A3C3D9] border border-[#2D4F6C]/20"
                            }`}
                          >
                            {item.year}
                          </span>
                          <item.icon
                            className={`w-5 h-5 ${
                              item.type === "internacional"
                                ? "text-amber-400"
                                : "text-[#2D4F6C]"
                            }`}
                          />
                        </div>

                        {/* Título e Subtítulo */}
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#A3C3D9] transition-colors">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-[#2D4F6C] font-medium text-sm mb-3">
                            {item.subtitle}
                          </p>
                        )}

                        {/* Detalhes (Instituição e Local) */}
                        <div className="space-y-1">
                          <p className="text-gray-400 text-sm border-t border-white/5 pt-3 mt-3">
                            {item.institution}
                          </p>
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
