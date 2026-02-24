"use client";

import { useState, useEffect, useCallback } from "react";
import { LANDING_PAGES } from "@/lib/constants";
import Popup from "../ui/Popup";

export default function GroupSignupPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem("group-popup-shown")) return;
    if (!sessionStorage.getItem("coupon-popup-shown")) return;
    setIsOpen(true);
    sessionStorage.setItem("group-popup-shown", "true");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      showPopup();
    }, 60000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showPopup]);

  return (
    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} className="overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-accent p-6 pb-4 text-white text-center">
        <div className="text-4xl mb-2">🚀</div>
        <h3 className="text-2xl font-bold mb-1">Não vá embora sem aproveitar!</h3>
        <p className="text-white/90 text-sm">
          Ofertas exclusivas com até 50% de desconto
        </p>
      </div>

      <div className="bg-white p-6 space-y-3">
        <a
          href={LANDING_PAGES.edredons}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="block w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-red-500 hover:opacity-90 transition-opacity text-base shadow-lg text-center"
        >
          3 Edredons por R$99,90
        </a>
        <a
          href={LANDING_PAGES.tenis}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="block w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base shadow-lg text-center"
        >
          3 Pares de Tênis por R$109,90
        </a>
        <a
          href="#ofertas"
          onClick={() => setIsOpen(false)}
          className="block w-full py-3 rounded-xl font-semibold text-accent border-2 border-accent/20 hover:bg-accent/5 transition-colors text-center text-sm"
        >
          Ver todas as ofertas
        </a>

        <p className="text-center text-xs text-gray-400 mt-1">
          Ofertas por tempo limitado. Coleta e entrega grátis.
        </p>
      </div>
    </Popup>
  );
}
