
"use client";

import Link from "next/link";
import { SparklesIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart-sheet";

export default function SobreIntima() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/50 px-4 backdrop-blur-sm md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">IntimaJuegos</h1>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Inicio</Link>
            <Link href="/juegos-para-conectar" className="text-muted-foreground transition-colors hover:text-primary">Juegos para Conectar</Link>
            <Link href="/guia-para-parejas" className="text-muted-foreground transition-colors hover:text-primary">Guía para Parejas</Link>
            <Link href="/historias-reales" className="text-muted-foreground transition-colors hover:text-primary">Historias Reales</Link>
            <Link href="/sobre-intima" className="text-foreground transition-colors hover:text-primary">Sobre Íntima</Link>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-3xl px-4 md:px-6">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:text-6xl text-primary">Nuestra Razón de Ser</h1>
                </div>
                <div className="space-y-10 pt-12">
                    <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                        En IntimaJuegos, creemos que el placer y la conexión emocional son pilares fundamentales de una vida plena y una relación saludable. Nacimos de la convicción de que la intimidad es un universo por explorar, y que la comunicación es la brújula que guía esa exploración.
                    </p>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-primary text-center">Nuestra Filosofía</h2>
                        <p className="text-white text-lg text-justify">
                            Vivimos en un mundo que a menudo nos enseña a reprimir nuestros deseos y a sentir vergüenza por nuestra curiosidad. Nosotros queremos cambiar esa narrativa. Nuestra filosofía se basa en tres principios: <strong>Curiosidad sin Juicios, Comunicación con Empatía y Placer con Consciencia.</strong> Creemos que cada pareja tiene el derecho de descubrir qué les da placer, de hablar sobre ello abiertamente y de disfrutarlo de una manera segura y respetuosa.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-primary text-center">Nuestra Misión</h2>
                        <p className="text-white text-lg text-justify">
                            Nuestra misión es simple pero poderosa: <strong>ofrecer herramientas, juegos y recursos que inspiren a las parejas a conectar de manera más profunda.</strong> No vendemos solo productos; ofrecemos experiencias. Cada juego ha sido cuidadosamente diseñado para ser un puente: un puente para iniciar conversaciones difíciles, para reír juntos, para explorar fantasías y para redescubrirse mutuamente en un espacio de confianza y diversión.
                        </p>
                    </div>
                    <div className="space-y-4 text-left">
                        <h2 className="text-3xl font-bold text-primary">Nuestros Valores</h2>
                        <ul className="text-white text-lg list-outside space-y-2 pl-6">
                          <li className="text-justify"><strong>Empatía Radical:</strong> Nos esforzamos por ponernos en el lugar de cada pareja, entendiendo que cada relación es un mundo único. Escuchamos sus historias y validamos sus experiencias sin juicio.</li>
                          <li className="text-justify"><strong>Innovación Constante:</strong> El mundo de la intimidad está siempre evolucionando. Estamos comprometidos con la creación continua de juegos y herramientas que sean relevantes, emocionantes y verdaderamente útiles.</li>
                          <li className="text-justify"><strong>Inclusión y Diversidad:</strong> Celebramos el amor en todas sus formas. Nuestros recursos están diseñados para ser inclusivos y respetuosos con todas las orientaciones sexuales, identidades de género y tipos de relación.</li>
                          <li className="text-justify"><strong>Educación sin Tabúes:</strong> Creemos que el conocimiento es poder. Nuestra meta es derribar los mitos y la desinformación en torno a la sexualidad, ofreciendo contenido claro, honesto y basado en la evidencia.</li>
                          <li className="text-justify"><strong>La Diversión como Herramienta:</strong> Estamos convencidos de que la conexión emocional y el placer no tienen por qué ser serios o solemnes. La risa, el juego y la alegría son herramientas potentísimas para fortalecer los lazos.</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-primary text-center">Nuestro Compromiso</h2>
                        <p className="text-white text-lg text-justify">
                            Somos un equipo apasionado por el bienestar sexual y la inteligencia emocional. Tu seguridad y confianza son nuestra máxima prioridad. Por eso, nos comprometemos a ofrecer productos de la más alta calidad, fabricados con materiales seguros para el cuerpo, y a proporcionar información clara y honesta. Queremos que te sientas con poder, confianza y libertad para descubrir tus deseos en un espacio que hemos creado para ti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </main>
       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-white">&copy; 2024 IntimaJuegos. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Términos y Condiciones</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacidad</a>
        </nav>
      </footer>
    </div>
  );
}
