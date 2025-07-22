// Metodik_FE/src/components/Tools/ToolsData.tsx
// This file contains the data for various tools used in the Metodik project.
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaTrello, FaJira, FaSlack, FaFileExcel, FaFileWord, FaGithub, FaGoogleDrive } from "react-icons/fa";
import { SiAutocad, SiZoom, SiLoom, SiFigma, SiVite, SiCloudflare, SiRailway } from "react-icons/si";

export const tools = {
  // Project Management & Collaboration
  "tools.Project Management & Collaboration": [
    {
      name: "tools.microsoft_project",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Project_%282019%E2%80%93present%29.svg/512px-Microsoft_Project_%282019%E2%80%93present%29.svg.png"
          alt="Microsoft Project"
          width={40}
          height={40}
        />
      ),
    },
    { name: "tools.trello", icon: <FaTrello size={40} color="#0079BF" /> },
    { name: "tools.jira", icon: <FaJira size={40} color="#0052CC" /> },
    {
      name: "tools.monday",
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/monday-1.svg"
          alt="Monday.com"
          width={40}
          height={40}
          style={{ filter: "brightness(1.2)" }}
        />
      ),
    },
    { name: "tools.slack", icon: <FaSlack size={40} color="#4A154B" /> },
    {
      name: "tools.microsoft_teams",
      icon: (
        <img
          src="https://download.logo.wine/logo/Microsoft_Teams/Microsoft_Teams-Logo.wine.png"
          alt="Microsoft Teams"
          width={65}
          height={65}
          style={{ objectFit: "contain" }}
        />
      ),
    },
    { name: "tools.zoom", icon: <SiZoom size={40} color="#2D8CFF" /> },
    { name: "tools.loom", icon: <SiLoom size={40} color="#00C8FF" /> },
  ],

  // Microsoft Office & Power Platform
  "tools.Microsoft Office & Power Platform": [
    { name: "tools.excel", icon: <FaFileExcel size={40} color="#217346" /> },
    { name: "tools.word", icon: <FaFileWord size={40} color="#2B579A" /> },
    {
      name: "tools.power_apps",
      icon: (
        <img
          src="https://img.icons8.com/?size=512&id=OU2ddOKw840K&format=png"
          alt="Power Apps"
          width={40}
          height={40}
          style={{ objectFit: "contain", borderRadius: "8px" }}
        />
      ),
    },
    {
      name: "tools.power_bi",
      icon: (
        <img
          src="https://cdn.worldvectorlogo.com/logos/power-bi-1.svg"
          alt="Power BI"
          width={40}
          height={40}
        />
      ),
    },
  ],

  // Development / Web Technologies
  "tools.Development / Web Technologies": [
    { name: "tools.github", icon: <FaGithub size={40} color="#181717" /> },
    { name: "tools.html", icon: <FaHtml5 size={40} color="#E44D26" /> },
    { name: "tools.css", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "tools.react", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "tools.javascript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "tools.nodejs", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "tools.vite", icon: <SiVite size={40} color="#646CFF" /> },
    { name: "tools.cloudflare", icon: <SiCloudflare size={40} color="#F38020" /> },
    { name: "tools.railway", icon: <SiRailway size={40} color="#4F46E5" /> },
  ],

  // Design & Other
  "tools.Design & Other": [
    { name: "tools.figma", icon: <SiFigma size={40} color="#F24E1E" /> },
    { name: "tools.google_workspace", icon: <FaGoogleDrive size={40} color="#34A853" /> },
    { name: "tools.autocad", icon: <SiAutocad size={40} color="#E12026" /> },
    {
      name: "tools.looker_studio",
      icon: (
        <img
          src="https://www.svgrepo.com/show/354012/looker-icon.svg"
          alt="Looker Studio"
          width={40}
          height={40}
          style={{ objectFit: "contain", borderRadius: "8px" }}
        />
      ),
    },
  ],
};