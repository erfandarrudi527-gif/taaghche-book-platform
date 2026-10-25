// صفحه اصلی
import HeroSlider from "../components/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import SwiperSlider from "../components/SwiperSlider";
import BookCard from "../components/BookCard";
import AudioCard from "../components/AudioCard";
import { BOOKS, AUDIO_BOOKS, CATEGORY_GRID } from "../data";

const STATS = [
  { n: "۱۵۰٬۰۰۰+", l: "کتاب موجود",   ic: "📚", g: "from-teal-300 to-cyan-400" },
  { n: "۵٬۰۰۰٬۰۰۰+", l: "کاربر فعال", ic: "👥", g: "from-violet-400 to-fuchsia-400" },
  { n: "۱۲٬۰۰۰+", l: "کتاب صوتی",   ic: "🎧", g: "from-amber-300 to-orange-400" },
];

export default function HomePage({ navigate }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      {/* Hero */}
      <HeroSlider />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-9">
        {STATS.map((s, i) => (
          <div key={s.l} className="glass card-hover rounded-2xl px-4 py-5 text-center anim-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="text-2xl mb-1.5">{s.ic}</div>
            <div className={`text-[21px] font-black bg-gradient-to-r ${s.g} bg-clip-text text-transparent`}>{s.n}</div>
            <div className="text-xs text-slate-500 mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Best Sellers */}
      <section className="mb-10">
        <SectionTitle>پرفروش‌ترین‌ها 🔥</SectionTitle>
        <SwiperSlider items={BOOKS} renderCard={(b) => <BookCard book={b} onNavigate={navigate} />} cardWidth={160} />
      </section>

      {/* Audio Books */}
      <section className="mb-10">
        <div className="glass rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 w-64 h-64 rounded-full bg-teal-400/15 blur-3xl" />
          <div className="relative">
            <SectionTitle>🎧 کتاب‌های صوتی</SectionTitle>
            <SwiperSlider items={AUDIO_BOOKS} renderCard={(b) => <AudioCard book={b} />} cardWidth={160} />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-10">
        <SectionTitle>تازه‌های طاقچه ✨</SectionTitle>
        <SwiperSlider items={[...BOOKS].reverse()} renderCard={(b) => <BookCard book={b} onNavigate={navigate} />} cardWidth={160} />
      </section>

      {/* Categories */}
      <section className="mb-10">
        <SectionTitle>دسته‌بندی‌ها</SectionTitle>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {CATEGORY_GRID.map((cat, i) => (
            <div key={cat.name}
              className="glass card-hover rounded-2xl py-5 px-2 text-center cursor-pointer anim-fade-up group"
              style={{ animationDelay: `${i * 0.05}s`, ["--tw-hover-glow"]: cat.glow }}>
              <div className="text-[26px] mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6 drop-shadow"
                style={{ filter: `drop-shadow(0 0 12px ${cat.glow}55)` }}>
                {cat.icon}
              </div>
              <div className="text-[12px] font-bold text-slate-300 group-hover:text-white transition-colors">{cat.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* App Banner */}
      <div className="rounded-3xl px-8 py-8 mb-10 flex items-center justify-between flex-wrap gap-6 relative overflow-hidden shadow-[0_24px_60px_-20px_rgba(225,29,72,0.4)]"
        style={{ background: "linear-gradient(120deg,#9F1239 0%,#E11D48 55%,#F97316 100%)" }}>
        <div className="absolute -left-10 -top-16 w-52 h-52 rounded-full border-[24px] border-white/10" />
        <div className="absolute right-24 -bottom-20 w-40 h-40 rounded-full bg-white/10 blur-xl" />
        <div className="relative">
          <h3 className="text-white text-2xl font-black mb-2 drop-shadow">اپ طاقچه را دانلود کنید 📲</h3>
          <p className="text-white/85 text-sm mb-5">کتاب بخوانید، هر جا که هستید</p>
          <div className="flex gap-3 flex-wrap">
            {["اپ‌استور", "گوگل‌پلی", "بازار"].map((s) => (
              <button key={s} className="bg-slate-900/85 text-white text-sm font-bold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white hover:text-rose-600 active:scale-95 transition-all duration-200 shadow-lg">
                {s}
              </button>
            ))}
          </div>
        </div>
        <span className="text-8xl hidden sm:block float-slow drop-shadow-2xl">📱</span>
      </div>
    </main>
  );
}
