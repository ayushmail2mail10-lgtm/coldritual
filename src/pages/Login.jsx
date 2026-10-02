import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Mail, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('arjun.verma@ritualist.in');
  const [password, setPassword] = useState('••••••••');
  const [rememberMe, setRememberMe] = useState(true);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(email, password, rememberMe);
    if (res.success) {
      navigate('/account');
    }
  };

  const handleQuickDemo = () => {
    setEmail('arjun.verma@ritualist.in');
    setPassword('coldritual2026');
    login('arjun.verma@ritualist.in', 'coldritual2026', true);
    navigate('/account');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-deepBlack text-offWhite">
      <div className="max-w-md w-full bg-softBlack border border-white/10 p-8 sm:p-10 space-y-8 shadow-2xl">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
            AUTHENTICATION // INITIATE
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-offWhite">
            RITUAL LOGIN
          </h1>
          <p className="font-mono text-xs text-lightGray/70">
            Enter your credentials to access saved sizes, address book and order tracking.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
          <div>
            <label className="text-lightGray uppercase block mb-1.5 text-[11px]">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <Mail className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-lightGray uppercase text-[11px]">Password</label>
              <button
                type="button"
                onClick={() => alert("Demo credentials pre-filled. Click 'Demo Sign In'.")}
                className="text-[10px] text-lightGray/60 hover:text-offWhite underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <Lock className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 accent-icyBlue bg-deepBlack border-white/20"
              />
              <span className="text-lightGray text-[11px] uppercase">Remember Session</span>
            </label>
          </div>

          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-4 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
            >
              <span>ACCESS ACCOUNT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleQuickDemo}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/15 text-icyBlue font-mono text-xs uppercase tracking-wider py-2.5 px-4 transition-colors"
            >
              ⚡ Quick Demo Sign In
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="pt-4 border-t border-white/10 text-center font-mono text-xs text-lightGray/70">
          <span>New to Cold Ritual? </span>
          <Link to="/register" className="text-offWhite hover:underline uppercase font-bold">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
