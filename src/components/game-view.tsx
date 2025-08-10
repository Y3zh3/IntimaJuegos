"use client";

import React, { useState } from 'react';
import GameCard from './game-card';
import { useToast } from "@/hooks/use-toast"

const prompts = [
  "Share a favorite memory of just the two of you.",
  "What's one thing you admire about your partner this week?",
  "Describe a future dream you want to achieve together.",
  "What is your partner's love language? Give an example.",
  "Plan a surprise date for next week, big or small.",
  "What's a song that makes you think of your partner?",
  "If you could go anywhere in the world together right now, where would it be?",
];

const GameView: React.FC = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const { toast } = useToast();

  const handleNext = () => {
    setPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };
  
  const handleComplete = () => {
    toast({
      title: "Activity Completed!",
      description: "You're building a stronger connection.",
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Time to Connect</h1>
        <p className="text-lg text-muted-foreground mt-2">Choose an activity to deepen your bond.</p>
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
