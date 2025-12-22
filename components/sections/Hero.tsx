"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroProps {
  imageUrl?: string;
  backgroundImageUrl?: string;
}

export function Hero({
  imageUrl: _imageUrl,
  backgroundImageUrl = "/hero.webp",
}: HeroProps) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bgDark = "#05111A";

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-end lg:items-center overflow-hidden pt-20 lg:pt-0 bg-[#05111A]">
      {/* --- BACKGROUND EFFECTS & IMAGE --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* [CORREÇÃO] 1. Camada da Imagem de Fundo (Prédio) - MAIS VISÍVEL */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageUrl}
            alt="Background Real Neuro"
            fill
            priority
            // MUDANÇA AQUI: Aumentei a opacity de 40 para 70.
            // Mantive grayscale e contrast para definição.
            className="object-cover object-center opacity-70 grayscale contrast-125"
          />
        </div>

        {/* [CORREÇÃO] 2. Overlay Azul - MAIS SUAVE E LUMINOSO */}
        <div
          className="absolute inset-0 z-10"
          style={{
            // MUDANÇA AQUI: Opacidades do gradiente muito mais baixas (0.4 a 0.7 em vez de 0.85 a 0.9)
            background: `linear-gradient(to top, rgba(5, 17, 26, 0.7) 0%, rgba(5, 17, 26, 0.4) 50%, rgba(5, 17, 26, 0.6) 100%)`,
            // MUDANÇA IMPORTANTE: 'overlay' em vez de 'multiply'. Isso tinge sem escurecer excessivamente.
            mixBlendMode: "overlay",
          }}
        />
        {/* Overlay mobile extra REMOVIDO pois não é mais necessário */}

        {/* 3. Luzes e Grid (Mantidos) */}
        <div className="absolute top-[10%] right-[-10%] w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-[#2D4F6C]/30 rounded-full blur-[80px] lg:blur-[120px] mix-blend-screen opacity-60 z-20" />
        <div className="absolute bottom-0 left-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[500px] bg-[#152838]/40 rounded-full blur-[80px] lg:blur-[100px] mix-blend-screen z-20" />

        <div
          className="absolute inset-0 opacity-[0.03] z-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Container do Conteúdo (Mantido z-30) */}
      <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center w-full min-h-[calc(100vh-80px)]">
          {/* --- COLUNA DIREITA: IMAGEM MÉDICO --- */}
          <div className="relative h-full flex items-end justify-center lg:justify-end mt-[-20px] lg:mt-0 pointer-events-none lg:col-span-6 order-1 lg:order-2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[500px] lg:max-w-[700px] h-[60vh] lg:h-[90vh] flex items-end"
              // Ajuste fino nas máscaras para o novo fundo mais claro
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              {/* Gradiente na base do médico ajustado */}
              <div
                className="absolute bottom-0 left-0 w-full h-[30%] z-20"
                style={{
                  background: `linear-gradient(to top, rgba(5, 17, 26, 0.9) 0%, transparent 100%)`,
                }}
              />

              <Image
                src="/dr-john-hero-transparent.png"
                alt="Dr. John Rocha - Neurocirurgião"
                fill
                priority
                // Drop shadow um pouco mais forte para destacar do fundo mais claro
                className="object-contain object-bottom z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 768px) 100vw, 700px"
              />

              {/* CRM Badge */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                // Fundo do badge um pouco mais sólido para contraste
                className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[-2rem] lg:bottom-24 w-max max-w-[90%] bg-[#0D1F2D]/95 backdrop-blur-xl border border-[#2D4F6C]/40 p-3 lg:p-4 rounded-2xl z-30 shadow-2xl block"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-tr from-[#2D4F6C] to-[#1C3A50] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-[10px] tracking-wider">
                      CRM
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs lg:text-sm font-bold leading-tight">
                      Excelência Médica
                    </p>
                    <p className="text-[#94A3B8] text-[10px] lg:text-xs">
                      CRM-PE 23377 | RQE 13455
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* --- COLUNA ESQUERDA: TEXTO --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col justify-center lg:col-span-6 pt-0 lg:pt-0 mt-[-10px] lg:mt-0 relative z-30 order-2 lg:order-1 pb-20 lg:pb-0"
          >
            {/* Badge de Especialidade */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex justify-center lg:justify-start"
            >
              {/* Fundo do badge ajustado para contraste */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1F2D]/80 border border-[#2D4F6C]/40 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D4F6C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A789C]"></span>
                </span>
                <span className="text-[#A3C3D9] text-xs font-bold tracking-widest uppercase">
                  Neurocirurgia de Alta Precisão
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              // Sombra do texto reforçada para garantir leitura
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight text-center lg:text-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            >
              Recupere sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6B8CA8]">
                qualidade de vida
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              // Texto um pouco mais claro (gray-200) e com sombra
              className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] font-medium"
            >
              Dr. John Rocha: Especialista em cirurgias minimamente invasivas da
              coluna e crânio. Tecnologia de ponta para um tratamento humanizado
              e recuperação rápida.
            </motion.p>

            {/* ... (Botões e lista de checks permanecem iguais, o contraste já é bom) ... */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 bg-[#2D4F6C] hover:bg-[#1C3A50] text-white rounded-full text-base font-semibold shadow-[0_0_20px_rgba(45,79,108,0.3)] hover:shadow-[0_0_30px_rgba(45,79,108,0.4)] transition-all duration-300 border border-[#2D4F6C]"
              >
                <Link
                  href="https://wa.me/5583996686436"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                // Ajuste sutil na borda e fundo do botão outline
                className="h-14 px-8 border-white/30 text-white hover:bg-white/20 hover:text-[#A3C3D9] rounded-full bg-transparent/10 backdrop-blur-md transition-all"
              >
                <a href="#especialidades">Conhecer Tratamentos</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              // Texto dos checks mais claro
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-200 font-medium justify-center lg:justify-start drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              {[
                "Atendimento Humanizado",
                "Tecnologia 4K",
                "Recuperação Acelerada",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4A789C]" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
