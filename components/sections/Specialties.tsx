"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Stethoscope,
  Activity,
  Timer,
  Target,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-16 lg:py-24 bg-gradient-to-b from-[#0f293a] to-[#1a4056] relative overflow-hidden"
    >
      {/* Background sofisticado e sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção - Mais compacto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-teal-500/10 rounded-full mb-4 border border-teal-500/20">
            <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">
              Tecnologia Minimamente Invasiva
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance font-serif">
            Cirurgia Endoscópica da Coluna
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Abordagem moderna que preserva a anatomia, proporcionando resultados
            superiores com o mínimo de agressão ao corpo.
          </p>
        </motion.div>

        {/* Conteúdo Principal: Imagem + Benefícios - Gap reduzido para harmonia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Visualização 3D */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square relative z-10 max-w-md mx-auto lg:max-w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-amber-500/20 rounded-full blur-3xl opacity-30" />
              <div className="relative w-full h-full p-4 drop-shadow-2xl">
                {/* Certifique-se de que a imagem gerada esteja aqui */}
                <Image
                  src="/coluna2.jpg"
                  alt="Anatomia da Coluna Vertebral 3D"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Pontos de destaque animados (Mais sutis) */}
              {[30, 50, 70].map((top, i) => (
                <motion.div
                  key={i}
                  className="absolute left-[48%] w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]"
                  style={{ top: `${top}%` }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Lista de Benefícios - Layout ajustado */}
          <div className="space-y-5 lg:space-y-6 order-1 lg:order-2">
            {[
              {
                icon: Timer,
                title: "Recuperação Acelerada",
                description:
                  "Alta hospitalar geralmente no mesmo dia, com retorno rápido ao conforto do lar.",
              },
              {
                icon: ShieldCheck,
                title: "Trauma Reduzido",
                description:
                  "Preservação da musculatura e estruturas ósseas, resultando em muito menos dor.",
              },
              {
                icon: Target,
                title: "Alta Precisão",
                description:
                  "Visualização em alta definição (4K) da patologia para segurança máxima.",
              },
              {
                icon: Sparkles,
                title: "Estética Superior",
                description:
                  "Incisões menores que 1cm, sem pontos externos e cicatrizes quase invisíveis.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grid de Outras Especialidades - Aproximado do conteúdo acima */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mt-12 lg:mt-16 border-t border-white/10 pt-12 lg:pt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
              Áreas de Atuação Complexa
            </h3>
            <p className="text-gray-400 text-sm">
              Outros procedimentos realizados com excelência
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                icon: Activity,
                title: "Cirurgia de Coluna",
                desc: "Hérnias e deformidades.",
                color: "text-teal-400",
                bg: "bg-teal-400/10",
                border: "border-teal-400/20",
              },
              {
                icon: Stethoscope,
                title: "Endoscopia",
                desc: "Técnica ultra moderna.",
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                border: "border-blue-400/20",
              },
              {
                icon: Brain,
                title: "Neurocirurgia",
                desc: "Tumores e crânio.",
                color: "text-purple-400",
                bg: "bg-purple-400/10",
                border: "border-purple-400/20",
              },
              {
                icon: ShieldCheck,
                title: "Controle da Dor",
                desc: "Infiltrações e terapias.",
                color: "text-amber-400",
                bg: "bg-amber-400/10",
                border: "border-amber-400/20",
              },
            ].map((spec, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-xl bg-white/5 border ${spec.border} backdrop-blur-sm hover:bg-white/10 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 ${spec.bg} rounded-md flex items-center justify-center`}
                  >
                    <spec.icon className={`w-4 h-4 ${spec.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {spec.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-400 pl-11">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
