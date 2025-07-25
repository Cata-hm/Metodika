// Metodik_FE/src/components/Tools/ToolsCategory.tsx
// Metodik_FE/src/components/Tools/ToolsCategory.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface ToolCategoryProps {
  category: string;
  items: { name: string; icon: React.ReactNode }[];
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ category, items }) => {
  const { t } = useTranslation();

  // Coordenadas manuales dispersas para colocar los círculos (puedes generar aleatorias también)
  // Aquí para 8 items, con x,y % para posicionamiento absoluto
  const positions = [
    { x: "10%", y: "10%" },
    { x: "30%", y: "25%" },
    { x: "55%", y: "15%" },
    { x: "75%", y: "30%" },
    { x: "15%", y: "65%" },
    { x: "40%", y: "55%" },
    { x: "65%", y: "70%" },
    { x: "85%", y: "60%" },
  ];

  return (
    <div className="relative mb-20 rounded-3xl border border-[#4A90E2]/30 bg-gradient-to-tr from-[#E0F2FE] to-[#F9FAFB] p-12 shadow-lg min-h-[400px]">
      <h3 className="text-3xl font-extrabold mb-12 border-b-4 border-[#4A90E2] pb-3 text-[#3B75C3] tracking-wide text-center">
        {t(category)}
      </h3>

      <div className="relative w-full h-[320px] md:h-[400px] mx-auto max-w-4xl">
        {items.map((tool, index) => {
          // Use positions circularly or default if not enough
          const pos = positions[index % positions.length];

          return (
            <motion.div
              key={index}
              className="absolute bg-white bg-opacity-70 backdrop-blur-md rounded-full shadow-lg cursor-pointer flex flex-col items-center justify-center p-6 w-32 h-32 text-[#4A90E2] select-none"
              style={{ left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
              whileHover={{ scale: 1.15, boxShadow: "0 0 15px rgba(74, 144, 226, 0.8)" }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
            >
              <div className="text-5xl mb-2 drop-shadow-md">{tool.icon}</div>
              <span className="text-center text-base font-semibold tracking-wide">
                {t(tool.name)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolCategory;
