"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  LogOut,
  Image as ImageIcon,
  Save,
  Upload,
  Crop as CropIcon,
} from "lucide-react";
import Image from "next/image";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/cropImage";

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingAbout, setUploadingAbout] = useState(false);

  // Login States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado das Imagens (URL do banco de dados)
  const [currentHeroUrl, setCurrentHeroUrl] = useState<string | null>(null);
  const [currentAboutUrl, setCurrentAboutUrl] = useState<string | null>(null);

  // Estado dos Arquivos JÁ CORTADOS (Prontos para salvar)
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [aboutFile, setAboutFile] = useState<File | null>(null);
  // URLs locais para preview dos arquivos cortados
  const [heroPreviewUrl, setHeroPreviewUrl] = useState<string | null>(null);
  const [aboutPreviewUrl, setAboutPreviewUrl] = useState<string | null>(null);

  // --- ESTADOS DO CROPPER (Corte) ---
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [cropType, setCropType] = useState<"hero" | "about">("hero");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const { toast } = useToast();

  // 1. Verificar Sessão
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchCurrentImages();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchCurrentImages();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchCurrentImages = async () => {
    const { data } = await supabase.from("site_config").select("*");
    if (data) {
      const hero = data.find((item) => item.key === "hero_image")?.image_url;
      const about = data.find((item) => item.key === "about_image")?.image_url;
      if (hero) setCurrentHeroUrl(hero);
      if (about) setCurrentAboutUrl(about);
    }
  };

  // 2. Login Logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingLogin(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: error.message,
      });
    } else {
      toast({ title: "Bem-vindo, Dr. John!" });
    }
    setLoadingLogin(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // 3. Inicializar o Corte
  const onSelectFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "hero" | "about"
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageToCrop(reader.result as string);
        setCropType(type);
        setZoom(1);
        setCrop({ x: 0, y: 0 });
        setIsCropOpen(true);
      });
      reader.readAsDataURL(file);
      // Resetar o input para permitir selecionar o mesmo arquivo novamente se quiser
      e.target.value = "";
    }
  };

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  // 4. Finalizar o Corte e Gerar Arquivo
  const handleCropConfirm = async () => {
    try {
      if (!imageToCrop || !croppedAreaPixels) return;

      const croppedImage = await getCroppedImg(imageToCrop, croppedAreaPixels);
      if (!croppedImage) return;

      const previewUrl = URL.createObjectURL(croppedImage);

      if (cropType === "hero") {
        setHeroFile(croppedImage);
        setHeroPreviewUrl(previewUrl);
      } else {
        setAboutFile(croppedImage);
        setAboutPreviewUrl(previewUrl);
      }

      setIsCropOpen(false);
      setImageToCrop(null);
    } catch (e) {
      console.error(e);
      toast({ variant: "destructive", title: "Erro ao cortar imagem" });
    }
  };

  // 5. Salvar no Supabase
  const handleSaveImage = async (
    file: File | null,
    key: "hero_image" | "about_image",
    setLoading: (v: boolean) => void
  ) => {
    if (!file) return;

    try {
      setLoading(true);
      const fileExt = "jpg"; // O cropper sempre gera jpeg
      const fileName = `${key}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("site-assets")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("site-assets").getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from("site_config")
        .upsert({ key, image_url: publicUrl }, { onConflict: "key" });

      if (dbError) throw dbError;

      toast({
        title: "Imagem salva com sucesso!",
        className: "bg-green-500 text-white",
      });

      // Limpar
      if (key === "hero_image") {
        setHeroFile(null);
        setHeroPreviewUrl(null);
        setCurrentHeroUrl(publicUrl);
      } else {
        setAboutFile(null);
        setAboutPreviewUrl(null);
        setCurrentAboutUrl(publicUrl);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Área Restrita</CardTitle>
            <CardDescription className="text-center">
              Login exclusivo para administração
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0e2432] hover:bg-[#1a3a4f]"
                disabled={loadingLogin}
              >
                {loadingLogin ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Acessar Painel"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
          <div>
            <h1 className="text-2xl font-bold text-[#0e2432]">
              Gerenciar Imagens
            </h1>
            <p className="text-sm text-gray-500">
              Recorte e atualize as fotos do site.
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* --- HERO CARD --- */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Capa Principal (Hero)</CardTitle>
              <CardDescription>Formato Widescreen (16:9)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-200 group">
                {heroPreviewUrl || currentHeroUrl ? (
                  <Image
                    src={heroPreviewUrl || currentHeroUrl!}
                    alt="Preview Hero"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <span className="text-sm">Vazio</span>
                  </div>
                )}
                {heroPreviewUrl && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                      Recortado (Não salvo)
                    </span>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="hero-upload" className="cursor-pointer block">
                  <div className="flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-gray-50 transition-colors bg-white">
                    <CropIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      Escolher e Recortar Nova Foto
                    </span>
                  </div>
                  <Input
                    id="hero-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onSelectFile(e, "hero")}
                  />
                </Label>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50/50 border-t pt-6">
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={() =>
                  handleSaveImage(heroFile, "hero_image", setUploadingHero)
                }
                disabled={!heroFile || uploadingHero}
              >
                {uploadingHero ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Confirmar e Salvar
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* --- ABOUT CARD --- */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Foto "Sobre Mim"</CardTitle>
              <CardDescription>Formato Quadrado (1:1)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="relative aspect-square max-w-[300px] mx-auto bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-200">
                {aboutPreviewUrl || currentAboutUrl ? (
                  <Image
                    src={aboutPreviewUrl || currentAboutUrl!}
                    alt="Preview About"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <span className="text-sm">Vazio</span>
                  </div>
                )}
                {aboutPreviewUrl && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                      Recortado (Não salvo)
                    </span>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="about-upload" className="cursor-pointer block">
                  <div className="flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-gray-50 transition-colors bg-white">
                    <CropIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      Escolher e Recortar Nova Foto
                    </span>
                  </div>
                  <Input
                    id="about-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onSelectFile(e, "about")}
                  />
                </Label>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50/50 border-t pt-6">
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700"
                onClick={() =>
                  handleSaveImage(aboutFile, "about_image", setUploadingAbout)
                }
                disabled={!aboutFile || uploadingAbout}
              >
                {uploadingAbout ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Confirmar e Salvar
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* --- MODAL DE CORTE --- */}
      <Dialog open={isCropOpen} onOpenChange={setIsCropOpen}>
        <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Ajustar Imagem</DialogTitle>
            <DialogDescription>
              Arraste e use o zoom para definir o corte exato.
            </DialogDescription>
          </DialogHeader>

          <div className="relative flex-1 bg-black w-full min-h-[300px] overflow-hidden rounded-md">
            {imageToCrop && (
              <Cropper
                image={imageToCrop}
                crop={crop}
                zoom={zoom}
                aspect={cropType === "hero" ? 16 / 9 : 1 / 1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            )}
          </div>

          <div className="py-4 space-y-2">
            <Label>Zoom</Label>
            <Slider
              value={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={(v) => setZoom(v[0])}
            />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCropOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleCropConfirm}>Concluir Corte</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
