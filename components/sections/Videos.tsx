"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`;

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-2xl bg-black shadow-lg hover:shadow-2xl transition-all duration-300",
        "aspect-[9/16]"
      )}
    >
      {isPlaying ? (
        <iframe
          className="w-full h-full absolute inset-0"
          src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&loop=1`}
          title={video.title || "Shorts Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="w-full h-full cursor-pointer relative"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={video.title || "Vídeo sobre neurocirurgia e coluna"}
            fill
            // OTIMIZAÇÃO: Carrega imagem pequena no mobile (50vw) e pequena no desktop (25vw)
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`;
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center text-[10px] text-white font-bold">
                Dr
              </div>
              <span className="text-xs text-blue-200 font-medium uppercase tracking-wider">
                John Rocha
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-2xl">
            <span className="text-blue-800 font-bold tracking-widest text-sm uppercase mb-2 block">
              Educação do Paciente
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e2432] mb-4">
              Galeria de Vídeos
            </h2>
            <p className="text-gray-600 text-lg">
              Entenda mais sobre tratamentos e cirurgias de coluna com
              explicações simples e diretas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
