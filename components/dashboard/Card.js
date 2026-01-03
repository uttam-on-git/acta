export function Card({ children, title, className = "" }) {
  return (
    <div className={`
      bg-surface
      border border-border
      rounded-xl
      p-6
      shadow-sm
      ${className}
    `}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}