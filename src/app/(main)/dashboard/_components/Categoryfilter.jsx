import Link from "next/link";
import {cn} from "@/lib/utils";
import SectionHeader from "./Sectionheader";
import {getCategoryEmoji} from "@/lib/data";

export default function CategoryFilter({categories}) {
  return (
    <div className="mb-10">
      <SectionHeader title="Browse Categories" href="/categories" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
        {categories?.map((cat, i) => (
          <Link
            key={i}
            href={`/recipes/category/${cat.strCategory}`}
            className={cn(
              "group flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-1 text-center",
              "bg-muted/30 border-border/50 text-muted-foreground hover:border-primary/25 hover:bg-primary/5 hover:text-primary",
            )}
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200 leading-none">
              {getCategoryEmoji(cat.strCategory)}
            </span>
            <span className="text-xs font-semibold leading-tight">
              {cat.strCategory}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
