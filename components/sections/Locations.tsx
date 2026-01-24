"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- DEFINIÇÃO DE TIPOS ---
interface Unit {
  name: string;
  sub?: string;
  image: string;
  phones: string[];
  addressLink: string;
  gmbLink: string; // Usado para o botão "Ver no Mapa"
  badge: string;
  customWppLink?: string; // Campo opcional para link específico de WhatsApp
}

interface CityData {
  city: string;
  description: string;
  units: Unit[];
}

// Link específico para Recife solicitado
const WHATSAPP_RECIFE =
  "https://wa.me/5581981044889?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20para%20agendar%20uma%20consulta%20com%20Dr.%20John%20Rocha";

// --- DADOS DOS LOCAIS ---
const locationsData: Record<string, CityData> = {
  recife: {
    city: "Recife",
    description:
      "No coração do Nordeste, Recife reúne tradição, modernidade e excelência em saúde. Minhas unidades na cidade foram escolhidas para oferecer acesso, comodidade e cuidado especializado, sempre próximos de quem mais precisa.",
    units: [
      {
        name: "Hospital Jayme da Fonte",
        image: "/jayme.jpg",
        phones: ["(81) 9216-8890"],
        addressLink: "https://maps.app.goo.gl/rg9lfKmBTdrLbRMdB",
        gmbLink: "https://share.google/rg9lfKmBTdrLbRMdB",
        badge: "Referência Hospitalar",
        // ADICIONADO: Link específico para Recife
        customWppLink: WHATSAPP_RECIFE,
      },
      {
        name: "Max Day Hospital",
        sub: "Shopping RioMar",
        image: "/maxday.webp",
        phones: ["(81) 2011-4050"],
        addressLink: "https://maps.app.goo.gl/KODBqM1MxT3drBtnl",
        gmbLink: "https://share.google/KODBqM1MxT3drBtnl",
        badge: "Estrutura Premium",
        // ADICIONADO: Link específico para Recife
        customWppLink: WHATSAPP_RECIFE,
      },
    ],
  },
  joao_pessoa: {
    city: "João Pessoa",
    description:
      "João Pessoa é onde tudo começou. Minha história nasceu aqui, no calor e na simplicidade da cidade onde cresci. Atender em João Pessoa é retornar às minhas raízes e cuidar de um povo que carrega afeto, tranquilidade e força no olhar.",
    units: [
      {
        name: "UMAN Clinic",
        image: "/uman.webp",
        phones: ["(83) 96988-8802"],
        addressLink: "https://maps.app.goo.gl/Oo5fAMYjw7b1iFU87",
        gmbLink: "https://share.google/Oo5fAMYjw7b1iFU87",
        badge: "Clínica Especializada",
      },
    ],
  },
  campina_grande: {
    city: "Campina Grande",
    description:
      "No coração do Agreste paraibano, Campina Grande é referência em inovação, educação e saúde. É aqui que tradição e desenvolvimento caminham juntos, e onde o cuidado com a coluna exige responsabilidade, técnica e compromisso com as pessoas.",
    units: [
      {
        name: "Clínica Digest",
        image: "/digest.webp",
        phones: ["(83) 3342-9410"],
        addressLink: "",
        gmbLink: "",
        badge: "Centro de Excelência",
      },
      {
        name: "Centro Coluna Dor (CCD)",
        sub: "Bairro dos Ipês",
        image: "/ccd.jpg",
        phones: ["(83) 99819-3515"],
        addressLink: "",
        gmbLink: "https://maps.app.goo.gl/rjNRqsz9kPnCFHeJ6",
        badge: "Referência em Dor",
        customWppLink:
          "https://api.whatsapp.com/send?phone=558398193515&text=G%E2%80%8E%E2%80%8Eo%E2%80%8Estaria%20de%E2%80%8E%E2%80%8E%20%E2%80%8Eagendar%E2%80%8E%20%E2%80%8E%E2%80%8E%E2%80%8E%E2%80%8Econsu%E2%80%8E%E2%80%8E%E2%80%8E%E2%80%8El%E2%80%8Et%E2%80%8E%E2%80%8Ea%E2%80%8E%E2%80%8E%E2%80%8E%20e%E2%80%8Em%E2%80%8E%E2%80%8E%20J%E2%80%8Eo%C3%A3o%20Pes%E2%80%8Es%E2%80%8Eoa&utm_source=instagram&utm_medium=bio&utm_campaign=agendar-jp",
      },
    ],
  },
  goiana: {
    city: "Goiana",
    description:
      "Goiana representa a força e a tradição da Zona da Mata Norte. Atender no Memorial de Goiana é estar mais próximo de pacientes que buscavam um cuidado especializado sem precisar se deslocar até a capital. Levo para a região o mesmo compromisso com técnica, acolhimento e segurança que norteia todo o meu trabalho.",
    units: [
      {
        name: "Hospital Memorial de Goiana",
        image: "/memorial.webp",
        phones: ["(81) 99212-0218 (Ambulatório)", "(81) 3626-0877 (Marcação)"],
        addressLink: "",
        gmbLink: "",
        badge: "Atendimento Regional",
      },
    ],
  },
};

