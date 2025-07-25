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

    const scrollSpeed = 2; // velocidad de desplazamiento
    const intervalId = setInterval(() => {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-10 overflow-hidden bg-black">
      <div
        ref={containerRef}
        className="hide-scrollbar whitespace-nowrap flex space-x-8 px-8 overflow-x-scroll items-baseline"
      >
        {[...keywords, ...keywords].map((keyword, index, arr) => (
          <span key={index} className="inline-flex items-center cursor-default select-none">
            <div
              className="text-2xl sm:text-4xl font-extrabold whitespace-nowrap transition-transform duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 8px rgba(167, 140, 250, 0.7)',
              }}
            >
              {keyword}
            </div>
            {index < arr.length - 1 && (
              <span className="mx-6 text-gray-500 select-none text-5xl">•</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default KeywordCarousel;
