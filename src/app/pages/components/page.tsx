"use client";

import BackParticles from "@/components/ParticleBackground/main";
import Sidebar from "@/components/Sidebar/main";
import { useState } from "react";
import ComponentView from "./ComponentView";
import { useTheme } from "@/app/context/ThemeContext";

const componentCategories = [
  {
    title: 'Components',
    en: 'Components',
    pt: 'Componentes',
    items: [
      { name: 'Loading-01', path: 'loading-01', en: 'Loading', pt: 'Loading' },
    ]
  },
  {
    title: 'Forms',
    en: 'Forms',
    pt: 'Formulários',
    items: [
    ]
  }
];

const Components = () => {
  const { darkMode } = useTheme();
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900': 'bg-white'}`}>
      <BackParticles />
      <Sidebar
        componentsData={componentCategories}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <main className="p-32 flex-1">
        <ComponentView activeComponent={activeComponent} />
      </main>
    </div>
  );
}

export default Components;