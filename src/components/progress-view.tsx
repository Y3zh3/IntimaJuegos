"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Enero", activities: 12 },
  { month: "Febrero", activities: 15 },
  { month: "Marzo", activities: 18 },
  { month: "Abril", activities: 22 },
  { month: "Mayo", activities: 20 },
  { month: "Junio", activities: 25 },
]

const chartConfig = {
  activities: {
    label: "Actividades",
    color: "hsl(var(--primary))",
  },
}

export default function ProgressView() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Nuestro Viaje</h1>
        <p className="text-lg text-muted-foreground mt-2">Un vistazo a los hermosos momentos que hemos compartido.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Actividades Mensuales</CardTitle>
          <CardDescription>Siguiendo sus momentos de conexión mes a mes.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
               <YAxis />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="activities" fill="var(--color-activities)" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle>Logros</CardTitle>
          <CardDescription>Celebren sus hitos juntos.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Primera Chispa", "Semana de Conexión", "Reto de 30 Días", "Sueño Compartido"].map(item => (
                <div key={item} className="flex flex-col items-center justify-center p-4 bg-accent/20 rounded-lg text-center">
                    <div className="p-3 bg-accent rounded-full text-accent-foreground mb-2">🏆</div>
                    <p className="font-semibold text-foreground">{item}</p>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  )
}
