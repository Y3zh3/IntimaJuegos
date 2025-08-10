"use client";

import React, { useState } from 'react';
import GameCard from './game-card';
import { useToast } from "@/hooks/use-toast"

const prompts = [
  "Comparte un recuerdo favorito de ustedes dos solos.",
  "¿Qué es algo que admiras de tu pareja esta semana?",
  "Describe un sueño futuro que quieran lograr juntos.",
  "¿Cuál es el lenguaje de amor de tu pareja? Da un ejemplo.",
  "Planea una cita sorpresa para la próxima semana, grande o pequeña.",
  "¿Qué canción te hace pensar en tu pareja?",
  "Si pudieran ir a cualquier parte del mundo juntos ahora mismo, ¿dónde sería?",
];

const GameView: React.FC = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const { toast } = useToast();

  const handleNext = () => {
    setPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };
  
  const handleComplete = () => {
    toast({
      title: "¡Actividad Completada!",
      description: "Están construyendo una conexión más fuerte.",
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Hora de Conectar</h1>
        <p className="text-lg text-muted-foreground mt-2">Elige una actividad para profundizar su vínculo.</p>
      </div>
      <GameCard 
        prompt={prompts[promptIndex]} 
        onNext={handleNext} 
        onComplete={handleComplete}
      />
    </div>
  );
};

export default GameView;
