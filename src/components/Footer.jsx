export default function Footer() {
  return (
    <footer className="relative mt-6 border-t border-white/5 bg-[#080d18] text-white">
      {/* top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-9 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(175px,1fr))" }}>
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.4)] bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-500">
                <span className="text-slate-900 text-xl font-black">ط</span>
              </div>
              <span className="text-xl font-black grad-text">طاقچه</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">بهترین سایت خرید کتاب الکترونیک و صوتی با بیش از ۱۵۰ هزار عنوان</p>
          </div>
          {[
            { title: "دسترسی سریع", links: ["صفحه اصلی", "کتاب رایگان", "پرفروش‌ها", "جدیدترین‌ها"] },
            { title: "پشتیبانی",    links: ["تماس با ما", "سوالات متداول", "شرایط استفاده", "حریم خصوصی"] },
            { title: "دانلود اپ",   links: ["اپ‌استور", "گوگل‌پلی", "بازار", "مایکت"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-black text-sm mb-4 text-slate-200">{col.title}</h4>
              {col.links.map((link) => (
                <a key={link} href="#" className="block text-sm text-slate-500 hover:text-teal-300 mb-2.5 transition-colors">{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-6 flex justify-between flex-wrap gap-4 items-center">
          <p className="text-xs text-slate-600">© ۱۴۰۳ طاقچه — تمام حقوق محفوظ است</p>
          <div className="flex gap-2.5">
            {["📷", "🐦", "📘", "📺"].map((ic, i) => (
              <span key={i} className="w-9 h-9 rounded-full glass !border-white/10 flex items-center justify-center text-base cursor-pointer opacity-50 hover:opacity-100 hover:border-teal-400/50 hover:shadow-[0_0_14px_rgba(45,212,191,0.35)] hover:-translate-y-1 transition-all duration-200">{ic}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
