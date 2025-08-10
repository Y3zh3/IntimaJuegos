"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, SparklesIcon, MenuIcon, ArrowRightIcon } from './icons';
import ProductGrid from './product-grid';
import Link from 'next/link';
import Image from 'next/image';


export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Intima Juegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" className="text-foreground transition-colors hover:text-primary">Novedades</Link>
            <Link href="/mas-vendidos" className="text-muted-foreground transition-colors hover:text-primary">Más vendidos</Link>
            <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">Blog</Link>
            <Link href="/sobre-nosotros" className="text-muted-foreground transition-colors hover:text-primary">Sobre nosotros</Link>
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
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Descubre Tu Placer</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                    Una colección curada de juguetes y accesorios para explorar tus deseos con confianza y alegría.
                </p>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">Juegos en Pareja Digitales</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conecten a un nivel más profundo y divertido. Descubran nuestros juegos digitales diseñados para parejas.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Verdad o Atrevimiento Íntimo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Una versión picante del clásico juego para revelar sus secretos más profundos.</p>
                  <Button className="mt-4">Jugar ahora</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ruleta de Fantasías</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Dejen que el azar decida su próxima aventura. Giren la ruleta y cumplan la fantasía.</p>
                  <Button className="mt-4">Probar suerte</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Conversaciones de Corazón</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Más de 100 preguntas para encender la chispa y fortalecer la conexión emocional.</p>
                  <Button className="mt-4">Empezar a hablar</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Desafío de los Sentidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Un juego para explorar el tacto, el gusto y el olfato de formas nuevas y excitantes.</p>
                  <Button className="mt-4">Explorar</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Escenario de Roles Erótico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Elijan un escenario y dejen volar su imaginación. ¿Quién quieren ser esta noche?</p>
                  <Button className="mt-4">Crear personaje</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mapa del Tesoro Corporal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Descubran nuevas zonas de placer en el cuerpo del otro con este juego guiado.</p>
                  <Button className="mt-4">Iniciar Aventura</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary text-center mb-10">Nuestros Productos</h2>
            <ProductGrid />
        </div>
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
