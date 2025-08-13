
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, SparklesIcon, MenuIcon } from '@/components/icons';
import { CartSheet } from '@/components/cart-sheet';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const steps = [
    "Paso 1: El Viaje Comienza. Uno de ustedes se acuesta cómodamente con los ojos cerrados. El otro será el explorador. Empiecen por un suave masaje en los pies.",
    "Paso 2: Ascenso Lento. El explorador sube lentamente por las piernas, usando las yemas de los dedos para trazar círculos suaves. Presten atención a la respiración del otro.",
    "Paso 3: El Territorio de la Espalda. Dediquen tiempo a la espalda. Usen diferentes presiones. Un beso suave en cada homóplato marca el mapa.",
    "Paso 4: El Jardín de los Brazos. Recorran los brazos desde los hombros hasta las puntas de los dedos. Entrelacen los dedos y sientan la conexión.",
    "Paso 5: La Cumbre del Cuello. El cuello es una zona sensible. Usen besos suaves y soplos de aire cálido. Un beso en la nuca es el tesoro de esta zona.",
    "Paso 6: La Exploración Facial. Con extrema delicadeza, acaricien la cara, los labios, las cejas. Un beso tierno en la frente finaliza este paso.",
    "Paso 7: El Tesoro Escondido. El explorador susurra al oído del otro cuál fue su parte favorita del cuerpo para explorar y por qué.",
    "Paso 8: Cambio de Roles. Ahora es el turno del otro de ser el explorador y descubrir el mapa del cuerpo de su pareja. ¡Comiencen de nuevo desde el Paso 1!"
];

export default function MapaDelTesoroPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextStep = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Mapa del Tesoro Corporal</h1>
            <p className="text-muted-foreground mt-2">Descubran juntos nuevas zonas de placer.</p>
        </div>
        <Card className="mt-8 w-full max-w-2xl h-80 flex flex-col justify-center items-center p-8 text-center bg-card shadow-2xl">
          <CardContent className="flex-1 flex items-center">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              {steps[currentStepIndex]}
            </p>
          </CardContent>
          <CardFooter className="w-full flex justify-center">
            <Button onClick={handleNextStep}>
              Siguiente Paso
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
