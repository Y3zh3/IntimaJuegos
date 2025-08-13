
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, SparklesIcon, MenuIcon } from '@/components/icons';
import { CartSheet } from '@/components/cart-sheet';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const fantasies = [
    "Juego de roles: uno es un artista y el otro su musa.",
    "Un masaje sensual con aceites y velas.",
    "Experimentar con bondage suave usando una corbata o pañuelo de seda.",
    "Ver una película erótica juntos y actuar una escena.",
    "Tener una cita en casa donde ambos se visten como si fuera la primera vez que se ven.",
    "Jugar a 'strip poker' o a cualquier otro juego de mesa con prendas.",
    "Darse un baño juntos a la luz de las velas.",
    "Escribir las fantasías en un papel, intercambiarlas y leerlas en voz alta.",
    "Probar un juguete sexual nuevo juntos.",
    "Intentar una nueva posición sexual del kamasutra.",
    "Cocinar juntos algo afrodisíaco usando solo delantales.",
    "Tener sexo en un lugar inusual de la casa (la cocina, el sofá, etc.)."
];

export default function RuletaDeFantasiasPage() {
  const [currentFantasy, setCurrentFantasy] = useState("¡Gira la ruleta para descubrir tu próxima aventura!");
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    setIsSpinning(true);
    setCurrentFantasy("Girando...");
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * fantasies.length);
        setCurrentFantasy(fantasies[randomIndex]);
        setIsSpinning(false);
    }, 2000); // Simula el giro por 2 segundos
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
       <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <SparklesIcon className="h-6 w-6 text-primary" />
                    <span className="text-foreground">IntimaJuegos</span>
                  </Link>
                  <Link href="/" className="text-foreground hover:text-foreground">Juegos para Conectar</Link>
                  <Link href="/juegos-para-conectar" className="text-muted-foreground hover:text-foreground">Juguetes Sexuales</Link>
                  <Link href="/guia-para-parejas" className="text-muted-foreground hover:text-foreground">Guía para Parejas</Link>
                  <Link href="/historias-reales" className="text-muted-foreground hover:text-foreground">Historias Reales</Link>
                  <Link href="/sobre-intima" className="text-muted-foreground hover:text-foreground">Sobre Íntima</Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="hidden items-center gap-2 md:flex">
                <SparklesIcon className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold text-foreground">IntimaJuegos</h1>
            </Link>
        </div>
        <Link href="/" className="flex items-center gap-2 md:hidden">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">IntimaJuegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-base font-medium md:flex">
            <Link href="/" className="text-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
            <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juguetes Sexuales</Link>
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-muted-foreground transition-colors hover:text-primary">Historias Reales</Link>
            <Link href="/sobre-intima" className="text-muted-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
        </nav>
        <div className="flex items-center gap-4">
            <CartSheet />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 bg-muted/20">
        <div className="w-full max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Ruleta de Fantasías</h1>
            <p className="text-muted-foreground mt-2">Dejen que el azar decida su próxima aventura.</p>
        </div>
        <Card className="mt-8 w-full max-w-2xl h-80 flex flex-col justify-center items-center p-8 text-center bg-card shadow-2xl">
          <CardContent className="flex-1 flex items-center">
            <p className={`text-2xl md:text-3xl font-semibold text-foreground ${isSpinning ? 'animate-pulse' : ''}`}>
              {currentFantasy}
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button onClick={handleSpin} disabled={isSpinning}>
              {isSpinning ? 'Girando...' : 'Girar la Ruleta'}
            </Button>
          </CardFooter>
        </Card>
        <Link href="/" className="mt-8">
            <Button variant="outline">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Volver a los juegos
            </Button>
        </Link>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 IntimaJuegos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Términos y Condiciones</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}
