export const PRIMARY  = "#2DD4BF";
export const PRIMARY_DARK = "#0D9488";
export const PRIMARY_LIGHT = "rgba(45,212,191,0.12)";
export const ACCENT   = "#818CF8";
export const HOT      = "#F43F5E";
export const DARK     = "#0B1120";
export const DARK_BG  = "#0B1120";
export const LIGHT_BG = "#0F172A";
export const SURFACE  = "rgba(255,255,255,0.045)";
export const BORDER   = "rgba(255,255,255,0.09)";

export const CATS = [
  "کتاب رایگان","ادبیات","تاریخ","داستان و رمان","روانشناسی",
  "کسب‌وکار","علوم","فلسفه","کودک و نوجوان","آموزشی",
  "هنر","کتاب‌های صوتی","خلاصه کتاب","دین و مذهب",
];

export const BOOKS = [
  { id:1, title:"صد سال تنهایی",   author:"گابریل گارسیا مارکز", price:42000, orig:56000, badge:"پرفروش", color:"linear-gradient(150deg,#8B5CF6,#D946EF)", pages:"۴۲۸",  year:"۱۳۶۷", publisher:"نشر مجید",    rating:4.8, ratingCount:2341, desc:"رمان مشهور گارسیا مارکز که داستان هفت نسل از خانواده بوئندیا را روایت می‌کند.", tags:["ادبیات","رمان","کلاسیک"] },
  { id:2, title:"بینوایان",         author:"ویکتور هوگو",          price:38000, orig:50000, badge:"جدید",    color:"linear-gradient(150deg,#EC4899,#F43F5E)", pages:"۱۲۳۴", year:"۱۳۵۸", publisher:"نشر ققنوس",  rating:4.7, ratingCount:1876, desc:"یکی از شاهکارهای ادبیات جهان. داستان ژان والژان که به خاطر یک قرص نان زندانی می‌شود.", tags:["ادبیات","رمان","فرانسه"] },
  { id:3, title:"فارنهایت ۴۵۱",   author:"ری بردبری",            price:29000, orig:38000, badge:null,      color:"linear-gradient(150deg,#F59E0B,#EF4444)", pages:"۲۵۶",  year:"۱۳۸۲", publisher:"نشر چشمه",   rating:4.6, ratingCount:987,  desc:"رمانی علمی-تخیلی که در آن کتاب‌ها ممنوع هستند.", tags:["علمی-تخیلی","دیستوپیا"] },
  { id:4, title:"جنایت و مکافات", author:"داستایفسکی",           price:45000, orig:60000, badge:"تخفیف",   color:"linear-gradient(150deg,#10B981,#14B8A6)", pages:"۶۵۰",  year:"۱۳۷۹", publisher:"نشر نیلوفر", rating:4.9, ratingCount:3102, desc:"رمان روسی کلاسیک درباره دانشجوی فقیری که یک صاحب‌خانه را می‌کشد.", tags:["ادبیات","روانشناسی","روسی"] },
  { id:5, title:"کیمیاگر",         author:"پائولو کوئلیو",        price:22000, orig:28000, badge:"پرفروش", color:"linear-gradient(150deg,#3B82F6,#6366F1)", pages:"۱۸۵",  year:"۱۳۸۰", publisher:"نشر کاروان", rating:4.5, ratingCount:5670, desc:"داستان سانتیاگو، چوپان جوانی که در جستجوی گنج سفر می‌کند.", tags:["انگیزشی","داستان","فلسفی"] },
  { id:6, title:"شازده کوچولو",   author:"آنتوان اگزوپری",       price:18000, orig:24000, badge:null,      color:"linear-gradient(150deg,#6366F1,#8B5CF6)", pages:"۱۱۲",  year:"۱۳۶۰", publisher:"نشر قدیانی", rating:4.9, ratingCount:8923, desc:"داستانی کوتاه اما عمیق درباره یک شازده کوچک از سیاره دیگر.", tags:["کودک","فلسفی","کلاسیک"] },
  { id:7, title:"ترس و لرز",       author:"کیرکگور",              price:33000, orig:44000, badge:"تخفیف",   color:"linear-gradient(150deg,#EF4444,#F97316)", pages:"۱۹۸",  year:"۱۳۸۵", publisher:"نشر مرکز",   rating:4.3, ratingCount:432,  desc:"اثر فیلسوف دانمارکی که ایمان و اخلاق را بررسی می‌کند.", tags:["فلسفه","دین","کلاسیک"] },
  { id:8, title:"قدرت حال",        author:"اکهارت تول",           price:27000, orig:35000, badge:null,      color:"linear-gradient(150deg,#14B8A6,#3B82F6)", pages:"۲۳۶",  year:"۱۳۹۰", publisher:"نشر آموخته", rating:4.6, ratingCount:2187, desc:"کتابی درباره اهمیت زندگی در لحظه حال.", tags:["خودیاری","معنوی","روانشناسی"] },
];

