"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface AboutProps {
  imageUrl: string;
}

export function About({ imageUrl }: AboutProps) {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0e2432] to-teal-800 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageUrl}
                alt="Dr. John Rocha"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0e2432] mb-6 text-balance">
              Uma trajetória guiada por propósito
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Desde cedo, a medicina despertou em mim algo especial. Ainda
                criança, lembro de observar médicos saindo do hospital e sentir
                admiração por aqueles que dedicavam suas vidas ao cuidado dos
                outros.
              </p>
              <p>
                A escolha pela neurocirurgia veio naturalmente — é uma
                especialidade que une ciência de ponta, habilidade técnica e a
                oportunidade de transformar vidas de forma profunda.
              </p>
              <p className="text-xl font-semibold text-teal-700 py-4 italic">
                &quot;Técnica e humanidade caminham juntas.&quot;
              </p>
              <p>
                Hoje, como neurocirurgião, carrego o propósito de unir ciência,
                técnica e empatia. Cada paciente é único, e meu compromisso é
                oferecer não apenas tratamento, mas acolhimento e esperança.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
