import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";
import { Videos } from "@/components/sections/Videos";
import { supabase } from "@/lib/supabase";

// MUDANÇA CRÍTICA DE PERFORMANCE:
// Revalida a cada 1 hora (3600 segundos). O site fica instantâneo (estático)
// e se atualiza periodicamente.
export const revalidate = 3600;

export default async function Home() {
  const { data: config } = await supabase.from("site_config").select("*");

  const { data: videos } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  const heroImage =
    config?.find((item) => item.key === "hero_image")?.image_url || "/url.jpg";

  const aboutImage =
    config?.find((item) => item.key === "about_image")?.image_url || "/url.jpg";

  return (
    <div className="min-h-screen">
      <FloatingButtons />
      <Navbar />
      <main>
        <Hero imageUrl={heroImage} />
        <About imageUrl={aboutImage} />
        <Specialties />
        <Videos videos={videos || []} />
        <Locations />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
