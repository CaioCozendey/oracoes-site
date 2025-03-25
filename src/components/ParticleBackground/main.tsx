"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@/app/context/ThemeContext";

const BackParticles = () => {
  const [init, setInit] = useState(false);
  const { darkMode } = useTheme(); // Obtenha o estado do tema

  // Inicialização do engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Opções dinâmicas baseadas no tema
  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: darkMode ? "#090e18": "transparent", // Fundo transparente para trabalhar com qualquer tema
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          distance: 100,
        },
      },
    },
    particles: {
      color: {
        value: darkMode ? "#3B82F6" : "#1E40AF", // Azul mais claro no dark, mais escuro no light
      },
      links: {
        color: darkMode ? "#93C5FD" : "#60A5FA", // Azul pastel no dark, mais vibrante no light
        distance: 150,
        enable: true,
        opacity: darkMode ? 0.4 : 0.6, // Mais transparente no dark
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: "out",
      },
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      opacity: {
        value: darkMode ? 0.7 : 0.9, // Mais visível no light mode
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [darkMode]); // Recalcula quando o tema muda

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded:", container);
  };

  return init ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed inset-0 -z-10"
    />
  ) : null;
};

export default BackParticles;