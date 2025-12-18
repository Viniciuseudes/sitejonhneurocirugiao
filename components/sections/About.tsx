"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

// --- Configuração dos Stories ---
const stories = [
  {
    id: 1,
    title: "O início de tudo",
    videoUrl: "/story1.mp4",
    duration: "",
  },
  {
    id: 2,
    title: "Desafios e Inspirações",
    videoUrl: "/story2.mp4",
    duration: "",
  },
  {
    id: 3,
    title: "Paixão e Propósito",
    videoUrl: "/story3.mp4",
    duration: "",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface AboutProps {
  imageUrl: string;
}

export function About({ imageUrl }: AboutProps) {
  // Estado para saber qual vídeo está tocando (pelo ID)
  const [playingId, setPlayingId] = useState<number | null>(null);

  // Referências para controlar os elementos de vídeo diretamente
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlayToggle = (id: number) => {
    const currentVideo = videoRefs.current[id];

    // 1. Se clicar em um vídeo diferente do que está tocando, pausa o anterior
    if (playingId && playingId !== id) {
      const previousVideo = videoRefs.current[playingId];
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0; // Opcional: reseta o vídeo anterior
      }
    }

    // 2. Controla o Play/Pause do vídeo clicado
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
        setPlayingId(id);
      } else {
        currentVideo.pause();
        setPlayingId(null);
      }
    }
  };

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden relative">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2D4F6C]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- PARTE SUPERIOR: TEXTO E FOTO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#05111A] to-[#2D4F6C] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={imageUrl}
                alt="Dr. John Rocha"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
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
            <span className="text-[#2D4F6C] font-bold tracking-widest text-xs uppercase mb-4 block">
              Sobre o Doutor
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#05111A] mb-6 text-balance font-serif">
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
              <p className="text-xl font-semibold text-[#2D4F6C] py-4 italic border-l-4 border-[#2D4F6C] pl-4 bg-gray-50 rounded-r-lg">
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

        {/* --- NOVA SEÇÃO: VÍDEOS INTERATIVOS --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="border-t border-gray-100 pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#05111A] mb-2 flex items-center justify-center gap-2">
              <Play className="w-5 h-5 text-[#2D4F6C] fill-current" />
              Conheça mais de perto
            </h3>
            <p className="text-gray-500">
              Clique para assistir aos depoimentos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto">
            {stories.map((story) => {
              const isPlaying = playingId === story.id;

              return (
                <div
                  key={story.id}
                  onClick={() => handlePlayToggle(story.id)}
                  className={`group relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl cursor-pointer border transition-all duration-500 ${
                    isPlaying
                      ? "border-[#2D4F6C] shadow-[#2D4F6C]/20 ring-2 ring-[#2D4F6C]/20 scale-[1.02]"
                      : "border-[#2D4F6C]/10 hover:border-[#2D4F6C] hover:-translate-y-2"
                  }`}
                >
                  {/* VÍDEO REAL */}
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[story.id] = el;
                    }}
                    src={story.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    onEnded={() => setPlayingId(null)} // Volta a capa quando acabar
                    // Removido 'muted' e 'autoPlay' para controle manual
                  />

                  {/* OVERLAY (CAPA + BOTÕES) */}
                  {/* Só aparece se NÃO estiver tocando */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-b from-transparent via-[#05111A]/20 to-[#05111A] transition-opacity duration-500 ${
                      isPlaying
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                    }`}
                  >
                    {/* Botão Play Centralizado */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#2D4F6C] transition-all duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>

                    {/* Informações */}
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium tracking-wide block text-lg shadow-black drop-shadow-md">
                        {story.title}
                      </span>
                      <span className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                        <Play className="w-3 h-3" /> {story.duration}
                      </span>
                    </div>
                  </div>

                  {/* Botão Pause Discreto (Aparece quando está tocando e passa o mouse) */}
                  {isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[1px]">
                      <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white">
                        <Pause className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
