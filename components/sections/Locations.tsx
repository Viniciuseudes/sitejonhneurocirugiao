"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Map } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Dados organizados para facilitar a manutenção
const locations = [
  {
    city: "Recife (PE)",
    places: [
      {
        name: "Max Day",
        detail: "Shopping RioMar",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.114199377195!2d-34.89792442547109!3d-8.085286380838454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f86db0466b1%3A0x85ccff52477099c0!2sMax%20Day%20Hospital!5e1!3m2!1spt-BR!2sbr!4v1764295944533!5m2!1spt-BR!2sbr",
      },
      {
        name: "Hospital Jayme da Fonte",
        detail: "Espinheiro",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4117606667273!2d-34.90501962434403!3d-8.05144855971122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e6b04d0d25%3A0x73c741193c4f4998!2sHospital%20Jayme%20da%20Fonte!5e1!3m2!1spt-BR!2sbr!4v1764295991967!5m2!1spt-BR!2sbr",
      },
      {
        name: "Hospital Memorial de Goiana",
        detail: "Goiana - PE",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.553976986307!2d-35.01199712547914!3d-7.564808874709949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab62e546964bdd%3A0x92e552114b4e8269!2sMemorial%20Hospital%20de%20Goiana!5e1!3m2!1spt-BR!2sbr!4v1764296054781!5m2!1spt-BR!2sbr",
      },
    ],
  },
  {
    city: "João Pessoa (PB)",
    places: [
      {
        name: "UMAN Clinic",
        detail: "Manaíra",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.2941197748437!2d-34.84024212548631!3d-7.096972969577902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd4e6579e279%3A0x6419fb5c99578368!2sUman%20Clinic!5e1!3m2!1spt-BR!2sbr!4v1764296107266!5m2!1spt-BR!2sbr",
      },
      {
        name: "Grupo Neves (HNSN)",
        detail: "Torre",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0155376877124!2d-34.86161632548582!3d-7.132871369959058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc2a627b64539%3A0xfe91c4f803ab27a2!2sUnidade%20Hospitalar%20-%20HNSN!5e1!3m2!1spt-BR!2sbr!4v1764296150414!5m2!1spt-BR!2sbr",
      },
      {
        name: "Centro Coluna Dor (CCD)",
        detail: "Empresarial Eco Medical",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.242435727845!2d-34.86151152548628!3d-7.103646669648612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd08d4de3d81%3A0xa253abc1da5b573f!2sCentro%20Coluna%20Dor%20-%20CCD%20-%20Tratamento%20de%20Dor%20na%20Coluna!5e1!3m2!1spt-BR!2sbr!4v1764296235097!5m2!1spt-BR!2sbr",
      },
    ],
  },
  {
    city: "Campina Grande (PB)",
    places: [
      {
        name: "Clínica Digest",
        detail: "Prata",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3195784057525!2d-35.90053102548435!3d-7.2217777709120865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1fc3a510db25%3A0x8d45f00a9f6f9209!2sDIGEST%20CG!5e1!3m2!1spt-BR!2sbr!4v1764296269549!5m2!1spt-BR!2sbr",
      },
    ],
  },
];

export function Locations() {
  return (
    <section id="locais" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-teal-50 rounded-full mb-4 border border-teal-100">
            <span className="text-teal-600 text-sm font-semibold tracking-wide uppercase">
              Onde encontrar
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e2432] mb-4 text-balance font-serif">
            Locais de Atendimento
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Estrutura completa e moderna para o seu tratamento em três grandes
            centros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="p-8 h-full border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0e2432]">
                    {location.city}
                  </h3>
                </div>

                <div className="space-y-6">
                  {location.places.map((place, placeIndex) => (
                    <div
                      key={placeIndex}
                      className="flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="font-semibold text-[#0e2432] text-base group-hover:text-teal-700 transition-colors">
                          {place.name}
                        </h4>
                        {place.detail && (
                          <p className="text-sm text-gray-400 mt-0.5">
                            {place.detail}
                          </p>
                        )}
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-full bg-gray-50 text-gray-400 hover:text-teal-600 hover:bg-teal-50 transition-all shrink-0"
                            title="Ver localização no mapa"
                          >
                            <Map className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
                          <DialogHeader className="px-6 pt-6 pb-2">
                            <DialogTitle className="text-[#0e2432]">
                              {place.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="aspect-square w-full bg-gray-100 relative">
                            <iframe
                              src={place.mapSrc}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="absolute inset-0"
                            />
                          </div>
                          <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
                            Dr. John Rocha • Neurocirurgia
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
