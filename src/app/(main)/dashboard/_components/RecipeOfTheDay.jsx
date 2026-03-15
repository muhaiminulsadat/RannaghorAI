import Image from "next/image";
import Link from "next/link";
import {ArrowRight, Clock, Users, ChefHat, Flame} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

function getIngredients(recipe) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({ingredient, measure: measure?.trim() || ""});
    }
  }
  return ingredients;
}

function IngredientCard({ingredient, measure}) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg p-2 border border-border/40 hover:border-primary/20 transition-colors duration-200"
      style={{background: "rgba(255,255,255,0.02)"}}
    >
      <Image
        src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
        alt={ingredient}
        width={28}
        height={28}
        className="rounded-md object-cover flex-shrink-0"
      />
      <div className="min-w-0">
        <p className="text-xs font-medium text-foreground truncate">
          {ingredient}
        </p>
        {measure && (
          <p className="text-xs text-muted-foreground truncate">{measure}</p>
        )}
      </div>
    </div>
  );
}

function StatCard({icon: Icon, label, value}) {
  return (
    <div
      className="rounded-xl border border-border/50 p-3 text-center"
      style={{background: "rgba(255,255,255,0.02)"}}
    >
      <Icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
      <p className="text-sm font-semibold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export default function RecipeOfTheDay({recipe}) {
  if (!recipe) {
    return null;
  }
  const ingredients = getIngredients(recipe);
  return (
    <div className="grid lg:grid-cols-5 gap-6 mb-10">
      <div
        className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end p-8 border border-border/50"
        style={{background: "#0f0d0b"}}
      >
        {recipe.strMealThumb && (
          <Image
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            fill
            className="object-cover opacity-40"
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(10,9,7,0.98) 0%, rgba(10,9,7,0.6) 50%, rgba(10,9,7,0.1) 100%)",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 bg-primary/20 border border-primary/30 rounded-full px-3 py-1">
              <Flame className="w-3 h-3 text-primary" />
              <span className="text-primary text-xs font-medium">
                Recipe of the Day
              </span>
            </div>
            {recipe.strArea && (
              <Badge
                variant="outline"
                className="text-xs border-white/10 text-muted-foreground"
              >
                {recipe.strArea}
              </Badge>
            )}
            {recipe.strCategory && (
              <Badge
                variant="outline"
                className="text-xs border-white/10 text-muted-foreground"
              >
                {recipe.strCategory}
              </Badge>
            )}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
            {recipe.strMeal}
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-5 max-w-md">
            {recipe.strInstructions?.slice(0, 160)}...
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white h-10 px-5 rounded-xl text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Link href={`/recipes/${recipe.idMeal}`}>
                View Recipe
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </Button>
            {recipe.strYoutube && (
              <Button
                asChild
                variant="outline"
                className="h-10 px-5 rounded-xl text-sm border-white/10 hover:bg-white/5 text-muted-foreground"
              >
                <a
                  href={recipe.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-4">
        <div
          className="rounded-2xl border border-border/50 p-6 flex-1"
          style={{background: "rgba(255,255,255,0.02)"}}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-base font-semibold text-foreground">
              Ingredients
            </h3>
            <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
              {ingredients.length} items
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
            {ingredients.map(({ingredient, measure}, i) => (
              <IngredientCard
                key={i}
                ingredient={ingredient}
                measure={measure}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <StatCard icon={Clock} label="Cook Time" value="30 min" />
          <StatCard icon={Users} label="Servings" value="4" />
          <StatCard icon={ChefHat} label="Difficulty" value="Medium" />
        </div>
      </div>
    </div>
  );
}
