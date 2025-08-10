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
    const intimacyLevels = ["Sweet & Simple", "Getting Warmer", "Deeper Connection", "Feeling Adventurous", "Hot & Spicy"]

  return (
     <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Game Settings</h1>
            <p className="text-lg text-muted-foreground mt-2">Tailor the experience to your comfort and desires.</p>
        </div>
        <Card>
        <CardHeader>
            <CardTitle>Content Filters</CardTitle>
            <CardDescription>Adjust the type of prompts you receive.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <Label htmlFor="intimacy-level" className="text-lg">Intimacy Level</Label>
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
                <Label className="text-lg">Game Style</Label>
                <RadioGroup defaultValue="conversations" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <RadioGroupItem value="conversations" id="style-convo" className="peer sr-only" />
                        <Label htmlFor="style-convo" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Conversation Starters
                        </Label>
                    </div>
                     <div>
                        <RadioGroupItem value="activities" id="style-activity" className="peer sr-only" />
                        <Label htmlFor="style-activity" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Shared Activities
                        </Label>
                    </div>
                     <div>
                        <RadioGroupItem value="mix" id="style-mix" className="peer sr-only" />
                        <Label htmlFor="style-mix" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            A Bit of Both
                        </Label>
                    </div>
                </RadioGroup>
            </div>
        </CardContent>
        </Card>
    </div>
  )
}
