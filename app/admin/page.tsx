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
  Crop as CropIcon,
  Video, // Import Novo
  Plus, // Import Novo
  Trash2, // Import Novo
  ExternalLink, // Import Novo
} from "lucide-react";
import Image from "next/image";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/cropImage";

// Função auxiliar para pegar ID do Youtube
const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // IMAGENS
  const [uploadingHero, setUploadingHero] = useState(false);
  const [uploadingAbout, setUploadingAbout] = useState(false);
  const [currentHeroUrl, setCurrentHeroUrl] = useState<string | null>(null);
  const [currentAboutUrl, setCurrentAboutUrl] = useState<string | null>(null);

  // VÍDEOS (Novos Estados)
  const [videos, setVideos] = useState<any[]>([]);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [addingVideo, setAddingVideo] = useState(false);

  // CROP
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [aboutFile, setAboutFile] = useState<File | null>(null);
  const [heroPreviewUrl, setHeroPreviewUrl] = useState<string | null>(null);
  const [aboutPreviewUrl, setAboutPreviewUrl] = useState<string | null>(null);
  const [isCropOpen, setIsCropOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [cropType, setCropType] = useState<"hero" | "about">("hero");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchCurrentImages();
        fetchVideos(); // Buscar vídeos ao carregar
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchCurrentImages();
        fetchVideos(); // Buscar vídeos ao logar
      }
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

  // Buscar Vídeos
  const fetchVideos = async () => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setVideos(data);
  };

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

  // --- LÓGICA DE VÍDEOS ---
  const handleAddVideo = async () => {
    if (!newVideoUrl) {
      toast({
        variant: "destructive",
        title: "Link vazio",
        description: "Cole o link do YouTube.",
      });
      return;
    }

    const youtubeId = getYoutubeId(newVideoUrl);
    if (!youtubeId) {
      toast({
        variant: "destructive",
        title: "Link inválido",
        description: "Não conseguimos identificar o ID do vídeo.",
      });
      return;
    }

    setAddingVideo(true);
    const { error } = await supabase.from("videos").insert({
      youtube_id: youtubeId,
      title: newVideoTitle || "Novo Vídeo",
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao adicionar",
        description: error.message,
      });
    } else {
      toast({
        title: "Vídeo adicionado com sucesso!",
        className: "bg-green-500 text-white",
      });
      setNewVideoUrl("");
      setNewVideoTitle("");
      fetchVideos();
    }
    setAddingVideo(false);
  };

  const handleDeleteVideo = async (id: number) => {
    const { error } = await supabase.from("videos").delete().eq("id", id);
    if (error) {
      toast({ variant: "destructive", title: "Erro ao deletar" });
    } else {
      toast({ title: "Vídeo removido" });
      fetchVideos();
    }
  };

  // --- LÓGICA DE CROP E IMAGENS ---
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
      e.target.value = "";
    }
  };

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

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

  const handleSaveImage = async (
    file: File | null,
    key: "hero_image" | "about_image",
    setLoading: (v: boolean) => void
  ) => {
    if (!file) return;
    try {
      setLoading(true);
      const fileExt = "jpg";
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
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
          <div>
            <h1 className="text-2xl font-bold text-[#0e2432]">
              Painel Administrativo
            </h1>
            <p className="text-sm text-gray-500">
              Gerencie imagens e vídeos do site.
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

        {/* --- SEÇÃO DE VÍDEOS (NOVA) --- */}
        <Card>
          <CardHeader className="bg-[#0e2432] text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Video className="w-5 h-5 text-teal-400" /> Galeria de Conteúdos
              (Shorts/Vídeos)
            </CardTitle>
            <CardDescription className="text-gray-300">
              Adicione vídeos do YouTube. Eles aparecerão na seção "Conteúdos".
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
              <div className="flex-1 w-full space-y-2">
                <Label>Título do Vídeo (Opcional)</Label>
                <Input
                  placeholder="Ex: Dica sobre Dor Lombar"
                  value={newVideoTitle}
                  onChange={(e) => setNewVideoTitle(e.target.value)}
                />
              </div>
              <div className="flex-1 w-full space-y-2">
                <Label>Link do YouTube (Url Completa ou Short)</Label>
                <Input
                  placeholder="Ex: https://youtube.com/shorts/..."
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                />
              </div>
              <Button
                onClick={handleAddVideo}
                disabled={addingVideo}
                className="bg-teal-600 hover:bg-teal-700 text-white min-w-[120px]"
              >
                {addingVideo ? (
                  <Loader2 className="animate-spin w-4 h-4" />
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" /> Adicionar
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative group border rounded-lg overflow-hidden bg-gray-100"
                >
                  <div className="aspect-[9/16] relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                      alt="Thumb"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <a
                        href={`https://youtu.be/${video.youtube_id}`}
                        target="_blank"
                        className="p-2 bg-white rounded-full hover:bg-gray-200"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-800" />
                      </a>
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        className="p-2 bg-red-500 rounded-full hover:bg-red-600"
                      >
                        <Trash2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="p-2 text-xs font-medium truncate bg-white">
                    {video.title || "Sem título"}
                  </div>
                </div>
              ))}
              {videos.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-400">
                  Nenhum vídeo adicionado ainda.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* --- SEÇÃO DE IMAGENS --- */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Capa Principal (Hero)</CardTitle>
              <CardDescription>Widescreen (16:9)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-200 group">
                {heroPreviewUrl || currentHeroUrl ? (
                  <Image
                    src={heroPreviewUrl || currentHeroUrl!}
                    alt="Preview"
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
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Recortado (Não salvo)
                    </span>
                  </div>
                )}
              </div>
              <Label htmlFor="hero-upload" className="cursor-pointer block">
                <div className="flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-gray-50 bg-white">
                  <CropIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600 font-medium">
                    Recortar Nova Foto
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
                  "Salvando..."
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Salvar Alterações
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Foto "Sobre Mim"</CardTitle>
              <CardDescription>Quadrado (1:1)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="relative aspect-square max-w-[300px] mx-auto bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-200">
                {aboutPreviewUrl || currentAboutUrl ? (
                  <Image
                    src={aboutPreviewUrl || currentAboutUrl!}
                    alt="Preview"
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
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Recortado (Não salvo)
                    </span>
                  </div>
                )}
              </div>
              <Label htmlFor="about-upload" className="cursor-pointer block">
                <div className="flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-gray-50 bg-white">
                  <CropIcon className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600 font-medium">
                    Recortar Nova Foto
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
                  "Salvando..."
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Salvar Alterações
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Dialog open={isCropOpen} onOpenChange={setIsCropOpen}>
        <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Ajustar Imagem</DialogTitle>
            <DialogDescription>Zoom e arraste.</DialogDescription>
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
