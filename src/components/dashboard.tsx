"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription as CardDescriptionComponent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, SparklesIcon, MenuIcon } from './icons';
import ProductGrid from './product-grid';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export function Dashboard() {
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
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Conecta desde el Placer y la Confianza</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                    Íntima Juegos nace para ayudarte a hablar, sentir y explorar el deseo con tu pareja desde el respeto, la empatía y la diversión.
                </p>
            </div>
        </section>

        <section className="w-full py-12 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">Juegos en Pareja Digitales</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conecten a un nivel más profundo y divertido. Descubran nuestros juegos digitales diseñados para parejas.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl py-12">
              <Tabs defaultValue="emotional-connection" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                  <TabsTrigger value="emotional-connection" className="flex-col gap-2 py-3">
                    <span className="text-2xl">🔓</span>
                    <span>Conexión Emocional</span>
                  </TabsTrigger>
                  <TabsTrigger value="communication" className="flex-col gap-2 py-3">
                    <span className="text-2xl">💬</span>
                    <span>Comunicación</span>
                  </TabsTrigger>
                  <TabsTrigger value="fantasies" className="flex-col gap-2 py-3">
                    <span className="text-2xl">🎭</span>
                    <span>Explorar Fantasías</span>
                  </TabsTrigger>
                  <TabsTrigger value="intimacy" className="flex-col gap-2 py-3">
                    <span className="text-2xl">❤️</span>
                    <span>Reavivar la Intimidad</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="emotional-connection">
                  <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Conversaciones de Corazón</CardTitle>
                        <CardDescriptionComponent className="text-sm text-accent-foreground font-semibold pt-1">Conexión Emocional</CardDescriptionComponent>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Más de 100 preguntas para encender la chispa y fortalecer la conexión emocional.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="mt-4">Empezar a hablar</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Conversaciones de Corazón</DialogTitle>
                              <DialogDescription>
                                La intimidad no es solo física. Con estas tarjetas de conversación, podrán explorar sus sentimientos, sueños y recuerdos más profundos. Es una forma hermosa de conectar a nivel emocional y fortalecer el vínculo que los une.
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="communication">
                  <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Verdad o Atrevimiento Íntimo</CardTitle>
                        <CardDescriptionComponent className="text-sm text-accent-foreground font-semibold pt-1">Comunicación</CardDescriptionComponent>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Una versión picante del clásico juego para revelar sus secretos más profundos.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="mt-4">Jugar ahora</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Verdad o Atrevimiento Íntimo</DialogTitle>
                              <DialogDescription>
                                Prepárense para una noche de revelaciones y risas. Con preguntas y desafíos que van de lo tierno a lo muy picante, este juego es perfecto para conocerse mejor y añadir una chispa de emoción. ¿Se atreverán a decir la verdad o cumplirán el desafío?
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="fantasies">
                  <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
                     <Card>
                      <CardHeader>
                        <CardTitle>Ruleta de Fantasías</CardTitle>
                        <CardDescriptionComponent className="text-sm text-accent-foreground font-semibold pt-1">Explorar Fantasías</CardDescriptionComponent>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Dejen que el azar decida su próxima aventura. Giren la ruleta y cumplan la fantasía.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="mt-4">Probar suerte</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Ruleta de Fantasías</DialogTitle>
                              <DialogDescription>
                                ¿Buscan salir de la rutina? Dejen que la ruleta elija por ustedes. Cada giro desvela una nueva fantasía o un escenario para explorar juntos. Desde masajes sensuales hasta juegos de roles, nunca sabrán qué les depara la suerte.
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                     <Card>
                      <CardHeader>
                        <CardTitle>Escenario de Roles Erótico</CardTitle>
                        <CardDescriptionComponent className="text-sm text-accent-foreground font-semibold pt-1">Explorar Fantasías</CardDescriptionComponent>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Elijan un escenario y dejen volar su imaginación. ¿Quién quieren ser esta noche?</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="mt-4">Crear personaje</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Escenario de Roles Erótico</DialogTitle>
                              <DialogDescription>
                                Desde un encuentro casual en un bar hasta una sesión con el profesor particular. Elijan uno de nuestros escenarios o creen el suyo propio. Es la oportunidad perfecta para experimentar con nuevas dinámicas y liberar su lado más creativo en la intimidad.
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                 <TabsContent value="intimacy">
                  <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                     <Card>
                      <CardHeader>
                        <CardTitle>Desafío de los Sentidos</CardTitle>
                         <CardDescriptionComponent className="text-sm text-accent-foreground font-semibold pt-1">Reavivar la Intimidad</CardDescriptionComponent>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Un juego para explorar el tacto, el gusto y el olfato de formas nuevas y excitantes.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="mt-4">Explorar</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Desafío de los Sentidos</DialogTitle>
                              <DialogDescription>
                                Venden los ojos a su pareja y prepárense para un viaje sensorial. Usen diferentes texturas, sabores y aromas para despertar sensaciones inolvidables. Este juego agudizará sus sentidos y les hará redescubrir el placer del tacto.
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                     <Card>
                      <CardHeader>
                        <CardTitle>Mapa del Tesoro Corporal</CardTitle>
                        <CardDescriptionComponent className="text-sm text-accent-foreground font-semibold pt-1">Reavivar la Intimidad</CardDescriptionComponent>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Descubran nuevas zonas de placer en el cuerpo del otro con este juego guiado.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="mt-4">Iniciar Aventura</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Mapa del Tesoro Corporal</DialogTitle>
                              <DialogDescription>
                                El cuerpo de su pareja es un mapa lleno de tesoros por descubrir. Con esta guía, explorarán cada rincón con besos, caricias y masajes, encontrando nuevos puntos de placer que no sabían que existían. ¡La aventura está a punto de comenzar!
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
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
