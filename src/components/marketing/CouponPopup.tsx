"use client";

import { useState, useEffect } from "react";
import { COMPANY, COUPON_DATA } from "@/lib/constants";
import Popup from "../ui/Popup";

export default function CouponPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("coupon-popup-shown")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("coupon-popup-shown", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `${COUPON_DATA.whatsappGroupMessage}\n\nNome: ${name}\nWhatsApp: ${whatsapp}`;
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} className="overflow-hidden">
      <div className="gradient-warm p-6 pb-4 text-white text-center">
        <div className="text-4xl mb-2">🎟️</div>
        <h3 className="text-2xl font-bold mb-1">Cupons Exclusivos!</h3>
        <p className="text-white/90 text-sm">
          Entre no grupo VIP e receba ofertas toda semana
        </p>
      </div>

      <div className="bg-white p-6">
        {/* Last coupons */}
        <div className="mb-5 bg-amber-50 rounded-xl p-3 border border-amber-100">
          <p className="text-xs font-semibold text-amber-700 mb-2 uppercase tracking-wide">
            Últimos cupons do grupo:
          </p>
          <div className="space-y-1.5">
            {COUPON_DATA.coupons.map((coupon) => (
              <div key={coupon.item} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{coupon.item}</span>
                <span className="text-sm font-bold text-red-600">{coupon.price}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
          />
          <input
            type="tel"
            placeholder="Seu WhatsApp"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-white gradient-warm hover:opacity-90 transition-opacity text-base shadow-lg"
          >
            Quero Meus Cupons!
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-3">
          Já são mais de <strong className="text-gray-600">{COUPON_DATA.groupSize}</strong> pessoas no grupo
        </p>
      </div>
    </Popup>
  );
}
