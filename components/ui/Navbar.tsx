"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Heart, Menu, Search, X } from "lucide-react";
import { Button, Input } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 backdrop-blur-md bg-black/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-bold text-white">
              <img src="/images/datacon-logo2.png" alt="DataConn Logo" className="h-24 w-24" />
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-white hover:text-primary transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#roadmap"
                className="text-white hover:text-primary transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="#partners"
                className="text-white hover:text-primary transition-colors"
              >
                Partners
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-primary transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-[15px] h-4 w-4 text-muted-" />
              <input
                type="search"
                placeholder="Search..."
                className="h-12 w-64 pl-12 bg-black-500/30 backdrop-blur-md border border-gray-300/10 rounded-2xl p-4"
                
              />
            </div>
            <Button variant="bordered" size="md" className="h-12 w-auto bg-black-500/30 hover:bg-black-500/50 backdrop-blur-md border border-gray-400/10">
              <Github className="h-5 w-5" />
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link href="/" className="block text-white hover:text-primary py-2">
              Home
            </Link>
            <Link
              href="#features"
              className="block text-white hover:text-primary py-2"
            >
              Solutions
            </Link>
            <Link
              href="#roadmap"
              className="block text-white hover:text-primary py-2"
            >
              Roadmap
            </Link>
            <Link
              href="#partners"
              className="block text-white hover:text-primary py-2"
            >
              Partners
            </Link>
            <Link
              href="#about"
              className="block text-white hover:text-primary py-2"
            >
              About
            </Link>
            <div className="pt-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-8 bg-black-300/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
