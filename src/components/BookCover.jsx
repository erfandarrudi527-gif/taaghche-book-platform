
export default function BookCover({ color, title, h = 145 }) {
  const w = Math.round(h * 0.69);
  return (
    <div className="relative" style={{ width: w, height: h }}>
      {/* glow behind cover */}
      <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{ background: color }} />
      <div className="relative w-full h-full flex items-center justify-center rounded-xl p-2 overflow-hidden"
        style={{ background: color, boxShadow: "0 10px 30px -8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)" }}>
        {/* spine */}
        <div className="absolute inset-y-0 left-0 w-2" style={{ background: "linear-gradient(90deg,rgba(0,0,0,0.35),rgba(0,0,0,0.1))" }} />
        {/* gloss */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.22) 0%,transparent 45%)" }} />
        <span className="text-white text-[11px] font-bold text-center leading-snug z-10 drop-shadow">{title}</span>
      </div>
    </div>
  );
}
