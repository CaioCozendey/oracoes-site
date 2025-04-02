'use client';

import BackParticles from "@/components/ParticleBackground/main";
import Sidebar from "@/components/Sidebar/main";
import { useState, useEffect } from "react";
import ComponentView from "./ComponentView";
import { useTheme } from "@/app/context/ThemeContext";
import { useMediaQuery } from 'react-responsive';

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
    const isMobile = useMediaQuery({ maxWidth: 1024 }); // Define o breakpoint para mobile (ajuste conforme necessário)

    useEffect(() => {
        // Opcional: Redirecionar usuários mobile para outra página
        if (isMobile) {
            // Router.push('/pagina-mobile-alternativa');
            console.log("Página Components não disponível em mobile.");
        }
    }, [isMobile]);

    return (
        <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <BackParticles />
            {isMobile ? (
                <main className="p-4 flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4">Página não disponível em dispositivos móveis</h2>
                        <p>Esta seção do site foi projetada para ser visualizada em telas maiores. Por favor, acesse esta página em um computador desktop.</p>
                        {/* Opcional: Adicionar um link para a página inicial ou outra seção */}
                        {/* <Link href="/" className="text-blue-500 hover:underline">Voltar para a página inicial</Link> */}
                    </div>
                </main>
            ) : (
                <>
                    <Sidebar
                        componentsData={componentCategories}
                        activeComponent={activeComponent}
                        setActiveComponent={setActiveComponent}
                    />
                    <main className="p-32 flex-1">
                        <ComponentView activeComponent={activeComponent} />
                    </main>
                </>
            )}
        </div>
    );
}

export default Components;