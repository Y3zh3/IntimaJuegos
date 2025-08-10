"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfileView() {
  return (
     <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Perfil de Pareja</h1>
        <p className="text-lg text-muted-foreground mt-2">Descubran y compartan lo que los hace únicos.</p>
      </div>
    <Card>
      <CardHeader>
        <CardTitle>Perfil de Intereses</CardTitle>
        <CardDescription>
          Completen esto juntos para generar nuevas ideas para citas y conversaciones.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="partner1-name">Nombre Pareja 1</Label>
                <Input id="partner1-name" placeholder="Ej., Alex" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="partner2-name">Nombre Pareja 2</Label>
                <Input id="partner2-name" placeholder="Ej., Sam" />
            </div>
        </div>
        <div className="space-y-3">
            <Label>¿Cuáles son sus pasatiempos compartidos?</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Cocinar", "Senderismo", "Películas", "Juegos", "Viajar", "Arte"].map((hobby) => (
                    <div key={hobby} className="flex items-center space-x-2">
                        <Checkbox id={`hobby-${hobby}`} />
                        <label
                        htmlFor={`hobby-${hobby}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        {hobby}
                        </label>
                    </div>
                ))}
            </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date-ideas">¿Cuál es la cita de sus sueños que les encantaría tener?</Label>
          <Textarea id="date-ideas" placeholder="Describe la cita perfecta..." />
        </div>
         <div className="space-y-2">
          <Label htmlFor="shared-goal">¿Qué meta quieren alcanzar juntos el próximo año?</Label>
          <Input id="shared-goal" placeholder="Ej., Correr un 5k, aprender un nuevo idioma..." />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full md:w-auto">Guardar Perfil</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
