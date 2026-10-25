import { useEffect, useRef, useState } from "react";
import { HERO_BANNERS } from "../data";

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef(null);

  const go = (i) => setActive((i + HERO_BANNERS.length) % HERO_BANNERS.length);

  useEffect(() => {
    timer.current = setInterval(() => setActive((a) => (a + 1) % HERO_BANNERS.length), 5000);
    return () => clearInterval(timer.current);
  }, []);

  const reset = () => { clearInterval(timer.current); timer.current = setInterval(() => setActive((a) => (a + 1) % HERO_BANNERS.length), 5000); };

  return (
    <div className="rounded-3xl overflow-hidden mb-8 relative shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]" style={{ minHeight: 190 }}>
      {HERO_BANNERS.map((b, i) => (
        <div
          key={b.id}
          className="absolute inset-0 flex flex-col justify-center px-8 py-8 transition-all duration-700"
          style={{ background: b.bg, opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.04)", pointerEvents: i === active ? "auto" : "none" }}
        >
          {/* decorative rings */}
          <div className="absolute -left-16 -top-24 w-64 h-64 rounded-full border-[30px] border-white/10" />
          <div className="absolute left-20 -bottom-28 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

          <div className="flex items-center justify-between relative z-10">
            <div className={i === active ? "anim-fade-up" : ""}>
              <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-black/25 text-white/90 mb-3 backdrop-blur">طرح ویژه طاقچه</span>
              <h3 className="text-white text-[26px] font-black mb-2 drop-shadow-lg">{b.title}</h3>
              <p className="text-white/85 text-sm mb-5">{b.subtitle}</p>
              <button className="text-sm font-black px-6 py-2.5 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200"
                style={{ background: "#fff", color: b.btnColor === "#0B1120" ? "#0B1120" : b.btnColor, ...(b.btnColor === "#fff" ? { background: "rgba(255,255,255,.15)", color: "#fff", border: "1px solid rgba(255,255,255,.4)", backdropFilter: "blur(8px)" } : {}) }}>
                {b.btn} ←
              </button>
            </div>
            <span className="text-8xl hidden sm:block float-slow drop-shadow-2xl">{b.emoji}</span>
          </div>
        </div>
      ))}

      {/* progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_BANNERS.map((_, i) => (
          <button key={i} onClick={() => { go(i); reset(); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" : "w-4 bg-white/35 hover:bg-white/60"}`}
          />
        ))}
      </div>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 backdrop-blur text-white rounded-full w-9 h-9 flex items-center justify-center text-xl border border-white/20 transition-all hover:scale-110"
        onClick={() => { go(active + 1); reset() }}>‹</button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/30 backdrop-blur text-white rounded-full w-9 h-9 flex items-center justify-center text-xl border border-white/20 transition-all hover:scale-110"
        onClick={() => { go(active - 1); reset() }}>›</button>
    </div>
  );
}
