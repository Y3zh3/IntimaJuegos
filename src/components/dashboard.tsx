"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, SparklesIcon, MenuIcon } from './icons';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Dashboard() {
  const games = [
    {
      title: "Conversaciones de Corazón",
      category: "Conexión Emocional",
      description: "Más de 100 preguntas para encender la chispa y fortalecer la conexión emocional.",
      dialogTitle: "Conversaciones de Corazón",
      dialogDescription: "La intimidad no es solo física. Con estas tarjetas de conversación, podrán explorar sus sentimientos, sueños y recuerdos más profundos. Es una forma hermosa de conectar a nivel emocional y fortalecer el vínculo que los une.",
      buttonText: "Empezar a hablar"
    },
    {
      title: "Verdad o Atrevimiento Íntimo",
      category: "Comunicación",
      description: "Una versión picante del clásico juego para revelar sus secretos más profundos.",
      dialogTitle: "Verdad o Atrevimiento Íntimo",
      dialogDescription: "Prepárense para una noche de revelaciones y risas. Con preguntas y desafíos que van de lo tierno a lo muy picante, este juego es perfecto para conocerse mejor y añadir una chispa de emoción. ¿Se atreverán a decir la verdad o cumplirán el desafío?",
      buttonText: "Jugar ahora"
    },
    {
      title: "Ruleta de Fantasías",
      category: "Explorar Fantasías",
      description: "Dejen que el azar decida su próxima aventura. Giren la ruleta y cumplan la fantasía.",
      dialogTitle: "Ruleta de Fantasías",
      dialogDescription: "¿Buscan salir de la rutina? Dejen que la ruleta elija por ustedes. Cada giro desvela una nueva fantasía o un escenario para explorar juntos. Desde masajes sensuales hasta juegos de roles, nunca sabrán qué les depara la suerte.",
      buttonText: "Probar suerte"
    },
    {
      title: "Escenario de Roles Erótico",
      category: "Explorar Fantasías",
      description: "Elijan un escenario y dejen volar su imaginación. ¿Quién quieren ser esta noche?",
      dialogTitle: "Escenario de Roles Erótico",
      dialogDescription: "Desde un encuentro casual en un bar hasta una sesión con el profesor particular. Elijan uno de nuestros escenarios o creen el suyo propio. Es la oportunidad perfecta para experimentar con nuevas dinámicas y liberar su lado más creativo en la intimidad.",
      buttonText: "Crear personaje"
    },
    {
      title: "Desafío de los Sentidos",
      category: "Reavivar la Intimidad",
      description: "Un juego para explorar el tacto, el gusto y el olfato de formas nuevas y excitantes.",
      dialogTitle: "Desafío de los Sentidos",
      dialogDescription: "Venden los ojos a su pareja y prepárense para un viaje sensorial. Usen diferentes texturas, sabores y aromas para despertar sensaciones inolvidables. Este juego agudizará sus sentidos y les hará redescubrir el placer del tacto.",
      buttonText: "Explorar"
    },
    {
      title: "Mapa del Tesoro Corporal",
      category: "Reavivar la Intimidad",
      description: "Descubran nuevas zonas de placer en el cuerpo del otro con este juego guiado.",
      dialogTitle: "Mapa del Tesoro Corporal",
      dialogDescription: "El cuerpo de su pareja es un mapa lleno de tesoros por descubrir. Con esta guía, explorarán cada rincón con besos, caricias y masajes, encontrando nuevos puntos de placer que no sabían que existían. ¡La aventura está a punto de comenzar!",
      buttonText: "Iniciar Aventura"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Intima Juegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" className="text-foreground transition-colors hover:text-primary">Inicio</Link>
            <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-muted-foreground transition-colors hover:text-primary">Historias Reales</Link>
            <Link href="/sobre-intima" className="text-muted-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
        </nav>
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="sr-only">Carrito</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Menú</span>
            </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold sm:text-6xl text-primary tracking-normal">Conecta desde el Placer y la Confianza</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                    Íntima Juegos nace para ayudarte a hablar, sentir y explorar el deseo con tu pareja desde el respeto, la empatía y la diversión.
                </p>
            </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-normal">Juegos en Pareja Digitales</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conecten a un nivel más profundo y divertido. Descubran nuestros juegos digitales diseñados para parejas.
              </p>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              {games.map((game) => (
                <Card key={game.title} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{game.title}</CardTitle>
                    <CardDescription>{game.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
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
        </section>
      </main>
       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Intima Juegos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Términos y Condiciones</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}
