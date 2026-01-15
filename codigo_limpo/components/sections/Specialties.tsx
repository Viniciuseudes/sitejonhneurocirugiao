"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Stethoscope,
  Activity,
  Timer,
  Target,
  Sparkles,
  ShieldCheck,
  Microscope,
  Bone,
} from "lucide-react";
import Image from "next/image";

// Dados originais restaurados, agora com a nova estética
const benefits = [
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
];

// Dados das outras áreas de atuação (Grid Inferior)
const otherSpecialties = [
  {
    icon: Bone,
    title: "Cirurgia de Coluna",
    desc: "Hérnias e deformidades.",
  },
  {
    icon: Stethoscope,
    title: "Endoscopia",
    desc: "Técnica ultra moderna.",
  },
  {
    icon: Brain,
    title: "Neurocirurgia",
    desc: "Tumores e crânio.",
  },
  {
    icon: Activity,
    title: "Controle da Dor",
    desc: "Infiltrações e terapias.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-16 lg:py-24 bg-[#05111A] relative overflow-hidden"
    >
      {/* Background sofisticado com a nova paleta */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Luz ambiente azulada */}
      <div className="absolute top-[-10%] right-0 w-[500px] h-[500px] bg-[#2D4F6C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge Sofisticada */}
          <div className="inline-block px-4 py-1.5 bg-[#152838] rounded-full mb-6 border border-[#2D4F6C]/30 backdrop-blur-md">
            <span className="text-[#A3C3D9] text-xs font-bold tracking-widest uppercase">
              Tecnologia Minimamente Invasiva
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance font-serif tracking-tight">
            Cirurgia Endoscópica da{" "}
            <span className="text-[#2D4F6C]">Coluna</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Abordagem moderna que preserva a anatomia, proporcionando resultados
            superiores com o mínimo de agressão ao corpo.
          </p>
        </motion.div>

        {/* --- CONTEÚDO PRINCIPAL: IMAGEM + BENEFÍCIOS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* 1. Visualização 3D (Imagem da Coluna com Glow Azul Aço) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Aura Azul Aço - Substituindo o Teal */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#2D4F6C]/30 to-[#1C3A50]/20 rounded-full blur-[80px] animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              {/* Imagem Flutuante */}
              <motion.div
                className="relative w-[90%] h-[90%] z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/coluna2.jpg"
                  alt="Anatomia da Coluna Vertebral 3D"
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(45,79,108,0.4)]"
                  priority
                />
              </motion.div>

              {/* Círculos Orbitais Discretos */}
              <div className="absolute inset-0 border border-[#2D4F6C]/10 rounded-full scale-110 pointer-events-none" />
            </div>
          </motion.div>

          {/* 2. Lista de Benefícios (Restaurada com novo Design) */}
          <div className="space-y-6 order-1 lg:order-2">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Card Efeito Vidro com Borda Azul Aço ao passar o mouse
                className="group flex gap-5 p-5 rounded-2xl bg-[#152838]/30 border border-white/5 hover:border-[#2D4F6C]/30 hover:bg-[#152838]/60 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#2D4F6C]/10 border border-[#2D4F6C]/20 flex items-center justify-center group-hover:bg-[#2D4F6C] group-hover:text-white text-[#2D4F6C] transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A3C3D9] transition-colors">
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

        {/* --- GRID SECUNDÁRIO (Outras Áreas) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="border-t border-white/5 pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-2">
              Áreas de Atuação Complexa
            </h3>
            <p className="text-gray-500 text-sm">
              Procedimentos realizados com o padrão ouro da neurocirurgia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherSpecialties.map((spec, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-[#152838]/40 border border-white/5 hover:border-[#2D4F6C]/40 hover:bg-[#152838] transition-all duration-300 cursor-default"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2D4F6C]/10 flex items-center justify-center text-[#2D4F6C]">
                    <spec.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {spec.title}
                    </h4>
                    <p className="text-xs text-gray-400">{spec.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
