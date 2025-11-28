"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    // ALTERAÇÃO CRÍTICA AQUI:
    // Mudamos pt-28 para pt-4 no mobile.
    // Isso sobe todo o conteúdo já que a navbar não está mais lá ocupando espaço.
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0e2432] to-[#1a4056] overflow-hidden pt-4 lg:pt-16 pb-12">
      {/* Elementos de Fundo Animados */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* FOTO DO MÉDICO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative order-1 lg:order-2 flex justify-center mt-4 lg:mt-0"
          >
            {/* Anel animado - Reduzido opacidade para não brigar com a foto */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 via-amber-500 to-teal-500 blur-2xl opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Container da foto */}
            <motion.div
              // Reduzi um pouco o max-w no mobile para garantir que caiba em telas menores (iPhone SE, etc)
              className="relative aspect-square w-[70vw] max-w-[260px] sm:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-amber-500/20 z-10" />
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt="Dr. John Rocha"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* CONTEÚDO DE TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-teal-500/20 rounded-full mb-4 backdrop-blur-sm border border-teal-500/30">
              <span className="text-teal-300 text-xs sm:text-sm font-semibold tracking-wide">
                NEUROCIRURGIÃO ESPECIALISTA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance leading-tight">
              Excelência e precisão em neurocirurgia.
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
              Dr. John Rocha: Especialista em coluna, crânio e dor. Devolvendo
              seu movimento e qualidade de vida.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg w-full xs:w-auto text-base h-12"
              >
                <Link href="https://wa.me/558132421234" target="_blank">
                  Agendar Consulta
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm w-full xs:w-auto text-base h-12"
              >
                <a href="#sobre">Saiba mais</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
