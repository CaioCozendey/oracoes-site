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
      { name: 'Loadings', path: 'LoadingsView', en: 'Loading', pt: 'Loading' },
      { name: 'Cards', path: 'CardsView', en: 'Cards', pt: 'Cards' },
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