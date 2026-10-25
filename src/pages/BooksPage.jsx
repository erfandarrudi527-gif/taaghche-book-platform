
import { useState } from "react";
import { Search, SlidersHorizontal, X, BookOpen } from "lucide-react";
import BookCard from "../components/BookCard";
import { BOOKS, PRIMARY, BORDER, DARK, LIGHT_BG } from "../data";

const SORT_OPTIONS = [
  { value: "popular",  label: "پرفروش‌ترین" },
  { value: "newest",   label: "جدیدترین" },
  { value: "cheapest", label: "ارزان‌ترین" },
  { value: "rating",   label: "بالاترین امتیاز" },
];

const ALL_TAGS = [...new Set(BOOKS.flatMap(b => b.tags))];

export default function BooksPage({ navigate }) {
  const [search, setSearch]       = useState("");
  const [sortBy, setSortBy]       = useState("popular");
  const [activeTags, setActiveTags] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [maxPrice, setMaxPrice]   = useState(100000);

  const toggleTag = (tag) =>
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  const filtered = BOOKS
    .filter(b => b.title.includes(search) || b.author.includes(search))
    .filter(b => activeTags.length === 0 || b.tags.some(t => activeTags.includes(t)))
    .filter(b => b.price <= maxPrice)
    .sort((a, b) => {
      if (sortBy === "cheapest") return a.price - b.price;
      if (sortBy === "rating")   return b.rating - a.rating;
      if (sortBy === "newest")   return b.id - a.id;
      return (b.ratingCount || 0) - (a.ratingCount || 0);
    });

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#e6f7f7" }}>
          <BookOpen size={20} style={{ color: PRIMARY }} />
        </div>
        <div>
          <h1 className="text-xl font-black" style={{ color: DARK }}>همه کتاب‌ها</h1>
          <p className="text-xs text-gray-400">{filtered.length} کتاب یافت شد</p>
        </div>
      </div>


      <div className="flex gap-3 mb-4 flex-wrap">
        <div className="flex-1 relative min-w-48">
          <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="جست‌وجوی کتاب یا نویسنده..."
            className="w-full py-2.5 pr-10 pl-4 rounded-xl border text-sm outline-none"
            style={{ borderColor: BORDER, background: "#fff", fontFamily: "inherit" }}
            onFocus={e => e.target.style.borderColor = PRIMARY}
            onBlur={e => e.target.style.borderColor = BORDER} />
        </div>

        <select value={sortBy} onChange={e => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-xl border text-sm font-semibold outline-none"
          style={{ borderColor: BORDER, background: "#fff", fontFamily: "inherit", color: DARK }}>
          {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <button onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors"
          style={{
            borderColor: showFilter ? PRIMARY : BORDER,
            background: showFilter ? "#e6f7f7" : "#fff",
            color: showFilter ? PRIMARY : "#6B7280",
          }}>
          <SlidersHorizontal size={15} /> فیلتر
          {activeTags.length > 0 && (
            <span className="w-5 h-5 rounded-full text-white text-[10px] font-black flex items-center justify-center"
              style={{ background: PRIMARY }}>{activeTags.length}</span>
          )}
        </button>
      </div>

      {showFilter && (
        <div className="bg-white rounded-2xl border p-5 mb-5" style={{ borderColor: BORDER }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">فیلترها</h3>
            {activeTags.length > 0 && (
              <button onClick={() => setActiveTags([])}
                className="flex items-center gap-1 text-xs font-semibold text-red-400 hover:text-red-500">
                <X size={12} /> حذف همه
              </button>
            )}
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 mb-2">دسته‌بندی</p>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map(tag => (
                <button key={tag} onClick={() => toggleTag(tag)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors"
                  style={{
                    background: activeTags.includes(tag) ? PRIMARY : "#f9f9f9",
                    color: activeTags.includes(tag) ? "#fff" : "#6B7280",
                    borderColor: activeTags.includes(tag) ? PRIMARY : BORDER,
                  }}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2">
              حداکثر قیمت: <span className="font-black" style={{ color: PRIMARY }}>{maxPrice.toLocaleString()} تومان</span>
            </p>
            <input type="range" min={10000} max={100000} step={5000}
              value={maxPrice} onChange={e => setMaxPrice(+e.target.value)}
              className="w-full accent-[#00a2a4]" style={{ direction: "ltr" }} />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>۱۰٬۰۰۰</span><span>۱۰۰٬۰۰۰ تومان</span>
            </div>
          </div>
        </div>
      )}


      {activeTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeTags.map(tag => (
            <span key={tag} onClick={() => toggleTag(tag)}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer text-white"
              style={{ background: PRIMARY }}>
              {tag} <X size={11} />
            </span>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map(book => (
            <BookCard key={book.id} book={book} onNavigate={navigate} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
          <p className="font-semibold">کتابی یافت نشد</p>
          <p className="text-sm mt-1">فیلترها را تغییر دهید</p>
        </div>
      )}
    </main>
  );
}
