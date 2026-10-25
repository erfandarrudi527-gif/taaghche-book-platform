
import { useState } from "react";

export default function AuthPage({ mode: initMode, onSuccess }) {
  const [mode, setMode] = useState(initMode || "login");

  const [loginEmail, setLoginEmail]       = useState("");
  const [loginPass, setLoginPass]         = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [loginLoading, setLoginLoading]   = useState(false);
  const [loginErrors, setLoginErrors]     = useState({});

  const [firstName, setFirstName]             = useState("");
  const [lastName, setLastName]               = useState("");
  const [regEmail, setRegEmail]               = useState("");
  const [regPass, setRegPass]                 = useState("");
  const [regPassConfirm, setRegPassConfirm]   = useState("");
  const [showRegPass, setShowRegPass]         = useState(false);
  const [showRegPassC, setShowRegPassC]       = useState(false);
  const [regLoading, setRegLoading]           = useState(false);
  const [regErrors, setRegErrors]             = useState({});

  const ic = (err) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 font-[inherit] text-slate-100 placeholder-slate-600 ` +
    (err
      ? "border-rose-400/70 bg-rose-500/10 shadow-[0_0_0_4px_rgba(244,63,94,0.08)]"
      : "border-white/10 bg-white/[0.05] focus:border-teal-400/60 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(45,212,191,0.1)]");

  const handleLogin = () => {
    const errs = {};
    if (!loginEmail.trim()) errs.loginEmail = "ایمیل را وارد کنید";
    if (!loginPass)          errs.loginPass  = "رمز عبور را وارد کنید";
    if (Object.keys(errs).length) { setLoginErrors(errs); return; }
    setLoginErrors({});
    setLoginLoading(true);
    setTimeout(() => { setLoginLoading(false); onSuccess({ name: loginEmail.split("@")[0] }); }, 900);
  };

  const handleRegister = () => {
    const errs = {};
    if (!firstName.trim())          errs.firstName = "نام را وارد کنید";
    if (!lastName.trim())           errs.lastName  = "نام خانوادگی را وارد کنید";
    if (!regEmail.includes("@"))    errs.regEmail  = "ایمیل معتبر نیست";
    if (regPass.length < 6)         errs.regPass   = "رمز باید حداقل ۶ کاراکتر باشد";
    if (regPassConfirm !== regPass) errs.regPassC  = "تکرار رمز عبور مطابقت ندارد";
    if (Object.keys(errs).length) { setRegErrors(errs); return; }
    setRegErrors({});
    setRegLoading(true);
    setTimeout(() => { setRegLoading(false); onSuccess({ name: `${firstName} ${lastName}` }); }, 900);
  };

  const EyeBtn = ({ show, toggle }) => (
    <button type="button" onClick={toggle}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-teal-300 transition-colors select-none"
      style={{ fontSize: 18, lineHeight: 1 }}>
      {show ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.77 21.77 0 0 1 5.06-7.94"/>
          <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-3.17 4.66"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      )}
    </button>
);

  const FieldError = ({ msg }) => msg ? <p className="text-rose-400 text-xs mt-1.5">{msg}</p> : null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 relative">
      <div className="w-full max-w-sm relative z-10 anim-fade-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-18 h-18 mx-auto mb-4 w-[72px] h-[72px] rounded-3xl flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(45,212,191,0.45)] bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-500 rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="text-slate-900 text-4xl font-black">ط</span>
          </div>
          <h1 className="text-3xl font-black grad-text">طاقچه</h1>
          <p className="text-slate-500 text-sm mt-2">کتاب‌خانه دیجیتال شما</p>
        </div>

        <div className="glass rounded-3xl p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
          {/* Tabs */}
          <div className="flex bg-black/30 rounded-2xl p-1.5 mb-7 border border-white/5">
            {[["login", "ورود"], ["register", "ثبت‌نام"]].map(([m, l]) => (
              <button key={m} onClick={() => { setMode(m); setLoginErrors({}); setRegErrors({}); }}
                className={`flex-1 py-2.5 text-sm font-black rounded-xl transition-all duration-300 ${
                  mode === m ? "bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-900 shadow-[0_0_18px_rgba(45,212,191,0.4)]" : "text-slate-500 hover:text-slate-300"}`}>
                {l}
              </button>
            ))}
          </div>

          {mode === "login" && (
            <div className="flex flex-col gap-4 anim-fade-in">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">ایمیل</label>
                <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="example@email.com" className={ic(loginErrors.loginEmail)}
                  style={{ direction: "ltr", textAlign: "left" }} />
                <FieldError msg={loginErrors.loginEmail} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-300">رمز عبور</label>
                  <a href="#" className="text-xs text-teal-300 hover:underline">فراموشی رمز</a>
                </div>
                <div className="relative">
                  <input value={loginPass} onChange={(e) => setLoginPass(e.target.value)}
                    type={showLoginPass ? "text" : "password"} placeholder="رمز عبور خود را وارد کنید"
                    className={ic(loginErrors.loginPass)} style={{ paddingLeft: 40 }} />
                  <EyeBtn show={showLoginPass} toggle={() => setShowLoginPass(!showLoginPass)} />
                </div>
                <FieldError msg={loginErrors.loginPass} />
              </div>
              <button onClick={handleLogin} disabled={loginLoading}
                className="w-full py-3.5 rounded-xl text-sm font-black text-slate-900 bg-gradient-to-r from-teal-300 to-cyan-400 shadow-[0_0_24px_rgba(45,212,191,0.35)] hover:shadow-[0_0_36px_rgba(45,212,191,0.55)] transition-all active:scale-95 disabled:opacity-60 mt-2">
                {loginLoading ? "در حال ورود..." : "ورود به حساب ←"}
              </button>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-xs text-slate-600">یا</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>
              <button className="w-full py-3.5 rounded-xl text-sm font-bold text-slate-300 border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/20 flex items-center justify-center gap-2.5 transition-all active:scale-95">
                <span className="font-black text-base text-indigo-300">G</span> ورود با گوگل
              </button>
            </div>
          )}

          {mode === "register" && (
            <div className="flex flex-col gap-4 anim-fade-in">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">نام</label>
                  <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    placeholder="علی" className={ic(regErrors.firstName)} />
                  <FieldError msg={regErrors.firstName} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">نام خانوادگی</label>
                  <input value={lastName} onChange={(e) => setLastName(e.target.value)}
                    placeholder="محمدی" className={ic(regErrors.lastName)} />
                  <FieldError msg={regErrors.lastName} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">ایمیل</label>
                <input value={regEmail} onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="example@email.com" className={ic(regErrors.regEmail)}
                  style={{ direction: "ltr", textAlign: "left" }} />
                <FieldError msg={regErrors.regEmail} />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">رمز عبور</label>
                <div className="relative">
                  <input value={regPass} onChange={(e) => setRegPass(e.target.value)}
                    type={showRegPass ? "text" : "password"} placeholder="حداقل ۶ کاراکتر"
                    className={ic(regErrors.regPass)} style={{ paddingLeft: 40 }} />
                  <EyeBtn show={showRegPass} toggle={() => setShowRegPass(!showRegPass)} />
                </div>
                <FieldError msg={regErrors.regPass} />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">تکرار رمز عبور</label>
                <div className="relative">
                  <input value={regPassConfirm} onChange={(e) => setRegPassConfirm(e.target.value)}
                    type={showRegPassC ? "text" : "password"} placeholder="رمز عبور را مجدداً وارد کنید"
                    className={ic(regErrors.regPassC)} style={{ paddingLeft: 40 }} />
                  <EyeBtn show={showRegPassC} toggle={() => setShowRegPassC(!showRegPassC)} />
                </div>
                {regPassConfirm && (
                  <p className={`text-xs mt-1.5 ${regPassConfirm === regPass ? "text-emerald-400" : "text-rose-400"}`}>
                    {regPassConfirm === regPass ? "✓ رمزها مطابقت دارند" : "✗ رمزها مطابقت ندارند"}
                  </p>
                )}
                <FieldError msg={regErrors.regPassC} />
              </div>

              <button onClick={handleRegister} disabled={regLoading}
                className="w-full py-3.5 rounded-xl text-sm font-black text-slate-900 bg-gradient-to-r from-teal-300 to-cyan-400 shadow-[0_0_24px_rgba(45,212,191,0.35)] hover:shadow-[0_0_36px_rgba(45,212,191,0.55)] transition-all active:scale-95 disabled:opacity-60 mt-2">
                {regLoading ? "در حال ثبت‌نام..." : "ثبت‌نام در طاقچه 🚀"}
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-600 mt-6 leading-relaxed">
          با ورود، <span className="text-teal-300">شرایط استفاده</span> و{" "}
          <span className="text-teal-300">حریم خصوصی</span> طاقچه را می‌پذیرید.
        </p>
      </div>
    </div>
  );
}
