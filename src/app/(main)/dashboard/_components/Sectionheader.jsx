export default function SectionHeader({title, subtitle}) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h2 className="font-serif text-xl font-semibold text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
