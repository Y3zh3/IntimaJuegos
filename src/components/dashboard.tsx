
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { CartSheet } from './cart-sheet';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { games } from '@/lib/games';

export function Dashboard() {
  
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
      <main className="flex-1">
        
        <section className="w-full pt-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-normal">Juegos Digitales para Parejas</h2>
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
                        <p className="text-muted-foreground mb-4">{game.description}</p>
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
                            <DialogFooter>
                                <Link href={`/juegos/${game.slug}`} passHref>
                                    <Button size="sm">Jugar ahora</Button>
                                </Link>
                            </DialogFooter>
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
