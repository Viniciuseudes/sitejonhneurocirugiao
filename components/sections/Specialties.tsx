"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Brain, Stethoscope, Activity, Heart } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-24 bg-gradient-to-b from-[#1e4a64] to-[#2a5c78] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Por que escolher a cirurgia endoscópica da coluna?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto text-pretty">
            Veja os principais benefícios desse tratamento moderno e eficaz:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Spine Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#1a3a4f]/50 to-[#0e2432]/50 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Animated spine visualization - Container Relativo para o Image */}
              <div className="relative w-full h-full p-8">
                <Image
                  src="/3d-medical-spine-column-anatomy-vertebrae-glowing-.jpg"
                  alt="Coluna vertebral 3D"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Glowing points on spine */}
              <motion.div
                className="absolute top-1/4 left-1/2 w-4 h-4 bg-teal-400 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-teal-400 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-2/3 left-1/2 w-4 h-4 bg-teal-400 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Benefits List - Restaurada completa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                icon: "🏃",
                title: "Recuperação mais rápida",
                description:
                  "Alta no mesmo dia, com retorno precoce às atividades do dia a dia.",
              },
              {
                icon: "💚",
                title: "Menos dor pós-operatória",
                description:
                  "Procedimento minimamente invasivo reduz o trauma e o desconforto.",
              },
              {
                icon: "🎯",
                title: "Segurança e precisão",
                description:
                  "Visualização direta da lesão com mínima manipulação dos tecidos.",
              },
              {
                icon: "✨",
                title: "Estética e conforto",
                description:
                  "Incisões pequenas, sem pontos visíveis e cicatriz mais discreta.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Specialties Grid - Restaurado completo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
            Outras Especialidades de Alta Complexidade
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: "Cirurgia da Coluna por Vídeo",
                description:
                  "Procedimentos minimamente invasivos com recuperação mais rápida",
                color: "from-teal-500 to-cyan-600",
              },
              {
                icon: Stethoscope,
                title: "Endoscopia de Coluna",
                description: "Técnica avançada com menor trauma cirúrgico",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: Brain,
                title: "Neurocirurgia Craniana",
                description:
                  "Cirurgias de alta complexidade do sistema nervoso central",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Heart,
                title: "Tratamento da Dor",
                description:
                  "Abordagens modernas para alívio e qualidade de vida",
                color: "from-amber-500 to-orange-600",
              },
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <specialty.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {specialty.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
