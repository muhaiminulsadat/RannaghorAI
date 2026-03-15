import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function MealCard({meal}) {
  return (
    <Link
      href={`/recipes/${meal.idMeal}`}
      className="group rounded-2xl border border-border/50 overflow-hidden hover:border-primary/25 transition-all duration-300 hover:-translate-y-1"
      style={{background: "rgba(255,255,255,0.02)"}}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,9,7,0.7) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="p-3.5">
        <h3 className="font-serif text-sm font-semibold text-foreground line-clamp-2 leading-snug mb-2">
          {meal.strMeal}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {meal.strCategory || "Recipe"}
          </span>
          <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
}
