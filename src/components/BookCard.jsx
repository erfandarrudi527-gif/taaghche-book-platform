import { useState } from "react";
import BookCover from "./BookCover";
import Stars from "./Stars";

export default function BookCard({ book, onNavigate }) {
  const [wished, setWished] = useState(false);
  const discount = book.orig ? Math.round((1 - book.price / book.orig) * 100) : null;

  return (
    <div
      onClick={() => onNavigate && onNavigate("product", book)}
      className="glass card-hover rounded-2xl p-3.5 flex flex-col gap-2 cursor-pointer h-full select-none group"
    >
      <div className="relative self-center">
        <BookCover color={book.color} title={book.title} />
        {book.badge && (
          <span className="absolute -top-1.5 -right-1.5 text-[10px] font-black px-2.5 py-1 rounded-full text-slate-900 bg-gradient-to-r from-amber-300 to-orange-400 shadow-[0_0_14px_rgba(251,191,36,0.55)] z-10">
            {book.badge}
          </span>
        )}
        {discount && (
          <span className="absolute -bottom-1.5 -left-1.5 bg-gradient-to-r from-rose-500 to-red-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-[0_0_14px_rgba(244,63,94,0.55)] z-10">
            {discount}٪
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className={`absolute top-2 left-2 rounded-full w-7 h-7 flex items-center justify-center text-sm backdrop-blur transition-all duration-200 active:scale-90 z-10 ${
            wished ? "bg-rose-500/30 border border-rose-400/60 shadow-[0_0_12px_rgba(244,63,94,0.5)] scale-110" : "bg-black/30 border border-white/15 opacity-0 group-hover:opacity-100 hover:bg-black/50"
          }`}
        >
          {wished ? "❤️" : "🤍"}
        </button>
      </div>

      <p className="text-[13px] font-bold text-slate-100 leading-snug line-clamp-2 mt-1.5 group-hover:text-teal-300 transition-colors">{book.title}</p>
      <p className="text-[11px] text-slate-500">{book.author}</p>

      <div className="flex items-center gap-1">
        <Stars rating={book.rating} />
        <span className="text-[10px] text-slate-500">({book.ratingCount?.toLocaleString("fa-IR")})</span>
      </div>

      <div className="mt-auto flex flex-col gap-0.5">
        {book.orig && (
          <span className="text-[11px] text-slate-600 line-through">{book.orig.toLocaleString("fa-IR")} تومان</span>
        )}
        <span className="text-[13.5px] font-black text-teal-300">{book.price.toLocaleString("fa-IR")} <span className="text-[10px] font-semibold text-slate-400">تومان</span></span>
      </div>

      <button
        onClick={(e) => e.stopPropagation()}
        className="w-full py-2 rounded-xl text-[12px] font-bold text-teal-300 border border-teal-400/30 bg-teal-400/10 hover:bg-teal-400 hover:text-slate-900 hover:shadow-[0_0_18px_rgba(45,212,191,0.45)] active:scale-95 transition-all duration-200"
      >
        + افزودن به سبد
      </button>
    </div>
  );
}
