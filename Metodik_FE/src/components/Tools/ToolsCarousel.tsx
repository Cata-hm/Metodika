// Metodik_FE/src/components/Tools/ToolsCarousel.tsx
// This component renders a carousel of tools used in the Metodika application, allowing users to scroll through various project management tools

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface ToolsDoubleCarouselProps {
  tools: Tool[];
}

const ToolsDoubleCarousel: React.FC<ToolsDoubleCarouselProps> = ({ tools }) => {
  const { t } = useTranslation();

  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topContainer = topRef.current;
    const bottomContainer = bottomRef.current;
    if (!topContainer || !bottomContainer) return;

    const scrollSpeed = 1.5;

    let topScroll = 0;
    let bottomScroll = bottomContainer.scrollWidth - bottomContainer.clientWidth;

    let animationFrameId: number;

    const animate = () => {
      if (topContainer) {
        topScroll += scrollSpeed;
        if (topScroll >= topContainer.scrollWidth - topContainer.clientWidth) {
          topScroll = 0;
        }
        topContainer.scrollLeft = topScroll;
      }

      if (bottomContainer) {
        bottomScroll -= scrollSpeed;
        if (bottomScroll <= 0) {
          bottomScroll = bottomContainer.scrollWidth - bottomContainer.clientWidth;
        }
        bottomContainer.scrollLeft = bottomScroll;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // ensure both carousels start at the same position
    bottomContainer.scrollLeft = bottomScroll;

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-screen overflow-hidden py-3 space-y-6">
      {/* Carrusel superior */}
      <div
        ref={topRef}
        className="w-screen hide-scrollbar flex space-x-10 overflow-x-auto px-6 py-6"
        style={{ scrollBehavior: "smooth", minHeight: "140px" }}
      >
        {[...tools, ...tools].map((tool, idx) => (
          <motion.div
            key={`top-${idx}`}
            className="flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-md rounded-xl shadow-[0_0_15px_#a78bfa] cursor-pointer p-4 min-w-[140px] text-gradient-nohover"
            whileHover={{ 
            scale: 1.2, 
            boxShadow: "0 0 20px #000000", 
            backgroundColor: "#F1F5F9" 
          }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
          >
            <div className="text-5xl mb-1 drop-shadow-md">{tool.icon}</div>
            <span className="text-center text-base font-semibold tracking-wide select-none">
              {t(tool.name)}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Carrusel inferior */}
      <div
        ref={bottomRef}
        className="w-screen hide-scrollbar flex space-x-10 overflow-x-auto px-6 py-6"
        style={{ scrollBehavior: "smooth", minHeight: "140px" }}
      >
        {[...tools, ...tools].map((tool, idx) => (
          <motion.div
            key={`bottom-${idx}`}
            className="flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(74,144,226,0.8)] cursor-pointer p-4 min-w-[140px] text-gradient-nohover"
            whileHover={{ 
            scale: 1.2, 
            boxShadow: "0 0 20px #000000", 
            backgroundColor: "#F1F5F9" 
          }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
          >
            <div className="text-5xl mb-1 drop-shadow-md">{tool.icon}</div>
            <span className="text-center text-base font-semibold tracking-wide select-none">
              {t(tool.name)}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsDoubleCarousel;
