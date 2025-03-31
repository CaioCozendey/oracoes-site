"use client";

import { Alert } from '@/components/alert/alert-01';
import { useState } from 'react';

const Tap = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <div className="w-full h-screen">
      <Alert
        isOpen={isAlertOpen}
        message="Deseja continuar?"
        buttonText="Confirmar"
        onClose={() => setIsAlertOpen(false)}
        onConfirm={() => {
          console.log('Ação confirmada!');
          setIsAlertOpen(true);
        }}
      />
    </div>
  )
}

export default Tap;