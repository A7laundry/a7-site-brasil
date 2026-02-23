"use client";

import { useState, useEffect, useCallback } from "react";
import { COMPANY, COUPON_DATA } from "@/lib/constants";
import Popup from "../ui/Popup";

export default function GroupSignupPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem("group-popup-shown")) return;
    if (!sessionStorage.getItem("coupon-popup-shown")) return;
    setIsOpen(true);
    sessionStorage.setItem("group-popup-shown", "true");
  }, []);

  useEffect(() => {
    // Timer: 60s
    const timer = setTimeout(() => {
      showPopup();
    }, 60000);

    // Exit intent
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `${COUPON_DATA.whatsappGroupMessage}\n\nWhatsApp: ${whatsapp}`;
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} className="overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-accent p-6 pb-4 text-white text-center">
        <div className="text-4xl mb-2">🚀</div>
        <h3 className="text-2xl font-bold mb-1">Não vá embora sem seus cupons!</h3>
        <p className="text-white/90 text-sm">
          Desconto de até 50% no grupo VIP do WhatsApp
        </p>
      </div>

      <div className="bg-white p-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="tel"
            placeholder="Seu WhatsApp"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base shadow-lg"
          >
            Entrar no Grupo VIP
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-3">
          100% gratuito. Saia quando quiser.
        </p>
      </div>
    </Popup>
  );
}
