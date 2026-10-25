import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AuthPage from "./pages/AuthPage";
import { DARK_BG } from "./data";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: ${DARK_BG}; }
  ::-webkit-scrollbar { height: 6px; width: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(45,212,191,.25); border-radius: 8px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(45,212,191,.5); }
  ::selection { background: rgba(45,212,191,.35); color: #fff; }

  @keyframes fadeUp   { from { opacity: 0; transform: translateY(22px) } to { opacity: 1; transform: translateY(0) } }
  @keyframes fadeIn   { from { opacity: 0 } to { opacity: 1 } }
  @keyframes floaty   { 0%,100% { transform: translateY(0) rotate(-3deg) } 50% { transform: translateY(-14px) rotate(3deg) } }
  @keyframes blobMove { 0%,100% { transform: translate(0,0) scale(1) } 33% { transform: translate(40px,-30px) scale(1.15) } 66% { transform: translate(-30px,25px) scale(.9) } }
  @keyframes shimmer  { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }

  .anim-fade-up  { animation: fadeUp .6s cubic-bezier(.22,1,.36,1) both }
  .anim-fade-in  { animation: fadeIn .5s ease both }
  .float-slow    { animation: floaty 5s ease-in-out infinite }
  .blob          { position: fixed; border-radius: 9999px; filter: blur(90px); pointer-events: none; z-index: 0; animation: blobMove 16s ease-in-out infinite }
  .glass         { background: rgba(255,255,255,.045); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(255,255,255,.08) }
  .glass-strong  { background: rgba(15,23,42,.7); backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); border: 1px solid rgba(255,255,255,.08) }
  .grad-text     { background: linear-gradient(90deg,#2DD4BF,#38BDF8,#818CF8); -webkit-background-clip: text; background-clip: text; color: transparent }
  .grad-text-hot { background: linear-gradient(90deg,#F59E0B,#F43F5E,#A855F7); -webkit-background-clip: text; background-clip: text; color: transparent }
  .shine-btn     { position: relative; overflow: hidden }
  .shine-btn::after { content:''; position:absolute; inset:0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,.3) 50%, transparent 70%); background-size: 200% 100%; animation: shimmer 2.8s linear infinite }
  .card-hover    { transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .3s }
  .card-hover:hover { transform: translateY(-6px); box-shadow: 0 18px 45px -12px rgba(45,212,191,.25); border-color: rgba(45,212,191,.4) }
`;

export default function App() {
  const [page, setPage]                 = useState("home");
  const [selectedBook, setSelectedBook] = useState(null);
  const [authMode, setAuthMode]         = useState("login");
  const [user, setUser]                 = useState(null);

  const navigate = (target, data) => {
    if (target === "product" && data) setSelectedBook(data);
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAuthClick   = (mode) => { setAuthMode(mode); navigate("auth"); };
  const handleAuthSuccess = (userData) => { setUser(userData); navigate("home"); };

  return (
    <div dir="rtl" className="min-h-screen relative text-slate-100" style={{ fontFamily: "'Vazirmatn','Tahoma',sans-serif", background: DARK_BG }}>
      <style>{GLOBAL_CSS}</style>

      {/* ambient glow blobs */}
      <div className="blob" style={{ top: "-10%", right: "-8%", width: 420, height: 420, background: "rgba(45,212,191,.14)" }} />
      <div className="blob" style={{ bottom: "-15%", left: "-10%", width: 480, height: 480, background: "rgba(99,102,241,.13)", animationDelay: "-8s" }} />
      <div className="blob" style={{ top: "35%", left: "40%", width: 300, height: 300, background: "rgba(244,63,94,.07)", animationDelay: "-4s" }} />

      <div className="relative z-10">
        {page !== "auth" && (
          <Header navigate={navigate} user={user} onAuthClick={handleAuthClick} />
        )}

        <div key={page} className="anim-fade-in">
          {page === "home"    && <HomePage navigate={navigate} />}
          {page === "product" && selectedBook && <ProductPage book={selectedBook} navigate={navigate} />}
          {page === "auth"    && <AuthPage mode={authMode} onSuccess={handleAuthSuccess} />}
        </div>

        {page !== "auth" && <Footer />}
      </div>
    </div>
  );
}
