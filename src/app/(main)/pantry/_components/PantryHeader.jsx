import AddPantryModal from "./PantryModal";

export default function PantryHeader() {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <p className="text-xs font-semibold text-primary uppercase tracking-[3px] mb-2">
          Your Kitchen
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight">
          My Pantry
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          Track your ingredients and reduce waste
        </p>
      </div>
      <AddPantryModal />
    </div>
  );
}
