"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Stethoscope, Activity, Heart, Phone, MapPin, MessageCircle, Instagram } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen">
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/558132421234"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>

      {/* Floating Instagram Button */}
      <motion.a
        href="https://instagram.com/drjohnrocha"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram className="w-7 h-7 text-white" />
      </motion.a>

      {/* Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif text-xl font-bold text-[#0e2432]">Dr. John Rocha</div>
            <div className="hidden md:flex gap-8">
              <a href="#sobre" className="text-gray-700 hover:text-[#0e2432] transition-colors">
                Sobre
              </a>
              <a href="#especialidades" className="text-gray-700 hover:text-[#0e2432] transition-colors">
                Especialidades
              </a>
              <a href="#locais" className="text-gray-700 hover:text-[#0e2432] transition-colors">
                Locais
              </a>
              <a href="#contato" className="text-gray-700 hover:text-[#0e2432] transition-colors">
                Contato
              </a>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-[#0e2432] hover:bg-[#1a3a4f] text-white">
                <Link href="https://wa.me/558132421234" target="_blank">
                  Agendar Consulta
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0e2432] to-[#1a4056] overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-teal-500/20 rounded-full mb-6 backdrop-blur-sm border border-teal-500/30"
              >
                <span className="text-teal-300 text-sm font-semibold">Neurocirurgião Especialista</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
                Excelência, precisão e cuidado em neurocirurgia.
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-pretty">
                Dr. John Rocha é neurocirurgião especializado em coluna, crânio e dor. Devolvendo movimento e qualidade
                de vida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
                    <Link href="https://wa.me/558132421234" target="_blank">
                      Agendar Consulta
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

            {/* Doctor Photo with Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Animated ring around photo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 via-amber-500 to-teal-500 blur-2xl opacity-30"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Pulsing accent circles */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-500 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              />

              {/* Main photo container with parallax effect */}
              <motion.div
                className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-amber-500/20 z-10" />

                {/* Animated photo */}
                <motion.img
                  src="/professional-neurosurgeon-portrait.jpg"
                  alt="Dr. John Rocha"
                  className="w-full h-full object-cover"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                  animate={{
                    opacity: [0, 0.15, 0],
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                />
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute top-10 right-0 w-20 h-20 border-2 border-teal-400/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-20 left-0 w-16 h-16 border-2 border-amber-400/30 rounded-full"
                animate={{
                  y: [0, 20, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section
        id="especialidades"
        className="py-24 bg-gradient-to-b from-[#1e4a64] to-[#2a5c78] relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Por que escolher a cirurgia endoscópica da coluna?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto text-pretty">
              Veja os principais benefícios desse tratamento moderno e eficaz:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Spine Visualization Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#1a3a4f]/50 to-[#0e2432]/50 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Animated spine visualization */}
                <motion.img
                  src="/3d-medical-spine-column-anatomy-vertebrae-glowing-.jpg"
                  alt="Coluna vertebral 3D"
                  className="w-full h-full object-contain p-8"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* Glowing points on spine */}
                <motion.div
                  className="absolute top-1/4 left-1/2 w-4 h-4 bg-teal-400 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-teal-400 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-2/3 left-1/2 w-4 h-4 bg-teal-400 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  icon: "🏃",
                  title: "Recuperação mais rápida",
                  description: "Alta no mesmo dia, com retorno precoce às atividades do dia a dia.",
                },
                {
                  icon: "💚",
                  title: "Menos dor pós-operatória",
                  description: "Procedimento minimamente invasivo reduz o trauma e o desconforto.",
                },
                {
                  icon: "🎯",
                  title: "Segurança e precisão",
                  description: "Visualização direta da lesão com mínima manipulação dos tecidos.",
                },
                {
                  icon: "✨",
                  title: "Estética e conforto",
                  description: "Incisões pequenas, sem pontos visíveis e cicatriz mais discreta.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Specialties Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="mt-20"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
              Outras Especialidades de Alta Complexidade
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Cirurgia da Coluna por Vídeo",
                  description: "Procedimentos minimamente invasivos com recuperação mais rápida",
                  color: "from-teal-500 to-cyan-600",
                },
                {
                  icon: Stethoscope,
                  title: "Endoscopia de Coluna",
                  description: "Técnica avançada com menor trauma cirúrgico",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Brain,
                  title: "Neurocirurgia Craniana",
                  description: "Cirurgias de alta complexidade do sistema nervoso central",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  icon: Heart,
                  title: "Tratamento da Dor",
                  description: "Abordagens modernas para alívio e qualidade de vida",
                  color: "from-amber-500 to-orange-600",
                },
              ].map((specialty, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                >
                  <Card className="p-6 h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <specialty.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{specialty.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{specialty.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
              <div className="aspect-square bg-gradient-to-br from-[#0e2432] to-teal-800 rounded-2xl overflow-hidden">
                <img
                  src="/professional-neurosurgeon-portrait.jpg"
                  alt="Dr. John Rocha"
                  className="w-full h-full object-cover"
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
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Desde cedo, a medicina despertou em mim algo especial. Ainda criança, lembro de observar médicos
                  saindo do hospital e sentir admiração por aqueles que dedicavam suas vidas ao cuidado dos outros.
                </p>
                <p>
                  A escolha pela neurocirurgia veio naturalmente — é uma especialidade que une ciência de ponta,
                  habilidade técnica e a oportunidade de transformar vidas de forma profunda.
                </p>
                <p className="text-xl font-semibold text-teal-700 py-4">"Técnica e humanidade caminham juntas."</p>
                <p>
                  Hoje, como neurocirurgião, carrego o propósito de unir ciência, técnica e empatia. Cada paciente é
                  único, e meu compromisso é oferecer não apenas tratamento, mas acolhimento e esperança.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#0e2432] mb-4 text-balance">Locais de Atendimento</h2>
            <p className="text-lg text-gray-600">Consultas em Recife, João Pessoa e Campina Grande</p>
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
                  <h3 className="text-2xl font-bold text-[#0e2432]">Recife (PE)</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432] mb-1">Max Day</h4>
                    <p className="text-sm text-gray-600 mb-2">Shopping RioMar</p>
                    <a href="tel:+558120114050" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
                      <Phone className="w-4 h-4" />
                      <span>(81) 2011-4050</span>
                    </a>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432] mb-2">Hospital Jayme da Fonte</h4>
                    <a href="tel:+558192168890" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
                      <Phone className="w-4 h-4" />
                      <span>(81) 9216-8890</span>
                    </a>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432]">Hospital Memorial de Goiana</h4>
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
                  <h3 className="text-2xl font-bold text-[#0e2432]">João Pessoa (PB)</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432] mb-2">UMAN Clinic</h4>
                    <a href="tel:+558396988802" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
                      <Phone className="w-4 h-4" />
                      <span>(83) 96988-8802</span>
                    </a>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432] mb-2">Grupo Neves (HNSN)</h4>
                    <a href="tel:+558335659000" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
                      <Phone className="w-4 h-4" />
                      <span>(83) 3565-9000</span>
                    </a>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432] mb-2">Centro Coluna Dor (CCD)</h4>
                    <a href="tel:+558399819515" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
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
                  <h3 className="text-2xl font-bold text-[#0e2432]">Campina Grande (PB)</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-[#0e2432] mb-2">Clínica Digest</h4>
                    <a href="tel:+558333429410" className="flex items-center gap-2 text-gray-700 hover:text-teal-600">
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

      {/* Education Section */}
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
              <p className="text-gray-700">Membro Titular da Sociedade Brasileira de Neurocirurgia (SBN)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#0e2432] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="font-serif text-2xl font-bold mb-2">Dr. John Rocha</div>
              <p className="text-gray-400">Neurocirurgia com excelência e humanidade</p>
            </div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Dr. John Rocha. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
