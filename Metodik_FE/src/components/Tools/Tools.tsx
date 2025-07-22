// Metodik_FE/src/components/Tools/Tools.tsx
// This component displays various tools used as project management, categorized by their functionalities.
import { tools } from "./ToolsData";
import ToolsCategory from "./ToolsCategory";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white text-[#4A90E2]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t("tools.title")}
        </h2>
        <p className="mb-12 text-lg opacity-70">
          {t("tools.subtitle")}
        </p>
        {Object.entries(tools).map(([category, items], idx) => (
          <ToolsCategory key={idx} category={category} items={items} />
        ))}
      </div>
    </section>
  );
};

export default Tools;