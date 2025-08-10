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
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Couple's Profile</h1>
        <p className="text-lg text-muted-foreground mt-2">Discover and share what makes you both tick.</p>
      </div>
    <Card>
      <CardHeader>
        <CardTitle>Interest Profiler</CardTitle>
        <CardDescription>
          Fill this out together to spark new ideas for dates and conversations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="partner1-name">Partner 1 Name</Label>
                <Input id="partner1-name" placeholder="E.g., Alex" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="partner2-name">Partner 2 Name</Label>
                <Input id="partner2-name" placeholder="E.g., Sam" />
            </div>
        </div>
        <div className="space-y-3">
            <Label>What are your shared hobbies?</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Cooking", "Hiking", "Movies", "Gaming", "Traveling", "Art"].map((hobby) => (
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
          <Label htmlFor="date-ideas">What's a dream date you'd love to go on?</Label>
          <Textarea id="date-ideas" placeholder="Describe the perfect date..." />
        </div>
         <div className="space-y-2">
          <Label htmlFor="shared-goal">What's a goal you want to achieve together in the next year?</Label>
          <Input id="shared-goal" placeholder="E.g., Run a 5k, learn a new language..." />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full md:w-auto">Save Profile</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
