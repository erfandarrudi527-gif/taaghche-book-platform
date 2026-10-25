import { useRef, useState } from "react";

export default function SwiperSlider({ items, renderCard, cardWidth = 148, dark = false }) {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const scrollStart = useRef(0);
  const STEP = cardWidth + 14;

  const scrollTo = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const c = Math.max(0, Math.min(idx, items.length - 1));
    el.scrollTo({ left: c * STEP, behavior: "smooth" });
    setActiveIdx(c);
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setActiveIdx(Math.max(0, Math.min(Math.round(el.scrollLeft / STEP), items.length - 1)));
  };

  const onPD = (e) => { dragStart.current = e.clientX; scrollStart.current = trackRef.current.scrollLeft; setDragging(true); };
  const onPM = (e) => { if (!dragging) return; trackRef.current.scrollLeft = scrollStart.current + (dragStart.current - e.clientX); };
  const onPU = () => { setDragging(false); onScroll(); };

  const btnBase = "absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-200 backdrop-blur border shadow-lg active:scale-90";
  const btnStyle = "bg-white/[0.07] border-white/12 text-slate-300 hover:text-teal-300 hover:border-teal-400/50 hover:bg-white/[0.12] hover:scale-110";

  return (
    <div className="relative">
      <button onClick={() => scrollTo(activeIdx + 1)} className={`${btnBase} ${btnStyle} left-0 -translate-x-3`}>‹</button>
      <button onClick={() => scrollTo(activeIdx - 1)} className={`${btnBase} ${btnStyle} right-0 translate-x-3`}>›</button>

      <div
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={onPD}
        onPointerMove={onPM}
        onPointerUp={onPU}
        onPointerLeave={onPU}
        className="flex gap-3.5 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", cursor: dragging ? "grabbing" : "grab", scrollSnapType: "x mandatory" }}
      >
        {items.map((item, i) => (
          <div key={item.id ?? i} style={{ width: cardWidth, flexShrink: 0, scrollSnapAlign: "start" }}>
            {renderCard(item)}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIdx
                ? "w-6 h-2 bg-gradient-to-r from-teal-300 to-cyan-400 shadow-[0_0_10px_rgba(45,212,191,0.6)]"
                : "w-2 h-2 bg-white/15 hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
