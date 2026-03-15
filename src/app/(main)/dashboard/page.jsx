import Link from "next/link";
import {Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
  getAreas,
  getCategories,
  getMealsByCategory,
  getRecipeOfTheDay,
} from "@/actions/mealdb.actions";
import RecipeOfTheDay from "./_components/RecipeOfTheDay";
import CategoryFilter from "./_components/Categoryfilter";
import CuisineGrid from "./_components/Cuisinegrid";
import SectionHeader from "./_components/Sectionheader";
import MealCard from "./_components/Mealcard";

export default async function DashboardPage() {
  const [recipeOfDay, categoriesData, areasData, featuredMeals] = await Promise.all([
    getRecipeOfTheDay(),
    getCategories(),
    getAreas(),
    getMealsByCategory("Seafood"),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                Welcome back
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              What are we cooking today?
            </h1>
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 rounded-xl h-11 px-6 w-fit"
          >
            <Link href="/generate">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate with AI
            </Link>
          </Button>
        </div>

        <RecipeOfTheDay recipe={recipeOfDay.recipe} />

        <CategoryFilter categories={categoriesData.categories} />

        <CuisineGrid areas={areasData.areas} />

        {/* <div>
          <SectionHeader
            title="Featured Seafood"
            subtitle="Fresh picks from the ocean"
            href="/explore?category=Seafood"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredMeals.meals.slice(0, 8).map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
