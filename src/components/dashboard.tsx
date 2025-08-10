"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartIcon, FlameIcon, EyeIcon, SettingsIcon, TrophyIcon } from './icons';
import GameView from './game-view';
import ProgressView from './progress-view';
import ProfileView from './profile-view';
import SettingsView from './settings-view';
import Timer from './timer';

const navItems = [
  { id: 'game', label: 'Jugar', icon: FlameIcon },
  { id: 'progress', label: 'Progreso', icon: TrophyIcon },
  { id: 'profile', label: 'Perfil', icon: HeartIcon },
  { id: 'settings', label: 'Ajustes', icon: SettingsIcon },
];

export function Dashboard() {
  const [activeView, setActiveView] = useState('game');

  const renderView = () => {
    switch (activeView) {
      case 'game':
        return <GameView />;
      case 'progress':
        return <ProgressView />;
      case 'profile':
        return <ProfileView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <GameView />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background font-body">
      <aside className="fixed left-0 top-0 z-10 flex h-full w-16 flex-col items-center justify-between border-r border-border/20 bg-background/50 py-4 backdrop-blur-sm md:w-64 md:items-stretch md:bg-card/80 md:p-4">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex items-center gap-2 px-4">
            <EyeIcon className="h-8 w-8 text-primary" />
            <h1 className="hidden text-2xl font-bold text-foreground md:block">AmorEsJuego</h1>
          </div>
          <nav className="mt-8 flex flex-col gap-2 self-stretch px-2 md:px-0">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeView === item.id ? 'default' : 'ghost'}
                onClick={() => setActiveView(item.id)}
                className="flex items-center justify-center gap-3 rounded-lg py-6 text-base md:justify-start md:px-4"
              >
                <item.icon className="h-6 w-6" />
                <span className="hidden md:block">{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
        <div className="hidden md:block">
            <Timer />
        </div>
      </aside>
      <main className="flex-1 pl-16 md:pl-64">
        <div className="p-4 sm:p-6 lg:p-8">
            {renderView()}
        </div>
      </main>
    </div>
  );
}
