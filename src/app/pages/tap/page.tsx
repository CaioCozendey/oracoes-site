"use client";

import Alert from "@/components/alert/alert-01";
import BackParticles from "@/components/ParticleBackground/main";
import { useState } from 'react';

const Tap = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="w-full h-screen">
      <BackParticles />
      <Alert
        title="Tap"
        message="Clique em qualquer lugar do plano de fundo!"
        buttonText="Confirmar"
        showOnLoad={true} // Define se aparece ao carregar a tela
        onClose={() => setShowAlert(false)}
        onConfirm={() => {
          console.log('Ação confirmada!');
          setShowAlert(false);
        }}
      />
      {/* <UnderConstruction /> */}
    </div>
  )
}

export default Tap;