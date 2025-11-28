import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";
import { supabase } from "@/lib/supabase";

// ALTERAÇÃO AQUI: Mudamos de 60 para 0.
// Isso diz ao Next.js para NÃO fazer cache e buscar a imagem nova a cada visita.
export const revalidate = 0;

export default async function Home() {
  // Buscar imagens do Supabase
  const { data: config } = await supabase.from("site_config").select("*");

  // Lógica para extrair as URLs ou usar o padrão se não encontrar
  const heroImage =
    config?.find((item) => item.key === "hero_image")?.image_url ||
    "/professional-neurosurgeon-portrait.jpg";

  const aboutImage =
    config?.find((item) => item.key === "about_image")?.image_url ||
    "/professional-neurosurgeon-portrait.jpg";

  return (
    <div className="min-h-screen">
      <FloatingButtons />
      <Navbar />

      <main>
        {/* Passamos as URLs dinâmicas como props para os componentes */}
        <Hero imageUrl={heroImage} />
        <About imageUrl={aboutImage} />
        <Specialties />
        <Locations />
        <Education />
      </main>

      <Footer />
    </div>
  );
}
