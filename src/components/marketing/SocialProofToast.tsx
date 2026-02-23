"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_PROOF_NOTIFICATIONS } from "@/lib/constants";

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [visible, setVisible] = useState(false);

  const showNextNotification = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_NOTIFICATIONS.length);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  useEffect(() => {
    // First notification after 15s
    const initialTimer = setTimeout(() => {
      showNextNotification();
    }, 15000);

    return () => clearTimeout(initialTimer);
  }, [showNextNotification]);

  useEffect(() => {
    if (currentIndex < 0) return;

    // Schedule next notification 20-40s after current one hides
    const nextTimer = setTimeout(() => {
      showNextNotification();
    }, 20000 + Math.random() * 20000);

    return () => clearTimeout(nextTimer);
  }, [currentIndex, showNextNotification]);

  const notification =
    currentIndex >= 0 ? SOCIAL_PROOF_NOTIFICATIONS[currentIndex] : null;

  return (
    <AnimatePresence>
      {visible && notification && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-24 left-4 z-50 max-w-xs"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-start gap-3">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                {notification.name[0]}
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800">
                <strong>{notification.name}</strong> de {notification.city}{" "}
                {notification.action}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Agora mesmo</p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
