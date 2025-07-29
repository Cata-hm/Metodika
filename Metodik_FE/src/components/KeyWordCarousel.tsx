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

    const scrollSpeed = 1.9; // velocidad de desplazamiento
     let animationFrameId: number;

    const step = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="overflow-hidden bg-gray-100">
      <div
        ref={containerRef}
        className="hide-scrollbar whitespace-nowrap flex space-x-8 px-8 py-6 overflow-x-scroll items-baseline"
      >
        {[...keywords, ...keywords].map((keyword, index) => (
          <span key={index} className="inline-flex items-center cursor-default select-none">
            <div
              className="border-black text-2xl text-gradient-black sm:text-4xl font-extrabold whitespace-nowrap transition-transform duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'default',
                //textShadow: '0 0 8px rgba(167, 140, 250, 0.7)',
              }}
            >
              {keyword}
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};

export default KeywordCarousel;
