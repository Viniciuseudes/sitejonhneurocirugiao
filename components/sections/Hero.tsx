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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0e2432] to-[#1a4056] overflow-hidden pt-16">
      {/* Elementos de Fundo Animados */}
      <div className="absolute inset-0 opacity-5">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-teal-500/20 rounded-full mb-6 backdrop-blur-sm border border-teal-500/30"
            >
              <span className="text-teal-300 text-sm font-semibold">
                Neurocirurgião Especialista
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              Excelência, precisão e cuidado em neurocirurgia.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-pretty">
              Dr. John Rocha é neurocirurgião especializado em coluna, crânio e
              dor. Devolvendo movimento e qualidade de vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg"
                >
                  <Link href="https://wa.me/558132421234" target="_blank">
                    Agendar Consulta
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                >
                  <a href="#sobre">Saiba mais</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Foto do Médico com Animações Completas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Anel animado ao redor da foto */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 via-amber-500 to-teal-500 blur-2xl opacity-30"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Círculos de destaque pulsantes */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Container principal da foto com efeito parallax */}
            <motion.div
              className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sobreposição de gradiente para profundidade */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-amber-500/20 z-10" />

              {/* Foto Animada (Dinâmica) */}
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt="Dr. John Rocha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Efeito de Brilho (Shine Effect) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                animate={{
                  opacity: [0, 0.15, 0],
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>

            {/* Elementos flutuantes decorativos */}
            <motion.div
              className="absolute top-10 right-0 w-20 h-20 border-2 border-teal-400/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-0 w-16 h-16 border-2 border-amber-400/30 rounded-full"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
