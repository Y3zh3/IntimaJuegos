"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import * as React from "react"

export default function SettingsView() {
    const [sliderValue, setSliderValue] = React.useState(2);
    const intimacyLevels = ["Dulce y Sencillo", "Entrando en Calor", "Conexión Profunda", "Aventureros", "Picante"]

  return (
     <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Ajustes del Juego</h1>
            <p className="text-lg text-muted-foreground mt-2">Adapta la experiencia a su comodidad y deseos.</p>
        </div>
        <Card>
        <CardHeader>
            <CardTitle>Filtros de Contenido</CardTitle>
            <CardDescription>Ajusta el tipo de actividades que reciben.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <Label htmlFor="intimacy-level" className="text-lg">Nivel de Intimidad</Label>
                    <span className="w-auto text-right font-semibold text-primary">{intimacyLevels[sliderValue]}</span>
                </div>
                <Slider
                    id="intimacy-level"
                    defaultValue={[2]}
                    min={0}
                    max={4}
                    step={1}
                    onValueChange={(value) => setSliderValue(value[0])}
                    className="w-full"
                />
            </div>
            <div className="space-y-4">
                <Label className="text-lg">Estilo de Juego</Label>
                <RadioGroup defaultValue="conversations" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <RadioGroupItem value="conversations" id="style-convo" className="peer sr-only" />
                        <Label htmlFor="style-convo" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Inicio de Conversación
                        </Label>
                    </div>
                     <div>
                        <RadioGroupItem value="activities" id="style-activity" className="peer sr-only" />
                        <Label htmlFor="style-activity" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Actividades Compartidas
                        </Label>
                    </div>
                     <div>
                        <RadioGroupItem value="mix" id="style-mix" className="peer sr-only" />
                        <Label htmlFor="style-mix" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Un Poco de Ambos
                        </Label>
                    </div>
                </RadioGroup>
            </div>
        </CardContent>
        </Card>
    </div>
  )
}
