"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Locations() {
  return (
    <section id="locais" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e2432] mb-4 text-balance">
            Locais de Atendimento
          </h2>
          <p className="text-lg text-gray-600">
            Consultas em Recife, João Pessoa e Campina Grande
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recife */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <Card className="p-8 h-full border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-[#0e2432]">
                  Recife (PE)
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432] mb-1">Max Day</h4>
                  <p className="text-sm text-gray-600 mb-2">Shopping RioMar</p>
                  <a
                    href="tel:+558120114050"
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(81) 2011-4050</span>
                  </a>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432] mb-2">
                    Hospital Jayme da Fonte
                  </h4>
                  <a
                    href="tel:+558192168890"
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(81) 9216-8890</span>
                  </a>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432]">
                    Hospital Memorial de Goiana
                  </h4>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* João Pessoa */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeInUp}
          >
            <Card className="p-8 h-full border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-[#0e2432]">
                  João Pessoa (PB)
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432] mb-2">
                    UMAN Clinic
                  </h4>
                  <a
                    href="tel:+558396988802"
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(83) 96988-8802</span>
                  </a>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432] mb-2">
                    Grupo Neves (HNSN)
                  </h4>
                  <a
                    href="tel:+558335659000"
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(83) 3565-9000</span>
                  </a>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432] mb-2">
                    Centro Coluna Dor (CCD)
                  </h4>
                  <a
                    href="tel:+558399819515"
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(83) 99819-3515</span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Campina Grande */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="p-8 h-full border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-[#0e2432]">
                  Campina Grande (PB)
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-semibold text-[#0e2432] mb-2">
                    Clínica Digest
                  </h4>
                  <a
                    href="tel:+558333429410"
                    className="flex items-center gap-2 text-gray-700 hover:text-teal-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(83) 3342-9410</span>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
