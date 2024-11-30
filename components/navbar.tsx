"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Image src="/assets/images/tavlogo.png" width={80} height={80} alt="Tavolos" className="h-10 w-auto rounded-lg" />
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Button variant="ghost" className="text-foreground">Features</Button>
            <Button variant="ghost" className="text-foreground">About</Button>
            <Button variant="ghost" className="text-foreground">Contact</Button>
            <Button variant="default">Get Notified</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button variant="ghost" className="w-full justify-start">Features</Button>
            <Button variant="ghost" className="w-full justify-start">About</Button>
            <Button variant="ghost" className="w-full justify-start">Contact</Button>
            <Button variant="default" className="w-full">Get Notified</Button>
          </div>
        </div>
      )}
    </nav>
  );
}