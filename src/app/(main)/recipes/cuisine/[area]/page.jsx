import {getMealsByArea} from "@/actions/mealdb.actions";
import {getCountryCode} from "@/lib/data";

import ReactCountryFlag from "react-country-flag";
import {UtensilsCrossed} from "lucide-react";
import MealCard from "../../category/[category]/_components/MealCard";

export async function generateMetadata({params}) {
  const {area} = await params;
  return {
    title: `${area} Cuisine — Rannaghor`,
  };
}

const CuisinePage = async ({params}) => {
  const {area} = await params;
  const res = await getMealsByArea(area);
  const meals = res?.meals || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 rounded-2xl border border-border/60 overflow-hidden flex items-center justify-center"
              style={{background: "rgba(255,255,255,0.03)"}}
            >
              <ReactCountryFlag
                countryCode={getCountryCode(area)}
                svg
                style={{width: "2.5rem", height: "2.5rem", objectFit: "cover"}}
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-[3px]">
                Cuisine
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                {area}
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground text-sm ml-14">
            {meals.length} recipes found
          </p>
        </div>

        {meals.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {meals.map((meal, i) => (
              <MealCard key={meal.idMeal} meal={meal} priority={i === 0} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div
              className="w-16 h-16 rounded-2xl border border-border/50 flex items-center justify-center"
              style={{background: "rgba(255,255,255,0.02)"}}
            >
              <UtensilsCrossed className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="font-serif text-xl font-semibold text-foreground">
              No recipes found
            </p>
            <p className="text-muted-foreground text-sm">
              Try exploring a different cuisine
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuisinePage;
