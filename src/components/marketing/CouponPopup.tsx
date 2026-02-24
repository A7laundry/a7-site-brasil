"use client";

import { useState, useEffect } from "react";
import { LANDING_PAGES, COUPON_DATA } from "@/lib/constants";
import Popup from "../ui/Popup";

export default function CouponPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("coupon-popup-shown")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("coupon-popup-shown", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} className="overflow-hidden">
      <div className="gradient-warm p-6 pb-4 text-white text-center">
        <div className="text-4xl mb-2">🔥</div>
        <h3 className="text-2xl font-bold mb-1">Ofertas Imperdíveis!</h3>
        <p className="text-white/90 text-sm">
          Ofertas exclusivas com coleta e entrega grátis
        </p>
      </div>

      <div className="bg-white p-6">
        {/* Featured offers */}
        <div className="space-y-3 mb-5">
          <a
            href={LANDING_PAGES.edredons}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl border border-amber-100 bg-amber-50 hover:bg-amber-100 transition-colors group"
          >
            <div>
              <span className="text-sm font-semibold text-gray-800 block">3 Edredons Higienizados</span>
              <span className="text-xs text-gray-500">Leve 3, pague 2 — Coleta grátis</span>
            </div>
            <div className="text-right shrink-0 ml-3">
              <span className="text-xs text-gray-400 line-through block">R$149,85</span>
              <span className="text-lg font-bold text-red-600">R$99,90</span>
            </div>
          </a>

          <a
            href={LANDING_PAGES.tenis}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors group"
          >
            <div>
              <span className="text-sm font-semibold text-gray-800 block">3 Pares de Tênis</span>
              <span className="text-xs text-gray-500">Limpeza 100% manual profissional</span>
            </div>
            <div className="text-right shrink-0 ml-3">
              <span className="text-xs text-gray-400 line-through block">R$150,00</span>
              <span className="text-lg font-bold text-red-600">R$109,90</span>
            </div>
          </a>

          <a
            href={LANDING_PAGES.estofados}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl border border-green-100 bg-green-50 hover:bg-green-100 transition-colors group"
          >
            <div>
              <span className="text-sm font-semibold text-gray-800 block">Sofá + Impermeabilização</span>
              <span className="text-xs text-gray-500">20% OFF esta semana</span>
            </div>
            <div className="text-right shrink-0 ml-3">
              <span className="text-lg font-bold text-green-700">A partir de R$149</span>
            </div>
          </a>
        </div>

        <a
          href="#ofertas"
          onClick={() => setIsOpen(false)}
          className="block w-full py-3.5 rounded-xl font-bold text-white gradient-warm hover:opacity-90 transition-opacity text-base shadow-lg text-center"
        >
          Ver Todas as Ofertas
        </a>

        <p className="text-center text-xs text-gray-400 mt-3">
          Já são mais de <strong className="text-gray-600">{COUPON_DATA.groupSize}</strong> clientes atendidos
        </p>
      </div>
    </Popup>
  );
}