type CityKey = keyof typeof locationsData;

export function Locations() {
  const [activeCity, setActiveCity] = useState<CityKey>("recife");

  return (
    <section id="locais" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-[#2D4F6C] font-bold tracking-widest text-xs uppercase mb-3 block">
            Onde me encontrar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#05111A] font-serif mb-6">
            Locais de Atendimento
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Estruturas selecionadas para oferecer o máximo de conforto e
            tecnologia para o seu tratamento.
          </p>
        </div>

        {/* --- NAVEGAÇÃO DE CIDADES (TABS) --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {Object.entries(locationsData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveCity(key as CityKey)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCity === key
                  ? "bg-[#2D4F6C] text-white border-[#2D4F6C] shadow-lg scale-105"
                  : "bg-gray-50 text-gray-500 border-gray-200 hover:border-[#2D4F6C] hover:text-[#2D4F6C]"
              }`}
            >
              {data.city}
            </button>
          ))}
        </div>

        {/* --- CONTEÚDO DA CIDADE --- */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Texto Emocional da Cidade */}
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <div className="inline-block p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="text-[#152838] text-lg font-medium italic leading-relaxed">
                    &quot;{locationsData[activeCity].description}&quot;
                  </p>
                </div>
              </div>

              {/* Grid de Unidades */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                {locationsData[activeCity].units.map((unit, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(45,79,108,0.15)] transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Imagem do Local */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                      {/* Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#2D4F6C] shadow-sm">
                        {unit.badge}
                      </div>

                      {/* Placeholder Visual se não tiver imagem */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <MapPin className="w-12 h-12 opacity-20" />
                      </div>

                      {/* Imagem Real */}
                      <Image
                        src={unit.image}
                        alt={unit.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay Gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05111A]/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Informações */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#05111A] mb-1">
                        {unit.name}
                      </h3>
                      {unit.sub && (
                        <p className="text-[#2D4F6C] font-medium mb-4">
                          {unit.sub}
                        </p>
                      )}

                      <div className="space-y-4 mt-6">
                        {unit.phones.map((phone, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-gray-600 group-hover:text-[#2D4F6C] transition-colors"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#2D4F6C]">
                              <Phone className="w-4 h-4" />
                            </div>
                            <span className="font-medium">{phone}</span>
                          </div>
                        ))}
                      </div>

                      {/* Botões de Ação */}
                      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                        {/* Botão Ver no Mapa: Só aparece se gmbLink existir */}
                        {unit.gmbLink && (
                          <Button
                            asChild
                            className="flex-1 bg-[#2D4F6C] hover:bg-[#152838] text-white"
                          >
                            <Link href={unit.gmbLink} target="_blank">
                              <MapPin className="w-4 h-4 mr-2" />
                              Ver no Mapa
                            </Link>
                          </Button>
                        )}

                        {/* Botão WhatsApp: Usa o link customizado OU o padrão */}
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-[#2D4F6C]/20 text-[#2D4F6C] hover:bg-[#2D4F6C]/5"
                        >
                          <Link
                            href={
                              unit.customWppLink
                                ? unit.customWppLink
                                : `https://wa.me/5583996686436?text=Olá, gostaria de agendar no ${unit.name}`
                            }
                            target="_blank"
                          >
                            Agendar Aqui
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
