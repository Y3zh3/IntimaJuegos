
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { games } from "@/lib/games";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/icons";

export default function GamePage() {
  const params = useParams();
  const slug = params.slug;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="flex flex-col min-h-screen w-full bg-background font-body items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">Juego no encontrado</h1>
        <p className="text-muted-foreground mt-2">
          El juego que buscas no existe o ha sido movido.
        </p>
        <Link href="/" passHref>
          <Button className="mt-4">Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-background font-body items-center justify-center p-4">
        <div className="absolute top-4 left-4">
            <Link href="/" passHref>
                <Button variant="ghost">
                    <ArrowLeftIcon className="mr-2" />
                    Volver
                </Button>
            </Link>
        </div>
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">{game.title}</CardTitle>
          <CardDescription>{game.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-6">{game.dialogDescription}</p>
          <Button size="lg" className="w-full sm:w-auto">
            ¡Empezar a Jugar!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
