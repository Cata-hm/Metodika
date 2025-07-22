// Metodik_FE/src/components/Tools/ToolsCategory.tsx
// This component displays a category of tools with their respective icons and names, using translations for international
import React from "react";
import { useTranslation } from "react-i18next";

interface ToolCategoryProps {
  category: string;
  items: { name: string; icon: React.ReactNode }[];
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ category, items }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-12 rounded-lg border border-[#4A90E2]/30 bg-[#F9FAFB] p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-6 border-b-2 border-[#4A90E2] pb-2 text-[#4A90E2]">
        {t(category)}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {items.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform hover:scale-110 hover:text-[#3B75C3] text-[#4A90E2]"
          >
            {tool.icon}
            <span className="mt-3 text-base font-medium">{t(tool.name)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolCategory;