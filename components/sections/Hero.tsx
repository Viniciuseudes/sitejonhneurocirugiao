"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroProps {
  imageUrl?: string;
}

export function Hero({ imageUrl: _imageUrl }: HeroProps) {
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
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-end lg:items-center bg-[#05111A] overflow-hidden pt-20 lg:pt-0">
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05111A] via-[#0D1F2D] to-[#05111A]" />

        {/* Luzes ajustadas */}
        <div className="absolute top-[10%] right-[-10%] w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-[#2D4F6C]/20 rounded-full blur-[80px] lg:blur-[120px] mix-blend-screen opacity-50 lg:opacity-60" />
        <div className="absolute bottom-0 left-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[500px] bg-[#152838]/30 rounded-full blur-[80px] lg:blur-[100px] mix-blend-screen" />

        <div
          className="absolute inset-0 opacity-[0.02] z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* CORREÇÃO AQUI: gap-0 no mobile para colar as seções */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-center w-full min-h-[calc(100vh-80px)]">
          {/* --- COLUNA DIREITA: IMAGEM (Vem primeiro no Mobile - Order 1) --- */}
          <div className="relative h-full flex items-end justify-center lg:justify-end mt-[-20px] lg:mt-0 pointer-events-none lg:col-span-6 order-1 lg:order-2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[500px] lg:max-w-[700px] h-[60vh] lg:h-[90vh] flex items-end [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%),linear-gradient(to_left,transparent_0%,black_10%,black_90%,transparent_100%)]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              <div
                className="absolute bottom-0 left-0 w-full h-[30%] z-20"
                style={{
                  background: `linear-gradient(to top, ${bgDark} 5%, transparent 100%)`,
                }}
              />

              <Image
                src="/dr-john-hero-transparent.png"
                alt="Dr. John Rocha - Neurocirurgião"
                fill
                priority
                className="object-contain object-bottom z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 768px) 100vw, 700px"
              />

              {/* CRM Badge - Ajustado para ficar bem na base */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[-2rem] lg:bottom-24 w-max max-w-[90%] bg-[#152838]/90 backdrop-blur-xl border border-[#2D4F6C]/30 p-3 lg:p-4 rounded-2xl z-30 shadow-2xl block"
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

          {/* --- COLUNA ESQUERDA: TEXTO (Vem depois no Mobile - Order 2) --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            // CORREÇÃO: pt-0 no mobile e mt-[-10px] para puxar pra cima colando no CRM
            className="flex flex-col justify-center lg:col-span-6 pt-0 lg:pt-0 mt-[-10px] lg:mt-0 relative z-30 order-2 lg:order-1 pb-20 lg:pb-0"
          >
            {/* Badge de Especialidade - Agora logo abaixo do CRM visualmente */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#152838] border border-[#2D4F6C]/30 backdrop-blur-md">
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
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight text-center lg:text-left"
            >
              Recupere sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6B8CA8]">
                qualidade de vida
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              Dr. John Rocha: Especialista em cirurgias minimamente invasivas da
              coluna e crânio. Tecnologia de ponta para um tratamento humanizado
              e recuperação rápida.
            </motion.p>

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
                className="h-14 px-8 border-white/10 text-white hover:bg-white/5 hover:text-[#A3C3D9] rounded-full bg-transparent backdrop-blur-sm transition-all"
              >
                <a href="#especialidades">Conhecer Tratamentos</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 justify-center lg:justify-start"
            >
              {[
                "Atendimento Humanizado",
                "Tecnologia 4K",
                "Recuperação Acelerada",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2D4F6C]" />
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
