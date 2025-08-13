
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, SparklesIcon, MenuIcon } from '@/components/icons';
import { CartSheet } from '@/components/cart-sheet';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const truths = [
    "¿Cuál es la parte de mi cuerpo que más te excita?",
    "¿Alguna vez has fingido un orgasmo conmigo?",
    "¿Cuál es tu mayor fantasía sexual que no me has contado?",
    "¿Qué es lo más travieso que has hecho sin que yo lo sepa?",
    "Si pudieras cambiar una cosa de nuestra vida sexual, ¿qué sería?",
    "¿Cuál es el lugar más extraño en el que has pensado tener sexo conmigo?",
    "¿Qué opinas realmente de mis habilidades en la cama?",
    "¿Hay algún amigo/a tuyo/a por el/la que hayas sentido atracción?",
    "¿Cuál es tu recuerdo más sexy de nosotros dos?",
    "¿Qué es algo que te da curiosidad probar en la cama pero te da miedo pedir?"
];

const dares = [
    "Envíame un mensaje de texto muy provocador ahora mismo.",
    "Baila para mí tu baile más sensual durante 30 segundos.",
    "Dame un beso apasionado de al menos 20 segundos.",
    "Hazme un masaje en el cuello y los hombros durante 2 minutos.",
    "Susúrrame al oído qué es lo que más te gustaría hacerme en este momento.",
    "Quítate una prenda de ropa de la forma más lenta y seductora posible.",
    "Déjame vendarte los ojos y adivina dónde te estoy besando.",
    "Cuéntame un chiste erótico.",
    "Imita el sonido de un orgasmo.",
    "Hazme 10 sentadillas mientras me miras fijamente a los ojos."
];

export default function VerdadOAtrevimientoPage() {
  const [cardContent, setCardContent] = useState("Elige tu destino: ¿Verdad o Atrevimiento?");
  const [showButtons, setShowButtons] = useState(true);

  const handleChoice = (type: 'truth' | 'dare') => {
    let item;
    if (type === 'truth') {
        const randomIndex = Math.floor(Math.random() * truths.length);
        item = truths[randomIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * dares.length);
        item = dares[randomIndex];
    }
    setCardContent(item);
    setShowButtons(false);
  };

  const handlePlayAgain = () => {
    setCardContent("Elige tu destino: ¿Verdad o Atrevimiento?");
    setShowButtons(true);
  }

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
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Verdad o Atrevimiento Íntimo</h1>
            <p className="text-muted-foreground mt-2">Revelen sus secretos más profundos.</p>
        </div>
        <Card className="mt-8 w-full max-w-2xl h-80 flex flex-col justify-center items-center p-8 text-center bg-card shadow-2xl">
          <CardContent className="flex-1 flex items-center">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              {cardContent}
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center gap-4">
            {showButtons ? (
                <>
                    <Button onClick={() => handleChoice('truth')}>Verdad</Button>
                    <Button onClick={() => handleChoice('dare')} variant="destructive">Atrevimiento</Button>
                </>
            ) : (
                <Button onClick={handlePlayAgain}>Jugar de Nuevo</Button>
            )}
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
