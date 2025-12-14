'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-2xl font-bold text-white">O</span>
            </div>
            <div className="transition-colors duration-300">
              <div className="font-bold text-lg leading-tight text-slate-900">Oujda Digital</div>
              <div className="text-xs text-amber-600 font-medium">Premium Studio</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-slate-700 hover:text-amber-600 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Démarrer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl border border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-600 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
              className="block mx-6 mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl text-center shadow-lg"
            >
              Démarrer
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
