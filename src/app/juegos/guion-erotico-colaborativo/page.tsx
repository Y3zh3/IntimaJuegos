
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeftIcon, SparklesIcon, MenuIcon } from '@/components/icons';
import { CartSheet } from '@/components/cart-sheet';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { continueEroticStory } from '@/ai/flows/erotic-story-flow';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function GuionEroticoPage() {
  const [story, setStory] = useState("La noche era cálida y las estrellas brillaban con intensidad. En el balcón, dos copas de vino esperaban mientras una suave música de jazz flotaba en el aire...");
  const [currentUserInput, setCurrentUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [turn, setTurn] = useState<'user' | 'ai'>('user');

  const handleContinueStory = async () => {
      if (!currentUserInput.trim()) return;
      
      const newStory = `${story}\n\n**Tu turno:** ${currentUserInput}`;
      setStory(newStory);
      setCurrentUserInput("");
      setTurn('ai');
      setIsLoading(true);

      const result = await continueEroticStory({ story: newStory });

      setStory((prevStory) => `${prevStory}\n\n**Turno de la IA:** ${result.continuation}`);
      setIsLoading(false);
      setTurn('user');
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
        <div className="w-full max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Guion Erótico Colaborativo</h1>
            <p className="text-muted-foreground mt-2">Construyan juntos una historia de pasión.</p>
        </div>
        <Card className="mt-8 w-full max-w-4xl p-6 bg-card shadow-2xl">
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] w-full rounded-md border p-4 whitespace-pre-wrap">
                {story}
                {isLoading && <p className="text-primary animate-pulse mt-4">La IA está escribiendo...</p>}
            </ScrollArea>
            <Textarea 
                placeholder="Es tu turno de continuar la historia..."
                className="mt-4"
                rows={4}
                value={currentUserInput}
                onChange={(e) => setCurrentUserInput(e.target.value)}
                disabled={isLoading || turn === 'ai'}
            />
          </CardContent>
          <CardFooter className="w-full flex justify-end mt-4 p-0">
            <Button onClick={handleContinueStory} disabled={isLoading || turn === 'ai'}>
              Continuar la Historia
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
