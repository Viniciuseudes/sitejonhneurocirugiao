"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

interface Video {
  id: number;
  youtube_id: string;
  title: string | null;
}

interface VideosProps {
  videos: Video[];
}

export function Videos({ videos }: VideosProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <section
      id="conteudos"
      className="py-24 bg-[#0e2432] text-white relative overflow-hidden"
    >
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-teal-500/10 rounded-full mb-4 border border-teal-500/20">
            <span className="text-teal-400 text-sm font-semibold tracking-wide">
              CONTEÚDOS EXCLUSIVOS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Acompanhe no <span className="text-teal-400">YouTube</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Dicas rápidas, explicações sobre cirurgias e orientações para sua
            saúde em formato Shorts.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem
                key={video.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative group aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                  {/* Thumbnail do YouTube de Alta Qualidade */}
                  <img
                    src={`https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`}
                    alt={video.title || "Vídeo Dr. John Rocha"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />

                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                  {/* Botão Play (Aparece no Hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Título e Link */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtube_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-teal-400 font-medium hover:text-teal-300"
                    >
                      Assistir Agora
                      <Play className="w-3 h-3 ml-2" />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-teal-500 hover:text-white hover:border-teal-500" />
            <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-teal-500 hover:text-white hover:border-teal-500" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
