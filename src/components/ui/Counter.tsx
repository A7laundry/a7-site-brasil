"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface CounterProps {
  end: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  end,
  suffix = "",
  duration = 2000,
  className = "",
}: CounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const endNum = parseFloat(end.replace(",", "."));
    const hasComma = end.includes(",");
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * endNum;

      if (hasComma) {
        setCount(current.toFixed(1).replace(".", ","));
      } else {
        setCount(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
