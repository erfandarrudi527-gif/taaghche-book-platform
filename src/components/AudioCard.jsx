
import BookCover from "./BookCover";

export default function AudioCard({ book }) {
  return (
    <div className="glass card-hover group rounded-2xl p-3.5 flex flex-col gap-2.5 cursor-pointer h-full select-none">
      <div className="relative self-center">
        <BookCover color={book.color} title={book.title} />
        {/* play overlay */}
        <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-black/45 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-300 to-cyan-400 text-slate-900 text-lg shadow-[0_0_22px_rgba(45,212,191,0.7)] scale-75 group-hover:scale-100 transition-transform duration-300">
            ▶
          </div>
        </div>
      </div>
      <p className="text-[13px] font-bold text-slate-100 leading-snug line-clamp-2 group-hover:text-teal-300 transition-colors">{book.title}</p>
      <p className="text-[11px] text-slate-500">{book.author}</p>
      <span className="text-[11px] font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 px-2.5 py-1 rounded-full w-fit">⏱ {book.duration}</span>
    </div>
  );
}
