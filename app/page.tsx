import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";
// 1. IMPORTAR A SEÇÃO DE VÍDEOS
import { Videos } from "@/components/sections/Videos";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function Home() {
  // Buscar imagens
  const { data: config } = await supabase.from("site_config").select("*");

  // 2. BUSCAR OS VÍDEOS NO BANCO
  const { data: videos } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

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
        <Hero imageUrl={heroImage} />
        <About imageUrl={aboutImage} />
        <Specialties />
        <Locations />

        {/* 3. EXIBIR A SEÇÃO DE VÍDEOS (Passando os dados) */}
        <Videos videos={videos || []} />

        <Education />
      </main>

      <Footer />
    </div>
  );
}
