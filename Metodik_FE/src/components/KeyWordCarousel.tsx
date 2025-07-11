// src/components/KeyWordCarousel.tsx
// This component displays a horizontal carousel of keywords with a smooth automatic scrolling effect.
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const KeywordCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const keywords = t('carousel.keywords', { returnObjects: true }) as string[];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 2; // velocidad de desplazamiento, ajusta si querés más lento o rápido
    const intervalId = setInterval(() => {
      container.scrollLeft += scrollSpeed;

      // Si llegó al final, vuelve al inicio sin corte visual
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }, 20); // cada 20 ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#E6F0FA] via-white to-[#E6F0FA] py-10 overflow-hidden">
      <div
        ref={containerRef}
        className="hide-scrollbar whitespace-nowrap flex space-x-0 px-6 overflow-x-scroll items-baseline"
      >
        {[...keywords, ...keywords].map((keyword, index) => (
          <div
            key={index}
            className="inline-flex items-center text-2xl sm:text-6xl py-6 md:text-6xl text-[#4A90E2] font-bold hover:scale-110 transition-transform duration-300 whitespace-nowrap"
          >
            <span>{keyword}</span>
            {/* Punto con margen horizontal igual */}
            <span className="mx-6 text-gray-300 select-none">•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeywordCarousel;
