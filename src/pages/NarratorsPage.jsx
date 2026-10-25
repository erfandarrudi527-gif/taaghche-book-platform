
import { useState } from "react";
import { Headphones, Mic, Star, Play, Pause, Search, ChevronLeft, Users, BookOpen, Clock } from "lucide-react";
import { PRIMARY, BORDER, DARK, LIGHT_BG } from "../data";

const NARRATORS = [
  {
    id: 1,
    name: "احمد آقالو",
    avatar: "آ",
    avatarColor: "#8B5CF6",
    specialty: "ادبیات کلاسیک",
    rating: 4.9,
    booksCount: 48,
    totalHours: 312,
    followers: 12400,
    bio: "صداپیشه و گوینده حرفه‌ای با بیش از ۱۵ سال تجربه در کتاب‌های صوتی. فارغ‌التحصیل تئاتر از دانشگاه تهران.",
    tags: ["ادبیات","رمان","کلاسیک"],
    featured: [
      { title: "صد سال تنهایی", duration: "۱۴ ساعت", isbn: "9780060883287" },
      { title: "جنایت و مکافات", duration: "۲۲ ساعت", isbn: "9780140449136" },
      { title: "بینوایان", duration: "۳۵ ساعت", isbn: "9780140444308" },
    ],
    sample: true,
  },
  {
    id: 2,
    name: "مریم صادقی",
    avatar: "م",
    avatarColor: "#EC4899",
    specialty: "روانشناسی و خودیاری",
    rating: 4.8,
    booksCount: 36,
    totalHours: 198,
    followers: 9800,
    bio: "گوینده رادیو سابق با صدای گرم و آرامش‌بخش. تخصص در کتاب‌های روانشناسی و توسعه فردی.",
    tags: ["روانشناسی","خودیاری","معنوی"],
    featured: [
      { title: "قدرت حال", duration: "۸ ساعت", isbn: "9781577314806" },
      { title: "هفت عادت", duration: "۱۲ ساعت", isbn: "9780743269513" },
      { title: "مدیریت زمان", duration: "۶ ساعت", isbn: "9780749939526" },
    ],
    sample: true,
  },
  {
    id: 3,
    name: "رضا کریمی",
    avatar: "ر",
    avatarColor: "#F59E0B",
    specialty: "علمی‌تخیلی و فانتزی",
    rating: 4.7,
    booksCount: 29,
    totalHours: 245,
    followers: 7200,
    bio: "بازیگر تئاتر و صداپیشه متخصص در ژانرهای علمی‌تخیلی با خوانش پرانرژی و جذاب.",
    tags: ["علمی‌تخیلی","فانتزی","ماجرایی"],
    featured: [
      { title: "فارنهایت ۴۵۱", duration: "۵ ساعت", isbn: "9781451673319" },
      { title: "کیمیاگر", duration: "۵ ساعت", isbn: "9780062315007" },
      { title: "شازده کوچولو", duration: "۳ ساعت", isbn: "9780156012195" },
    ],
    sample: false,
  },
  {
    id: 4,
    name: "فاطمه نوری",
    avatar: "ف",
    avatarColor: "#10B981",
    specialty: "تاریخ و فلسفه",
    rating: 4.9,
    booksCount: 41,
    totalHours: 280,
    followers: 15600,
    bio: "دکترای فلسفه و گوینده حرفه‌ای. خوانش دقیق و روشن برای متون علمی و فلسفی.",
    tags: ["فلسفه","تاریخ","علوم"],
    featured: [
      { title: "ترس و لرز", duration: "۵ ساعت", isbn: "9780140444490" },
      { title: "بینوایان", duration: "۱۴ ساعت", isbn: "9780140444308" },
      { title: "هفت عادت", duration: "۱۲ ساعت", isbn: "9780743269513" },
    ],
    sample: true,
  },
  {
    id: 5,
    name: "سامان درخشان",
    avatar: "س",
    avatarColor: "#3B82F6",
    specialty: "کسب‌وکار و مدیریت",
    rating: 4.6,
    booksCount: 22,
    totalHours: 134,
    followers: 5400,
    bio: "مشاور کسب‌وکار و گوینده متخصص در ادبیات مدیریتی با لحنی حرفه‌ای و تأثیرگذار.",
    tags: ["کسب‌وکار","مدیریت","موفقیت"],
    featured: [
      { title: "مدیریت زمان", duration: "۶ ساعت", isbn: "9780749939526" },
      { title: "هفت عادت", duration: "۱۲ ساعت", isbn: "9780743269513" },
      { title: "قدرت حال", duration: "۸ ساعت", isbn: "9781577314806" },
    ],
    sample: false,
  },
  {
    id: 6,
    name: "نیلوفر احمدی",
    avatar: "ن",
    avatarColor: "#6366F1",
    specialty: "ادبیات کودک و نوجوان",
    rating: 4.8,
    booksCount: 55,
    totalHours: 178,
    followers: 18900,
    bio: "صداپیشه و مجری کودک با صدایی شاد و پرانرژی. محبوب‌ترین گوینده بخش کودک طاقچه.",
    tags: ["کودک","نوجوان","داستان"],
    featured: [
      { title: "شازده کوچولو", duration: "۳ ساعت", isbn: "9780156012195" },
      { title: "کیمیاگر", duration: "۵ ساعت", isbn: "9780062315007" },
      { title: "بینوایان", duration: "۱۴ ساعت", isbn: "9780140444308" },
    ],
    sample: true,
  },
];

