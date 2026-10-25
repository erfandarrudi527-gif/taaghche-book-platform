
import { useState } from "react";
import BookCover from "../components/BookCover";
import Stars from "../components/Stars";
import SectionTitle from "../components/SectionTitle";
import SwiperSlider from "../components/SwiperSlider";
import BookCard from "../components/BookCard";
import { BOOKS, REVIEWS } from "../data";

export default function ProductPage({ book, navigate }) {
  const [inCart, setInCart]   = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [wished, setWished]   = useState(false);
  const discount = book.orig ? Math.round((1 - book.price / book.orig) * 100) : null;
  const relatedBooks = BOOKS.filter((b) => b.id !== book.id).slice(0, 6);

  return (
    <main className="max-w-6xl mx-auto px-4 py-7">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-7">
        <button onClick={() => navigate("home")} className="hover:text-teal-300 transition-colors">خانه</button>
        <span>‹</span>
        <span className="text-slate-400">{book.tags?.[0] || "ادبیات"}</span>
        <span>‹</span>
        <span className="text-slate-200 font-semibold line-clamp-1">{book.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Left column */}
        <div className="flex flex-col items-center gap-5">
          <div className="relative anim-fade-up">
            <BookCover color={book.color} title={book.title} h={250} />
            {discount && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-[0_0_18px_rgba(244,63,94,0.6)] rotate-3 z-20">
                {discount}٪ تخفیف
              </span>
            )}
          </div>

          <div className="w-full flex flex-col gap-2.5">
            <button
              onClick={() => setInCart(!inCart)}
              className={`w-full py-3.5 rounded-2xl text-sm font-black transition-all duration-300 active:scale-95 ${
                inCart
                  ? "bg-gradient-to-r from-emerald-400 to-green-500 text-slate-900 shadow-[0_0_22px_rgba(16,185,129,0.5)]"
                  : "shine-btn bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-900 shadow-[0_0_26px_rgba(45,212,191,0.4)] hover:shadow-[0_0_38px_rgba(45,212,191,0.65)]"
              }`}
            >
              {inCart ? "✓ به سبد اضافه شد" : "🛒 افزودن به سبد خرید"}
            </button>
            <button className="w-full py-3.5 rounded-2xl text-sm font-bold border border-indigo-400/35 text-indigo-300 bg-indigo-400/10 hover:bg-indigo-400 hover:text-white hover:shadow-[0_0_22px_rgba(129,140,248,0.5)] active:scale-95 transition-all duration-300">
              📖 مطالعه رایگان (نمونه)
            </button>
            <button onClick={() => setWished(!wished)}
              className={`w-full py-3 rounded-2xl text-sm font-semibold border transition-all duration-200 active:scale-95 ${
                wished ? "border-rose-400/60 text-rose-300 bg-rose-400/10 shadow-[0_0_16px_rgba(244,63,94,0.35)]" : "border-white/10 text-slate-400 hover:border-rose-400/40 hover:text-rose-300"
              }`}>
              {wished ? "❤️ در علاقه‌مندی‌ها" : "🤍 افزودن به علاقه‌مندی‌ها"}
            </button>
          </div>

          {/* Book info */}
          <div className="w-full glass rounded-2xl p-5 grid grid-cols-2 gap-y-4">
            {[["فرمت", "PDF + EPUB"], ["صفحات", book.pages], ["سال انتشار", book.year], ["ناشر", book.publisher]].map(([k, v]) => (
              <div key={k}>
                <p className="text-[11px] text-slate-500 mb-1">{k}</p>
                <p className="text-slate-200 font-bold text-xs">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="anim-fade-up" style={{ animationDelay: ".1s" }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {book.tags?.map((t) => (
                <span key={t} className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/25">{t}</span>
              ))}
            </div>
            <h1 className="text-[28px] font-black mb-2 text-slate-50">{book.title}</h1>
            <p className="text-slate-400 text-sm mb-4">نوشته <span className="text-teal-300 font-bold">{book.author}</span></p>
            <div className="flex items-center gap-3">
              <Stars rating={book.rating} size="md" />
              <span className="text-lg font-black text-amber-300">{book.rating.toLocaleString("fa-IR")}</span>
              <span className="text-sm text-slate-500">({book.ratingCount?.toLocaleString("fa-IR")} نظر)</span>
            </div>
          </div>

          {/* Price box */}
          <div className="glass rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
            <div>
              {book.orig && (
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-slate-500 text-sm line-through">{book.orig.toLocaleString("fa-IR")} تومان</span>
                  <span className="bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-black px-2.5 py-1 rounded-full">{discount}٪</span>
                </div>
              )}
              <span className="text-4xl font-black bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">{book.price.toLocaleString("fa-IR")}</span>
              <span className="text-lg text-slate-400 mr-1.5 font-bold">تومان</span>
            </div>
            <div className="flex flex-col items-end gap-1.5 text-xs text-slate-400">
              <span>⚡ دسترسی فوری پس از خرید</span>
              <span>📱 قابل مطالعه روی همه دستگاه‌ها</span>
              <span>🛡️ پشتیبانی ۲۴ ساعته</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="anim-fade-up" style={{ animationDelay: ".2s" }}>
            <div className="flex gap-1 bg-white/[0.04] rounded-2xl p-1.5 w-fit border border-white/8 mb-6">
              {[["about", "درباره کتاب"], ["reviews", "نظرات"]].map(([k, l]) => (
                <button key={k} onClick={() => setActiveTab(k)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    activeTab === k ? "bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-900 shadow-[0_0_16px_rgba(45,212,191,0.35)]" : "text-slate-400 hover:text-slate-200"}`}>
                  {l}
                </button>
              ))}
            </div>
            {activeTab === "about" && <p className="text-slate-300 text-[15px] leading-loose">{book.desc}</p>}
            {activeTab === "reviews" && (
              <div className="flex flex-col gap-4">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="glass card-hover rounded-2xl p-5 anim-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 text-sm font-black bg-gradient-to-br from-teal-300 to-indigo-400 shadow-[0_0_14px_rgba(45,212,191,0.4)]">
                          {r.name[0]}
                        </div>
                        <span className="font-bold text-sm text-slate-100">{r.name}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Stars rating={r.stars} />
                        <span className="text-xs text-slate-500">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related */}
      <section>
        <SectionTitle>کتاب‌های مشابه</SectionTitle>
        <SwiperSlider items={relatedBooks} renderCard={(b) => <BookCard book={b} onNavigate={navigate} />} cardWidth={160} />
      </section>
    </main>
  );
}
