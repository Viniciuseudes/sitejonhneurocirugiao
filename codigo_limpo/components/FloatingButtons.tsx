"use client";

import { MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingButtons() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Botão Instagram */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-white shadow-lg hover:bg-gray-100 border-pink-500 text-pink-600 transition-transform hover:scale-110"
              asChild
            >
              <Link
                href="https://www.instagram.com/drjohn.neuro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Siga no Instagram</p>
          </TooltipContent>
        </Tooltip>

        {/* Botão WhatsApp */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#128C7E] text-white transition-transform hover:scale-110 animate-pulse-slow"
              asChild
            >
              <Link
                href="https://wa.me/5583996686436"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-8 w-8" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Fale conosco no WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
