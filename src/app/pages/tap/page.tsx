"use client";

import Alert from "@/components/alert/alert-01";
import BackParticles from "@/components/ParticleBackground/main";

const Tap = () => {
  return (
    <div className="w-full h-screen">
      <BackParticles />
      <Alert
        title="Tap"
        message="Clique em qualquer lugar do plano de fundo!"
        buttonText="Confirmar"
        showOnLoad={true}
        onClose={() => console.log('Alerta fechado')}
        onConfirm={() => console.log('Ação confirmada!')}
      />
    </div>
  )
}

export default Tap;