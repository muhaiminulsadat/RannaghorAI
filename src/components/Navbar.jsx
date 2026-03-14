"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {BookOpen, ShoppingBasket, ChefHat, Menu, X, Flame} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {href: "/my-recipes", label: "My Recipes", icon: BookOpen},
    {href: "/my-pantry", label: "My Pantry", icon: ShoppingBasket},
    {href: "/how-to-cook", label: "How to Cook?", icon: ChefHat},
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">
              Rannaghor
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({href, label, icon: Icon}) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild className="text-sm font-medium">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-px transition-all duration-200"
            >
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            <span
              className={`transition-all duration-300 ease-in-out inline-flex ${
                mobileOpen
                  ? "rotate-90 scale-110 text-primary"
                  : "rotate-0 scale-100"
              }`}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-6 pt-2">
          <div className="space-y-1">
            {navLinks.map(({href, label, icon: Icon}) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
          <div className="pt-4 mt-3 border-t border-border flex flex-col gap-2">
            <Button variant="ghost" asChild className="w-full justify-center">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button
              asChild
              className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/register" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