export const AUDIO_BOOKS = [
  { id:10, title:"ترس و لرز",    author:"سورن کیرکگور",  duration:"۵ ساعت",  color:"linear-gradient(150deg,#EF4444,#F97316)" },
  { id:11, title:"قدرت حال",     author:"اکهارت تول",    duration:"۸ ساعت",  color:"linear-gradient(150deg,#8B5CF6,#D946EF)" },
  { id:12, title:"مدیریت زمان", author:"برایان تریسی",  duration:"۶ ساعت",  color:"linear-gradient(150deg,#14B8A6,#22D3EE)" },
  { id:13, title:"هفت عادت",     author:"استیون کاوی",   duration:"۱۲ ساعت", color:"linear-gradient(150deg,#F97316,#FBBF24)" },
  { id:14, title:"بینوایان",     author:"ویکتور هوگو",   duration:"۱۴ ساعت", color:"linear-gradient(150deg,#EC4899,#F43F5E)" },
  { id:15, title:"کیمیاگر",      author:"پائولو کوئلیو", duration:"۵ ساعت",  color:"linear-gradient(150deg,#3B82F6,#6366F1)" },
];

export const HERO_BANNERS = [
  { id:1, title:"جشنواره بهاره کتاب",     subtitle:"تا ۵۰٪ تخفیف روی بهترین کتاب‌ها",        btn:"مشاهده جشنواره",  bg:"linear-gradient(120deg,#0F766E 0%,#0891B2 60%,#0EA5E9 100%)", btnColor:"#0B1120", emoji:"📖" },
  { id:2, title:"اشتراک ویژه طاقچه",      subtitle:"دسترسی نامحدود به ۱۵۰ هزار کتاب",        btn:"شروع اشتراک",     bg:"linear-gradient(120deg,#4C1D95 0%,#7C3AED 55%,#A855F7 100%)", btnColor:"#fff", emoji:"🎧" },
  { id:3, title:"خلاصه کتاب‌های پرفروش", subtitle:"در ۱۵ دقیقه مهم‌ترین ایده‌ها را بخوانید", btn:"مشاهده خلاصه‌ها", bg:"linear-gradient(120deg,#9F1239 0%,#E11D48 55%,#F97316 100%)", btnColor:"#fff", emoji:"⚡" },
];

export const REVIEWS = [
  { name:"علی محمدی",  stars:5, text:"کتاب فوق‌العاده‌ای بود. قطعاً یکی از بهترین‌هایی که خونده‌ام.", date:"۱۴۰۳/۰۲/۱۵" },
  { name:"سارا احمدی", stars:5, text:"نوشته روان و جذاب. نمی‌تونستم زمین بذارمش.",               date:"۱۴۰۳/۰۱/۲۸" },
  { name:"محمد رضایی", stars:4, text:"کلاسیک واقعی. ترجمه هم خوب بود.",                           date:"۱۴۰۲/۱۲/۱۰" },
];

export const CATEGORY_GRID = [
  { name:"ادبیات",    icon:"📚", glow:"#8B5CF6" },
  { name:"روانشناسی",icon:"🧠", glow:"#EC4899" },
  { name:"تاریخ",     icon:"🏛️", glow:"#F59E0B" },
  { name:"کسب‌وکار", icon:"💼", glow:"#10B981" },
  { name:"علوم",      icon:"🔬", glow:"#3B82F6" },
  { name:"هنر",       icon:"🎨", glow:"#D946EF" },
  { name:"فلسفه",     icon:"🤔", glow:"#F97316" },
  { name:"کودک",      icon:"🧸", glow:"#F43F5E" },
];
