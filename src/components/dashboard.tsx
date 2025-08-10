"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SparklesIcon, MenuIcon } from './icons';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { CartSheet } from './cart-sheet';

export function Dashboard() {
  const games = [
    {
      title: "Conversaciones de Corazón",
      category: "Conexión Emocional",
      description: "Más de 100 preguntas para encender la chispa y fortalecer la conexión emocional.",
      dialogTitle: "Conversaciones de Corazón",
      dialogDescription: "La intimidad no es solo física. Con estas tarjetas de conversación, podrán explorar sus sentimientos, sueños y recuerdos más profundos. Es una forma hermosa de conectar a nivel emocional y fortalecer el vínculo que los une.",
      buttonText: "Empezar a hablar",
      image: "https://placehold.co/400x310.png",
      imageHint: "couple talking"
    },
    {
      title: "Verdad o Atrevimiento Íntimo",
      category: "Comunicación",
      description: "Una versión picante del clásico juego para revelar sus secretos más profundos.",
      dialogTitle: "Verdad o Atrevimiento Íntimo",
      dialogDescription: "Prepárense para una noche de revelaciones y risas. Con preguntas y desafíos que van de lo tierno a lo muy picante, este juego es perfecto para conocerse mejor y añadir una chispa de emoción. ¿Se atreverán a decir la verdad o cumplirán el desafío?",
      buttonText: "Jugar ahora",
      image: "https://placehold.co/400x320.png",
      imageHint: "truth dare game"
    },
    {
      title: "Ruleta de Fantasías",
      category: "Explorar Fantasías",
      description: "Dejen que el azar decida su próxima aventura. Giren la ruleta y cumplan la fantasía.",
      dialogTitle: "Ruleta de Fantasías",
      dialogDescription: "¿Buscan salir de la rutina? Dejen que la ruleta elija por ustedes. Cada giro desvela una nueva fantasía o un escenario para explorar juntos. Desde masajes sensuales hasta juegos de roles, nunca sabrán qué les depara la suerte.",
      buttonText: "Probar suerte",
      image: "https://placehold.co/400x330.png",
      imageHint: "fantasy roulette"
    },
    {
      title: "Escenario de Roles Erótico",
      category: "Explorar Fantasías",
      description: "Elijan un escenario y dejen volar su imaginación. ¿Quién quieren ser esta noche?",
      dialogTitle: "Escenario de Roles Erótico",
      dialogDescription: "Desde un encuentro casual en un bar hasta una sesión con el profesor particular. Elijan uno de nuestros escenarios o creen el suyo propio. Es la oportunidad perfecta para experimentar con nuevas dinámicas y liberar su lado más creativo en la intimidad.",
      buttonText: "Crear personaje",
      image: "https://placehold.co/400x340.png",
      imageHint: "erotic roleplay"
    },
    {
      title: "Desafío de los Sentidos",
      category: "Reavivar la Intimidad",
      description: "Un juego para explorar el tacto, el gusto y el olfato de formas nuevas y excitantes.",
      dialogTitle: "Desafío de los Sentidos",
      dialogDescription: "Venden los ojos a su pareja y prepárense para un viaje sensorial. Usen diferentes texturas, sabores y aromas para despertar sensaciones inolvidables. Este juego agudizará sus sentidos y les hará redescubrir el placer del tacto.",
      buttonText: "Explorar",
      image: "https://placehold.co/400x350.png",
      imageHint: "sensory challenge"
    },
    {
      title: "Mapa del Tesoro Corporal",
      category: "Reavivar la Intimidad",
      description: "Descubran nuevas zonas de placer en el cuerpo del otro con este juego guiado.",
      dialogTitle: "Mapa del Tesoro Corporal",
      dialogDescription: "El cuerpo de su pareja es un mapa lleno de tesoros por descubrir. Con esta guía, explorarán cada rincón con besos, caricias y masajes, encontrando nuevos puntos de placer que no sabían que existían. ¡La aventura está a punto de comenzar!",
      buttonText: "Iniciar Aventura",
      image: "https://placehold.co/400x360.png",
      imageHint: "body map"
    },
    {
      title: "Secretos Compartidos",
      category: "Conexión Emocional",
      description: "Un juego de cartas para revelar secretos y fortalecer la confianza mutua.",
      dialogTitle: "Secretos Compartidos",
      dialogDescription: "Cada carta contiene una pregunta que invita a la honestidad. Compartan sus secretos más guardados en un espacio seguro y sin juicios. Ideal para parejas que buscan una conexión más auténtica.",
      buttonText: "Contar un secreto",
      image: "https://placehold.co/400x370.png",
      imageHint: "shared secrets"
    },
    {
      title: "Guion Erótico Colaborativo",
      category: "Explorar Fantasías",
      description: "Escriban juntos una historia erótica y luego, si se atreven, llévenla a la realidad.",
      dialogTitle: "Guion Erótico Colaborativo",
      dialogDescription: "Tomen turnos para escribir un párrafo de una historia erótica. Dejen volar su imaginación y creen un relato único que los excite a ambos. La diversión está tanto en el proceso creativo como en el resultado final.",
      buttonText: "Empezar a escribir",
      image: "https://placehold.co/400x380.png",
      imageHint: "erotic script"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">IntimaJuegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" className="text-foreground transition-colors hover:text-primary">Inicio</Link>
            <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-muted-foreground transition-colors hover:text-primary">Historias Reales</Link>
            <Link href="/sobre-intima" className="text-muted-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
        </nav>
        <div className="flex items-center gap-4">
            <CartSheet />
            <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Menú</span>
            </Button>
        </div>
      </header>
      <main className="flex-1">
        
        <section className="w-full py-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-normal">Juegos en Pareja Digitales</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conecten a un nivel más profundo y divertido. Descubran nuestros juegos digitales diseñados para parejas.
              </p>
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4">
                {games.slice(0, 8).map((game) => (
                    <Card key={game.title} className="flex flex-col h-full border-transparent hover:border-primary transition-colors overflow-hidden">
                    <div className="relative">
                        <Image
                        src={game.image}
                        alt={game.title}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover"
                        data-ai-hint={game.imageHint}
                        />
                    </div>
                    <CardHeader className="p-4 text-center">
                        <CardTitle>{game.title}</CardTitle>
                        <CardDescription>{game.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-4 pt-0 text-center">
                        <p className="text-muted-foreground mb-4 flex-grow">{game.description}</p>
                        <div className="mt-auto">
                        <Dialog>
                            <DialogTrigger asChild>
                            <Button className="w-full">{game.buttonText}</Button>
                            </DialogTrigger>
                            <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{game.dialogTitle}</DialogTitle>
                                <DialogDescription>
                                {game.dialogDescription}
                                </DialogDescription>
                            </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        </div>
                    </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
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
