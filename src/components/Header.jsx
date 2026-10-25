import { useState } from "react";
import { CATS } from "../data";

export default function Header({ navigate, user, onAuthClick }) {
  const [search, setSearch]   = useState("");
  const [activeCat, setActiveCat] = useState(0);

  return (
    <header className="glass-strong sticky top-0 z-50 !border-x-0 !border-t-0 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 py-3.5">

          {/* Logo */}
          <button onClick={() => navigate("home")} className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_24px_rgba(45,212,191,0.5)] bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <span className="text-slate-900 text-2xl font-black">ط</span>
            </div>
            <span className="text-2xl font-black grad-text hidden sm:block">طاقچه</span>
          </button>

          {/* Search */}
          <div className="flex-1 relative max-w-xl group">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جست‌وجو در ۱۵۰ هزار کتاب..."
              className="w-full py-2.5 pr-11 pl-4 rounded-full border text-sm outline-none transition-all duration-300 text-slate-100 placeholder-slate-500 bg-white/[0.05] border-white/10 focus:border-teal-400/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)]"
              style={{ fontFamily: "inherit" }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base opacity-60 group-focus-within:opacity-100 transition-opacity">🔍</span>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-2 mr-auto">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-300 hidden md:block">سلام، {user.name}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-slate-900 text-sm font-black bg-gradient-to-br from-teal-300 to-cyan-400 shadow-[0_0_16px_rgba(45,212,191,0.45)]">
                  {user.name[0]}
                </div>
              </div>
            ) : (
              <>
                <button onClick={() => onAuthClick("login")} className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold text-slate-400 hover:text-teal-300 hover:bg-white/5 transition-colors">
                  کتاب‌خانه من
                </button>
                <button onClick={() => onAuthClick("login")} className="shine-btn px-5 py-2 rounded-full text-sm font-black text-slate-900 bg-gradient-to-r from-teal-300 to-cyan-400 hover:shadow-[0_0_24px_rgba(45,212,191,0.55)] hover:scale-105 transition-all duration-300">
                  ورود
                </button>
              </>
            )}
          </div>
        </div>

        {/* Categories */}
        <nav className="flex gap-1.5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
          {CATS.map((cat, i) => (
            <button key={i} onClick={() => setActiveCat(i)}
              className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
                activeCat === i
                  ? "text-slate-900 bg-gradient-to-r from-teal-300 to-cyan-400 shadow-[0_0_16px_rgba(45,212,191,0.4)]"
                  : "text-slate-400 bg-white/[0.04] border border-white/5 hover:text-teal-300 hover:border-teal-400/40"
              }`}>
              {cat}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
