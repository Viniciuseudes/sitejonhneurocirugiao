import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";
// Importa o componente atualizado (que agora aceita props)
import { Videos } from "@/components/sections/Videos";
import { supabase } from "@/lib/supabase";

// Garante que a página sempre busque dados novos no build/request
export const revalidate = 0;

export default async function Home() {
  // 1. Buscar configurações (Imagens Hero/About)
  const { data: config } = await supabase.from("site_config").select("*");

  // 2. Buscar vídeos ordenados
  const { data: videos } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  // Definição das imagens com fallback
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
        {/* Passando as imagens dinâmicas */}
        <Hero imageUrl={heroImage} />

        <About imageUrl={aboutImage} />

        <Specialties />

        {/* Sugestão: Movi Videos para cima de Locations e Education para melhor fluxo, 
            mas você pode voltar para onde estava se preferir */}
        <Videos videos={videos || []} />

        <Locations />

        <Education />
      </main>

      <Footer />
    </div>
  );
}