const SPECIALTIES = ["همه", "ادبیات کلاسیک", "روانشناسی و خودیاری", "علمی‌تخیلی و فانتزی", "تاریخ و فلسفه", "کسب‌وکار و مدیریت", "ادبیات کودک و نوجوان"];

function NarratorCard({ narrator, onClick }) {
  const [playing, setPlaying] = useState(false);
  const [followed, setFollowed] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      style={{ borderColor: BORDER }}
      onClick={() => onClick(narrator)}
    >
  
      <div className="p-5 pb-4">
        <div className="flex items-start gap-4">
    
          <div className="relative flex-shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-md"
              style={{ background: narrator.avatarColor }}
            >
              {narrator.avatar}
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: PRIMARY }}
            >
              <Mic size={10} color="#fff" />
            </div>
          </div>


          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-black text-gray-900 text-[15px]">{narrator.name}</h3>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Star size={13} fill="#FBBF24" stroke="#FBBF24" />
                <span className="text-sm font-bold text-gray-700">{narrator.rating}</span>
              </div>
            </div>
            <p className="text-xs font-semibold mt-0.5" style={{ color: PRIMARY }}>{narrator.specialty}</p>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-2">{narrator.bio}</p>
          </div>
        </div>


        <div className="flex flex-wrap gap-1.5 mt-3">
          {narrator.tags.map(t => (
            <span key={t} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
              style={{ background: "#e6f7f7", color: PRIMARY }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-b py-3 mx-5 text-center gap-2" style={{ borderColor: BORDER }}>
        {[
          { icon: BookOpen,   val: narrator.booksCount,                  label: "کتاب" },
          { icon: Clock,      val: narrator.totalHours + " ساعت",        label: "مجموع" },
          { icon: Users,      val: (narrator.followers/1000).toFixed(1)+"k", label: "دنبال‌کننده" },
        ].map(({ icon: Icon, val, label }) => (
          <div key={label}>
            <Icon size={14} className="mx-auto mb-1" style={{ color: PRIMARY }} />
            <p className="text-[13px] font-black text-gray-800">{val}</p>
            <p className="text-[10px] text-gray-400">{label}</p>
          </div>
        ))}
      </div>

 
      <div className="flex gap-2 p-4" onClick={e => e.stopPropagation()}>
        {narrator.sample && (
          <button
            onClick={() => setPlaying(!playing)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors"
            style={{ color: PRIMARY, borderColor: PRIMARY, background: playing ? PRIMARY : "#e6f7f7" }}
          >
            {playing
              ? <><Pause size={13} color="#fff" /><span className="text-white">در حال پخش</span></>
              : <><Play size={13} /><span>نمونه صدا</span></>}
          </button>
        )}
        <button
          onClick={() => setFollowed(!followed)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-colors"
          style={{
            background: followed ? PRIMARY : "transparent",
            color: followed ? "#fff" : PRIMARY,
            border: `1.5px solid ${PRIMARY}`,
          }}
        >
          {followed ? "✓ دنبال می‌کنید" : "+ دنبال کردن"}
        </button>
      </div>
    </div>
  );
}

function NarratorModal({ narrator, onClose }) {
  const [playing, setPlaying] = useState(false);
  const [followed, setFollowed] = useState(false);

  if (!narrator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}>

        <div className="relative h-28 rounded-t-3xl flex items-end px-6 pb-4"
          style={{ background: `linear-gradient(135deg, ${narrator.avatarColor}, ${narrator.avatarColor}99)` }}>
          <button onClick={onClose}
            className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-colors">
            ×
          </button>
          <div className="flex items-end gap-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg -mb-8 border-4 border-white"
              style={{ background: narrator.avatarColor }}>
              {narrator.avatar}
            </div>
          </div>
        </div>

        <div className="px-6 pt-10 pb-6">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-xl font-black text-gray-900">{narrator.name}</h2>
              <p className="text-sm font-semibold" style={{ color: PRIMARY }}>{narrator.specialty}</p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full">
              <Star size={14} fill="#FBBF24" stroke="#FBBF24" />
              <span className="font-black text-gray-800">{narrator.rating}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mt-3 mb-4">{narrator.bio}</p>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { icon: BookOpen,   val: narrator.booksCount + " کتاب",     label: "روایت شده" },
              { icon: Clock,      val: narrator.totalHours + " ساعت",     label: "محتوای صوتی" },
              { icon: Users,      val: (narrator.followers/1000).toFixed(1)+"k", label: "دنبال‌کننده" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="text-center rounded-xl py-3 px-2 border" style={{ borderColor: BORDER, background: LIGHT_BG }}>
                <Icon size={18} className="mx-auto mb-1" style={{ color: PRIMARY }} />
                <p className="text-sm font-black text-gray-800">{val}</p>
                <p className="text-[11px] text-gray-400">{label}</p>
              </div>
            ))}
          </div>

      
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Headphones size={16} style={{ color: PRIMARY }} /> کتاب‌های روایت‌شده
          </h3>
          <div className="flex flex-col gap-2.5 mb-5">
            {narrator.featured.map((book, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: BORDER }}>
                <img
                  src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-S.jpg`}
                  alt={book.title}
                  className="w-10 h-14 object-cover rounded-lg flex-shrink-0"
                  onError={(e) => { e.target.style.display="none"; }}
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{book.title}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                    <Clock size={10} /> {book.duration}
                  </p>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: "#e6f7f7", color: PRIMARY }}>
                  <Headphones size={11} /> گوش دادن
                </button>
              </div>
            ))}
          </div>


          <div className="flex gap-3">
            {narrator.sample && (
              <button onClick={() => setPlaying(!playing)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all"
                style={{ color: playing ? "#fff" : PRIMARY, borderColor: PRIMARY, background: playing ? PRIMARY : "#e6f7f7" }}>
                {playing ? <Pause size={15} /> : <Play size={15} />}
                {playing ? "در حال پخش" : "نمونه صدا"}
              </button>
            )}
            <button onClick={() => setFollowed(!followed)}
              className="flex-1 py-3 rounded-xl text-sm font-black transition-colors"
              style={{ background: followed ? "#e6f7f7" : PRIMARY, color: followed ? PRIMARY : "#fff", border: `2px solid ${PRIMARY}` }}>
              {followed ? "✓ دنبال می‌کنید" : "+ دنبال کردن"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NarratorsPage() {
  const [search, setSearch] = useState("");
  const [activeSpec, setActiveSpec] = useState("همه");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedNarrator, setSelectedNarrator] = useState(null);

  const filtered = NARRATORS
    .filter(n => activeSpec === "همه" || n.specialty === activeSpec)
    .filter(n => n.name.includes(search) || n.specialty.includes(search) || n.tags.some(t => t.includes(search)))
    .sort((a, b) => sortBy === "rating" ? b.rating - a.rating : sortBy === "books" ? b.booksCount - a.booksCount : b.followers - a.followers);

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">

      <div className="rounded-2xl px-7 py-8 mb-8 flex items-center justify-between flex-wrap gap-5"
        style={{ background: "linear-gradient(135deg,#00a2a4,#007b7d)" }}>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Mic size={22} color="#fff" />
            <h1 className="text-white text-2xl font-black">صداپیشگان طاقچه</h1>
          </div>
          <p className="text-white/80 text-sm mb-4">بهترین صداها برای بهترین کتاب‌ها</p>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <span className="flex items-center gap-1"><Mic size={14} /> {NARRATORS.length}+ صداپیشه</span>
            <span className="flex items-center gap-1"><Headphones size={14} /> ۱۲٬۰۰۰+ ساعت محتوا</span>
          </div>
        </div>
        <Mic size={80} color="rgba(255,255,255,0.15)" />
      </div>


      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex-1 relative min-w-48">
          <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="جست‌وجوی صداپیشه..."
            className="w-full py-2.5 pr-10 pl-4 rounded-xl border text-sm outline-none"
            style={{ borderColor: BORDER, background: "#fff", fontFamily: "inherit" }}
            onFocus={e => e.target.style.borderColor = PRIMARY}
            onBlur={e => e.target.style.borderColor = BORDER} />
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-xl border text-sm outline-none font-semibold"
          style={{ borderColor: BORDER, background: "#fff", color: DARK, fontFamily: "inherit" }}>
          <option value="rating">بالاترین امتیاز</option>
          <option value="books">بیشترین کتاب</option>
          <option value="followers">بیشترین دنبال‌کننده</option>
        </select>
      </div>


      <div className="flex gap-2 overflow-x-auto pb-2 mb-6" style={{ scrollbarWidth: "none" }}>
        {SPECIALTIES.map(s => (
          <button key={s} onClick={() => setActiveSpec(s)}
            className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0 transition-colors"
            style={{
              background: activeSpec === s ? PRIMARY : "#fff",
              color: activeSpec === s ? "#fff" : "#6B7280",
              border: `1.5px solid ${activeSpec === s ? PRIMARY : BORDER}`,
            }}>
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filtered.map(n => (
          <NarratorCard key={n.id} narrator={n} onClick={setSelectedNarrator} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Mic size={40} className="mx-auto mb-3 opacity-30" />
          <p className="font-semibold">صداپیشه‌ای یافت نشد</p>
        </div>
      )}

      {selectedNarrator && (
        <NarratorModal narrator={selectedNarrator} onClose={() => setSelectedNarrator(null)} />
      )}
    </main>
  );
}
