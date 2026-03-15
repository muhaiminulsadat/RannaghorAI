import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import SectionHeader from "./Sectionheader";
import {getCountryCode} from "@/lib/data";

export default function CuisineGrid({areas}) {
  return (
    <div className="mb-10">
      <SectionHeader title="Explore Cuisines" href="/explore" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
        {areas.map((area, i) => (
          <Link
            key={i}
            href={`/recipes/cuisine/${area.strArea}`}
            className="group flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl border border-border/50 text-center hover:border-primary/25 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-1"
            style={{background: "rgba(255,255,255,0.02)"}}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <ReactCountryFlag
                countryCode={getCountryCode(area.strArea)}
                svg
                style={{width: "2.5rem", height: "2.5rem", objectFit: "cover"}}
              />
            </div>
            <p className="text-xs font-semibold text-muted-foreground group-hover:text-primary truncate w-full transition-colors duration-200">
              {area.strArea}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
