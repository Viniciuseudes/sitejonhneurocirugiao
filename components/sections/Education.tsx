"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Award, ScrollText } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Detalhe de fundo sutil (Marca d'água abstrata) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wider uppercase mb-4">
            <ScrollText className="w-3 h-3" />
            Qualificação
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e2432] mb-6 font-serif">
            Trajetória de Excelência
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Uma formação sólida construída em instituições de referência, focada
            na busca constante pelo que há de mais avançado na neurocirurgia.
          </p>
        </motion.div>

        {/* Grid de Credenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Graduação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-teal-600" />
            </div>

            <h3 className="text-xl font-bold text-[#0e2432] mb-2">
              Formação Médica
            </h3>
            <p className="text-teal-600 font-medium text-sm mb-4 uppercase tracking-wide">
              Universidade Federal da Paraíba
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Graduação em Medicina pela UFPB, uma das instituições mais
              tradicionais e respeitadas do nordeste.
            </p>
          </motion.div>

          {/* Card 2: Residência */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-8 rounded-2xl bg-[#0e2432] text-white shadow-xl transform md:scale-105 z-10 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Destaque visual para a residência (Card Central) */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Building2 className="w-24 h-24" />
            </div>

            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-7 h-7 text-teal-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Residência Médica
            </h3>
            <p className="text-teal-400 font-medium text-sm mb-4 uppercase tracking-wide">
              Hospital da Restauração (PE)
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Especialização em Neurocirurgia no maior centro de neurologia e
              neurocirurgia do Norte/Nordeste. Referência em alta complexidade.
            </p>
          </motion.div>

          {/* Card 3: Certificação */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-teal-500 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-7 h-7 text-teal-600" />
            </div>

            <h3 className="text-xl font-bold text-[#0e2432] mb-2">
              Título de Especialista
            </h3>
            <p className="text-teal-600 font-medium text-sm mb-4 uppercase tracking-wide">
              Sociedade Brasileira (SBN)
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Membro Titular da Sociedade Brasileira de Neurocirurgia,
              certificação que atesta a excelência técnica e ética profissional.
            </p>
          </motion.div>
        </div>

        {/* Frase de encerramento da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400 italic">
            "A medicina é um aprendizado contínuo. Dedico-me diariamente a
            oferecer o que há de melhor aos meus pacientes."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
