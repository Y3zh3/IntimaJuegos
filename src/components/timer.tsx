"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TimerIcon, RefreshCw } from 'lucide-react';

const twentyFourHours = 24 * 60 * 60;

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(twentyFourHours);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const d = Math.floor(seconds / (3600*24));
    const h = Math.floor(seconds % (3600*24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);

    return {
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0'),
    }
  };
  
  const {days, hours, minutes, seconds: secs} = formatTime(timeLeft);

  const handleReset = () => {
      setTimeLeft(twentyFourHours);
  }

  return (
    <Card className="bg-transparent border-border/50">
      <CardContent className="p-4">
        <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Próxima Conexión</p>
            <div className="flex justify-center items-center gap-2 font-mono text-2xl font-bold text-foreground">
                <div>{hours}</div>:
                <div>{minutes}</div>:
                <div>{secs}</div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleReset} className="mt-2 text-muted-foreground">
                <RefreshCw className="mr-2 h-4 w-4" /> Reiniciar
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timer;
