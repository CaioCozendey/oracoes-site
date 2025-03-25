"use client";

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  key?: string | number; // Adicione esta linha
}

const Typewriter = ({ text, speed = 50, delay = 0, className = '', key }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelayed, setIsDelayed] = useState(delay > 0);
  const timerRef = useRef<NodeJS.Timeout>();

  // Efeito principal para limpar e reiniciar a animação
  useEffect(() => {
    // Limpa qualquer timeout existente
    clearTimeout(timerRef.current);
    setDisplayedText('');
    setCurrentIndex(0);
    setIsDelayed(delay > 0);

    if (delay > 0) {
      timerRef.current = setTimeout(() => {
        setIsDelayed(false);
      }, delay);
    } else {
      setIsDelayed(false);
    }

    return () => clearTimeout(timerRef.current);
  }, [text, delay, key]); // Adicione key às dependências

  // Efeito para animação de digitação
  useEffect(() => {
    if (isDelayed || currentIndex >= text.length) return;

    timerRef.current = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, text, speed, isDelayed]);

  return <span className={`inline-block ${className}`}>{displayedText}</span>;
};

export default Typewriter;