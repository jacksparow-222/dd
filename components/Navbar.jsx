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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/30 shadow-lg shadow-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Animated border ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl opacity-75 blur group-hover:opacity-100 transition-opacity"></div>
              
              {/* Logo container */}
              <div className="relative w-12 h-12 bg-black border-2 border-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all duration-300">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
                  O
                </span>
              </div>
            </div>
            
            <div className="transition-colors duration-300">
              <div className="font-black text-lg leading-tight text-cyan-400 tracking-wider" style={{textShadow: '0 0 10px rgba(6, 182, 212, 0.5)'}}>
                OUJDA
              </div>
              <div className="text-xs text-cyan-300/70 font-mono tracking-widest">
                DIGITAL
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-sm bg-cyan-400/20 transition-opacity duration-300"></span>
              </a>
            ))}
            
            {/* Futuristic CTA Button */}
            <a
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
              className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white rounded-lg overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ACTIVER
              </span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Border glow */}
              <div className="absolute inset-0 border-2 border-cyan-300 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
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
          <div className="md:hidden mt-4 py-4 bg-black/95 backdrop-blur-xl rounded-2xl border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 font-bold transition-colors border-l-4 border-transparent hover:border-cyan-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
              className="block mx-6 mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-center shadow-lg shadow-cyan-500/50"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ACTIVER
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Tech corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400/30"></div>
    </nav>
  );
}
