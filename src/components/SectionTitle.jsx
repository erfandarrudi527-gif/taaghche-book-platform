// کامپوننت عنوان بخش‌ها
export default function SectionTitle({ children, dark = true }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[17px] font-black flex items-center gap-2.5">
        <span className="inline-block w-1 h-5 rounded-full bg-gradient-to-b from-teal-300 to-cyan-500 shadow-[0_0_10px_rgba(45,212,191,0.6)]" />
        <span className={dark ? "text-slate-100" : "text-slate-100"}>{children}</span>
      </h2>
      <a href="#" className="text-[13px] font-bold text-teal-300/80 hover:text-teal-200 hover:underline underline-offset-4 transition-colors">
        مشاهده همه ←
      </a>
    </div>
  );
}
