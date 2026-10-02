import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldAlert, Lock, ArrowLeft, KeyRound, CheckCircle2 } from 'lucide-react';

export default function AdminRoute({ children }) {
  const { user, isAdmin, login, loginAsAdmin } = useAuth();
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showManualLogin, setShowManualLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (isAdmin) {
    return <>{children}</>;
  }

  const handleManualLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const res = login(adminEmail, adminPassword);
    if (!res.success || !res.isAdmin) {
      setErrorMsg('Invalid administrator credentials. Access restricted.');
    }
  };

  const handleQuickDemoAdmin = () => {
    loginAsAdmin();
  };

  return (
    <div className="min-h-screen bg-deepBlack text-offWhite flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-softBlack border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Top Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-icyBlue to-red-600" />

        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-red-500/30 flex items-center justify-center mx-auto mb-4 text-red-400">
            <Lock className="w-8 h-8" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-red-400 uppercase block mb-1">
            403 // RESTRICTED ACCESS
          </span>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-offWhite uppercase">
            ARCHIVE CONTROLLER
          </h1>
          <p className="text-xs text-lightGray/70 mt-2 font-mono leading-relaxed">
            This terminal is restricted to ColdRitual fulfillment staff, store operations, and dispatch supervisors.
          </p>
        </div>

        {/* Current User Info */}
        <div className="bg-deepBlack/80 border border-white/5 rounded p-3 mb-6 font-mono text-xs flex items-center justify-between">
          <span className="text-lightGray/60">Current Session:</span>
          <span className="text-offWhite font-semibold truncate max-w-[180px]">
            {user?.email || 'Guest / Unauthenticated'}
          </span>
        </div>

        {/* Quick Demo Switch */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleQuickDemoAdmin}
            type="button"
            className="w-full bg-icyBlue text-deepBlack font-mono text-xs tracking-wider uppercase font-bold py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 hover:bg-icyBlue/90 transition-all shadow-lg shadow-icyBlue/10"
          >
            <KeyRound className="w-4 h-4" />
            Authenticate Demo Admin
          </button>

          <button
            onClick={() => setShowManualLogin(prev => !prev)}
            type="button"
            className="w-full bg-white/5 border border-white/10 hover:border-white/20 text-offWhite font-mono text-xs tracking-wider uppercase py-2.5 px-4 rounded-sm transition-all"
          >
            {showManualLogin ? 'Hide Manual Credentials' : 'Enter Admin Credentials'}
          </button>
        </div>

        {/* Manual Admin Form */}
        {showManualLogin && (
          <form onSubmit={handleManualLogin} className="space-y-4 mb-6 pt-4 border-t border-white/10">
            {errorMsg && (
              <div className="p-2.5 bg-red-950/40 border border-red-500/40 text-red-300 font-mono text-xs">
                {errorMsg}
              </div>
            )}
            <div>
              <label className="block font-mono text-[11px] text-lightGray/80 uppercase mb-1">Admin Email</label>
              <input
                type="email"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="admin@coldritual.in"
                className="w-full bg-deepBlack border border-white/10 px-3 py-2 text-xs font-mono text-offWhite focus:border-icyBlue focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-lightGray/80 uppercase mb-1">Password</label>
              <input
                type="password"
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-deepBlack border border-white/10 px-3 py-2 text-xs font-mono text-offWhite focus:border-icyBlue focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-deepBlack font-mono text-xs uppercase font-bold py-2.5 px-4 hover:bg-offWhite transition-colors"
            >
              Verify Credentials
            </button>
          </form>
        )}

        {/* Back Link */}
        <div className="pt-4 border-t border-white/10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-lightGray/70 hover:text-icyBlue transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Storefront
          </Link>
        </div>
      </div>
    </div>
  );
}
