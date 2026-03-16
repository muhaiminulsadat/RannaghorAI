import PantryHeader from "./_components/PantryHeader";

// export const metadata = {
//   title: "My Pantry — Rannaghor",
// };

export default async function PantryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24">
        <PantryHeader />
      </div>
    </div>
  );
}
