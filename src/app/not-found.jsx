import Link from "next/link";
import {Flame, UtensilsCrossed, ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <span
              className="font-serif font-bold text-[10rem] leading-none text-transparent select-none"
              style={{WebkitTextStroke: "2px rgba(249,115,22,0.2)"}}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-muted border border-border flex items-center justify-center shadow-2xl rotate-3">
                <UtensilsCrossed
                  className="w-12 h-12 text-primary"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-10">
          <h1 className="font-serif text-3xl font-semibold text-foreground">
            Recipe Not Found
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Looks like this page got burned in the kitchen. <br />
            Let&apos;s get you back to something delicious.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-px transition-all duration-200 h-11 px-6"
          >
            <Link href="/">
              <Flame className="w-4 h-4 mr-2" />
              Back to Rannaghor
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-border hover:bg-muted h-11 px-6 transition-all duration-200"
          >
            <Link href="/my-recipes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              My Recipes
            </Link>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Flame className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-serif text-sm text-muted-foreground">
            Rannaghor
          </span>
        </div>
      </div>
    </div>
  );
}
