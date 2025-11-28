"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Education() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-teal-600 font-bold text-lg">Formação</div>
            <p className="text-gray-700">Graduação UFPB</p>
          </div>
          <div className="space-y-2">
            <div className="text-teal-600 font-bold text-lg">Residência</div>
            <p className="text-gray-700">Hospital da Restauração (PE)</p>
          </div>
          <div className="space-y-2">
            <div className="text-teal-600 font-bold text-lg">Certificação</div>
            <p className="text-gray-700">
              Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
