import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Mail, User, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const { register } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      showToast('PASSWORDS DO NOT MATCH', 'error');
      return;
    }

    if (formData.password.length < 6) {
      showToast('PASSWORD MUST BE AT LEAST 6 CHARACTERS', 'error');
      return;
    }

    const res = register({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });

    if (res.success) {
      navigate('/account');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-deepBlack text-offWhite">
      <div className="max-w-md w-full bg-softBlack border border-white/10 p-8 sm:p-10 space-y-8 shadow-2xl">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-icyBlue uppercase tracking-widest">
            REGISTRATION // NEW INITIATE
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-offWhite">
            JOIN THE RITUAL
          </h1>
          <p className="font-mono text-xs text-lightGray/70">
            Create an account to track shipments, save bespoke sizing, and receive priority drop notifications.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
          <div>
            <label className="text-lightGray uppercase block mb-1.5 text-[11px]">Full Name *</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Aryan Mehta"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <User className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="text-lightGray uppercase block mb-1.5 text-[11px]">Email Address *</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <Mail className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="text-lightGray uppercase block mb-1.5 text-[11px]">Mobile Number (+91) *</label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <Phone className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="text-lightGray uppercase block mb-1.5 text-[11px]">Password *</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <Lock className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="text-lightGray uppercase block mb-1.5 text-[11px]">Confirm Password *</label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                required
                className="w-full bg-deepBlack border border-white/15 px-3.5 py-3 text-offWhite focus:outline-none focus:border-white/50"
              />
              <Lock className="w-4 h-4 text-lightGray/40 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-offWhite hover:bg-white text-deepBlack font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-4 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
            >
              <span>CREATE RITUAL ACCOUNT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="pt-4 border-t border-white/10 text-center font-mono text-xs text-lightGray/70">
          <span>Already registered? </span>
          <Link to="/login" className="text-offWhite hover:underline uppercase font-bold">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
}
