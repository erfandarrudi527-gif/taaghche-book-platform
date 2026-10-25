export default function Stars({ rating, size = "sm" }) {
  return (
    <span className={size === "sm" ? "text-xs" : "text-base"} style={{ letterSpacing: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= Math.round(rating) ? "#FBBF24" : "rgba(148,163,184,0.3)", textShadow: i <= Math.round(rating) ? "0 0 8px rgba(251,191,36,0.55)" : "none" }}>★</span>
      ))}
    </span>
  );
}
