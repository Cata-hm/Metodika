// Metodik_FE/src/components/Tools/ToolsDispersed.tsx
// This component displays various tools used as project management, arranged in a dispersed layout with animations.

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface ToolsDispersedProps {
  tools: Tool[];
}

const ToolsDispersed: React.FC<ToolsDispersedProps> = ({ tools }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-4">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          className="bg-white bg-opacity-70 backdrop-blur-md rounded-full shadow-lg cursor-pointer flex flex-col items-center justify-center p-6 w-32 h-32 text-[#4A90E2] select-none"
          whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(74, 144, 226, 0.9)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="text-6xl mb-2 drop-shadow-md">{tool.icon}</div>
          <span className="text-center text-base font-semibold tracking-wide">
            {t(tool.name)}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ToolsDispersed;
