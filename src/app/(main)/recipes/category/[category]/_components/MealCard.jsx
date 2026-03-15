import Image from "next/image";
import Link from "next/link";
import {ArrowRight, Clock, Users} from "lucide-react";

export default function MealCard({meal, priority = false}) {
  return (
    <Link
      href={`/recipes/${meal.idMeal}`}
      className="group rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
      style={{background: "rgba(255,255,255,0.02)"}}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,9,7,0.75) 0%, transparent 55%)",
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-sm font-semibold text-foreground line-clamp-2 leading-snug mb-3">
          {meal.strMeal}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              30 min
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />4 servings
            </div>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
}
