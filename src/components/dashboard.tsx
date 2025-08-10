"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, SparklesIcon, MenuIcon } from './icons';
import ProductGrid from './product-grid';


export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Intima Juegos</h1>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#" className="text-foreground transition-colors hover:text-primary">Novedades</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Más vendidos</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Blog</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Sobre nosotros</a>
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
        <div className="p-4 sm:p-6 lg:p-8">
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
