

"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SparklesIcon, MenuIcon, ShoppingCartIcon } from './icons';
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

export function Dashboard() {

    const games = [
    {
      title: "Conversaciones de Corazón",
      description: "Más de 100 preguntas para encender la chispa y fortalecer la conexión emocional.",
      dialogTitle: "Conversaciones de Corazón",
      dialogDescription: "La intimidad no es solo física. Con estas tarjetas de conversación, podrán explorar sus sentimientos, sueños y recuerdos más profundos. Es una forma hermosa de conectar a nivel emocional y fortalecer el vínculo que los une.",
      buttonText: "Detalles",
      price: "S/ 49.99",
      image: "https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios2101/lightfieldstudios210100019/161849967-joven-besando-y-abrazando-a-una-mujer-sensual-con-los-ojos-cerrados-en-la-cama.jpg?ver=6",
      imageHint: "couple talking"
    },
    {
      title: "Verdad o Atrevimiento Íntimo",
      description: "Una versión picante del clásico juego para revelar sus secretos más profundos.",
      dialogTitle: "Verdad o Atrevimiento Íntimo",
      dialogDescription: "Prepárense para una noche de revelaciones y risas. Con preguntas y desafíos que van de lo tierno a lo muy picante, este juego es perfecto para conocerse mejor y añadir una chispa de emoción. ¿Se atreverán a decir la verdad o cumplirán el desafío?",
      buttonText: "Detalles",
      price: "S/ 49.99",
      image: "https://m.media-amazon.com/images/I/61IhLKtb4nL._UF1000,1000_QL80_.jpg",
      imageHint: "truth dare game"
    },
    {
      title: "Ruleta de Fantasías",
      description: "Dejen que el azar decida su próxima aventura. Giren la ruleta y cumplan la fantasía.",
      dialogTitle: "Ruleta de Fantasías",
      dialogDescription: "¿Buscan salir de la rutina? Dejen que la ruleta elija por ustedes. Cada giro desvela una nueva fantasía o un escenario para explorar juntos. Desde masajes sensuales hasta juegos de roles, nunca sabrán qué les depara la suerte.",
      buttonText: "Detalles",
      price: "S/ 59.99",
      image: "https://http2.mlstatic.com/D_NQ_NP_984363-MLU79116847456_092024-O.webp",
      imageHint: "fantasy roulette"
    },
    {
      title: "Escenario de Roles Erótico",
      description: "Elijan un escenario y dejen volar su imaginación. ¿Quién quieren ser esta noche?",
      dialogTitle: "Escenario de Roles Erótico",
      dialogDescription: "Desde un encuentro casual en un bar hasta una sesión con el profesor particular. Elijan uno de nuestros escenarios o creen el suyo propio. Es la oportunidad perfecta para experimentar con nuevas dinámicas y liberar su lado más creativo en la intimidad.",
      buttonText: "Detalles",
      price: "S/ 59.99",
      image: "https://www.clarin.com/2022/05/05/D9lXG--8R_720x0__1.jpg",
      imageHint: "erotic roleplay"
    },
    {
      title: "Desafío de los Sentidos",
      description: "Un juego para explorar el tacto, el gusto y el olfato de formas nuevas y excitantes.",
      dialogTitle: "Desafío de los Sentidos",
      dialogDescription: "Venden los ojos a su pareja y prepárense para un viaje sensorial. Usen diferentes texturas, sabores y aromas para despertar sensaciones inolvidables. Este juego agudizará sus sentidos y les hará redescubrir el placer del tacto.",
      buttonText: "Detalles",
      price: "S/ 69.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AVKQuiRQw2V65Ng3Bo5t398p1-x38hS0Aw&s",
      imageHint: "sensory challenge"
    },
    {
      title: "Mapa del Tesoro Corporal",
      description: "Descubran nuevas zonas de placer en el cuerpo del otro con este juego guiado.",
      dialogTitle: "Mapa del Tesoro Corporal",
      dialogDescription: "El cuerpo de su pareja es un mapa lleno de tesoros por descubrir. Con esta guía, explorarán cada rincón con besos, caricias y masajes, encontrando nuevos puntos de placer que no sabían que existían. ¡La aventura está a punto de comenzar!",
      buttonText: "Detalles",
      price: "S/ 69.99",
      image: "https://s.yimg.com/ny/api/res/1.2/U7dObyj1vZ92582kOPXlaw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/401/2012/05/22/99343542-jpg_220059.jpg",
      imageHint: "body map"
    },
    {
      title: "Secretos Compartidos",
      description: "Un juego de cartas para revelar secretos y fortalecer la confianza mutua.",
      dialogTitle: "Secretos Compartidos",
      dialogDescription: "Cada carta contiene una pregunta que invita a la honestidad. Compartan sus secretos más guardados en un espacio seguro y sin juicios. Ideal para parejas que buscan una conexión más auténtica.",
      buttonText: "Detalles",
      price: "S/ 49.99",
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780892815883/secretos-sexuales-9780892815883_hr.jpg",
      imageHint: "shared secrets"
    },
    {
      title: "Guion Erótico Colaborativo",
      description: "Escriban juntos una historia erótica y luego, si se atreven, llévenla a la realidad.",
      dialogTitle: "Guion Erótico Colaborativo",
      dialogDescription: "Tomen turnos para escribir un párrafo de una historia erótica. Dejen volar su imaginación y creen un relato único que los excite a ambos. La diversión está tanto en el proceso creativo como en el resultado final.",
      buttonText: "Detalles",
      price: "S/ 59.99",
      image: "https://static.skillshare.com/uploads/parentClasses/f97c30cdaccfe5fdcb3740693dd09034/b8fbadf4",
      imageHint: "erotic script"
    }
  ];
  
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
          <div className="my-4 w-full">
            <Link href="/juegos-para-conectar">
              <div className="relative h-[640px] w-full overflow-hidden">
                <Image
                  src="https://trome.com/resizer/v2/POIE635OING7VFSVNUPRBZTN7I.jpg?auth=215a50ebfc26bffea0feb05f6ff60b6c12caa5c3b5cbd7c1e7149ddcb3948e7c&width=6016&height=4016&quality=90&smart=true"
                  alt="Banner de juguetes sexuales"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="sex toys banner"
                />
              </div>
            </Link>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-normal">Juegos Digitales para Parejas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-10">
                Conecten a un nivel más profundo y divertido. Descubran nuestros juegos digitales diseñados para parejas.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
              {games.slice(0, 8).map((game) => (
                <Card key={game.title} className="flex flex-col h-full items-center justify-center text-center border-transparent hover:border-primary transition-all duration-300 ease-in-out overflow-hidden hover:rounded-lg">
                  <div className="relative w-40 h-40 mt-4">
                    <Image
                      src={game.image}
                      alt={game.title}
                      layout="fill"
                      className="object-cover rounded-full"
                      data-ai-hint={game.imageHint}
                    />
                  </div>
                  <CardHeader className="p-2 text-center">
                    <CardTitle className="text-sm">{game.title}</CardTitle>
                      <CardDescription>{game.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-2 pt-0 text-center justify-center">
                    <div className="mt-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="w-full text-xs">Detalles</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="text-primary">{game.dialogTitle}</DialogTitle>
                            <DialogDescription>
                              {game.dialogDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center justify-between mt-4">
                              <p className="text-2xl font-bold text-primary">{game.price}</p>
                              <Button>
                                  <ShoppingCartIcon className="mr-2 h-4 w-4" />
                                  Añadir al Carrito
                              </Button>
                          </div>
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
        <p className="text-xs text-muted-foreground">&copy; 2024 IntimaJuegos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Términos y Condiciones</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}

    

    

    
