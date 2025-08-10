"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';

interface GameCardProps {
  prompt: string;
  onNext: () => void;
  onComplete: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ prompt, onNext, onComplete }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(prompt);

  useEffect(() => {
    if (prompt !== currentPrompt) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPrompt(prompt);
        setIsCompleted(false);
        setIsFlipping(false);
      }, 300);
    }
  }, [prompt, currentPrompt]);
  
  const handleComplete = () => {
    setIsCompleted(true);
    setIsCelebrating(true);
    onComplete();
    setTimeout(() => setIsCelebrating(false), 1000);
  }

  return (
    <div className={cn("perspective-1000", isCelebrating && "animate-tada")}>
      <Card
        className={cn(
          'relative w-full max-w-lg min-h-[300px] transform-style-3d transition-transform duration-700 ease-in-out rounded-2xl shadow-2xl overflow-hidden',
          isFlipping && 'rotate-y-180',
        )}
      >
        <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-8 text-center bg-card">
          <p className="text-2xl md:text-3xl font-headline leading-relaxed text-card-foreground">{currentPrompt}</p>
          <div className="absolute bottom-6 flex gap-4">
             <Button size="lg" variant="outline" onClick={handleComplete}>
                <Check className="mr-2 h-5 w-5" />
                Completed
            </Button>
            <Button size="lg" onClick={onNext} className="bg-primary hover:bg-primary/90">
                Next Prompt
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center p-6 bg-card">
            {/* Back of the card, could be a logo or pattern */}
        </div>
      </Card>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        @keyframes tada {
            0% {transform: scale(1);}
            10%, 20% {transform: scale(0.9) rotate(-3deg);}
            30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);}
            40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);}
            100% {transform: scale(1) rotate(0);}
        }
        .animate-tada {
            animation: tada 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default GameCard;
