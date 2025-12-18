"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Utilitário padrão do shadcn

interface Video {
  id: number;
  youtube_id: string;
  title: string | null;
}

interface VideosProps {
  videos: Video[];
}

function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // URL da thumbnail (tenta pegar a de alta resolução)
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`;

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-2xl bg-black shadow-lg hover:shadow-2xl transition-all duration-300",
        "aspect-[9/16]" // FORÇA O FORMATO SHORTS (Vertical)
      )}
    >
      {isPlaying ? (
        // --- PLAYER DO YOUTUBE (AutoPlay) ---
        <iframe
          className="w-full h-full absolute inset-0"
          src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&loop=1`}
          title={video.title || "Shorts Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        // --- CAPA DO SHORTS (Estilo App) ---
        <div
          className="w-full h-full cursor-pointer relative"
          onClick={() => setIsPlaying(true)}
        >
          {/* Imagem de Fundo (Cobre tudo) */}
          <Image
            src={thumbnailUrl}
            alt={video.title || "Vídeo thumbnail"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
            }}
          />

          {/* Gradiente Escuro no Fundo (Para ler o texto) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

          {/* Botão de Play Centralizado */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>

          {/* Informações na parte inferior (Estilo TikTok/Reels) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white font-bold">
                Dr
              </div>
              <span className="text-xs text-teal-300 font-medium uppercase tracking-wider">
                Jonh
              </span>
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base leading-snug line-clamp-3 mb-1">
              {video.title || "Assista a este vídeo explicativo"}
            </h3>
            <p className="text-gray-400 text-xs">Toque para assistir</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function Videos({ videos }: VideosProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white" id="conteudos">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-2 block">
              Galeria de Mídia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e2432] mb-4">
              Especialidades
            </h2>
            <p className="text-gray-600 text-lg">
              Vídeos curtos e diretos sobre as principais especialidades;
            </p>
          </div>

          {/* Botão decorativo ou link para canal */}
          <a
            href="https://youtube.com/@SeuCanal"
            target="_blank"
            className="hidden md:flex items-center font-medium text-[#0e2432] hover:text-teal-600 transition-colors"
          >
            Ver canal completo &rarr;
          </a>
        </div>

        {/* Grid Responsivo Focado em Vertical */}
        {/* Mobile: 2 colunas (como Instagram) | Desktop: 4 colunas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://youtube.com/@SeuCanal"
            target="_blank"
            className="inline-flex items-center font-medium text-teal-600 border border-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 transition-colors"
          >
            Ver todos os vídeos
          </a>
        </div>
      </div>
    </section>
  );
}
