'use client';
import { useEffect, useState } from 'react';

export default function Hero(){
  const [spots, setSpots] = useState(5);
  const [timeLeft, setTimeLeft] = useState(48 * 3600);
  
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => setSpots(s => s > 1 ? s - 1 : 1), 15000);
    return () => clearInterval(timer);
  }, []);
  
  const format = (s) => { 
    const h = Math.floor(s / 3600).toString().padStart(2, '0'); 
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0'); 
    const sec = (s % 60).toString().padStart(2, '0'); 
    return `${h}:${m}:${sec}`;
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Wallpaper Background - Simple and Working */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(/wallpaper.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white border border-amber-200 rounded-full shadow-sm">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-slate-700">
            {spots} Places Disponibles Ce Mois
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 mb-6 leading-tight tracking-tight">
          Sites Web
          <span className="block font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent mt-2">
            D'Exception
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Nous créons des expériences digitales premium qui transforment votre vision en réalité. 
          <span className="font-semibold text-slate-900"> Excellence garantie.</span>
        </p>

        {/* Value Propositions */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-slate-700">
          {[
            '✓ Livraison Express 5-7 Jours',
            '✓ Design Sur-Mesure',
            '✓ Support Premium 24/7'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm md:text-base font-medium">
              {item}
            </div>
          ))}
        </div>

        {/* Elegant Countdown */}
        <div className="inline-block mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-slate-500 text-sm mb-3 font-medium tracking-wide">Offre exclusive expire dans</p>
            <div className="flex gap-3 text-4xl md:text-5xl font-light text-slate-900 tabular-nums">
              {format(timeLeft).split('').map((char, i) => (
                <span key={i} className="inline-block min-w-[1ch]">
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP || '+212710925748').replace(/\D/g, '')}`}
            className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold text-lg shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Démarrer Mon Projet
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          
          <a 
            href="#portfolio"
            className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold text-lg hover:border-amber-500 hover:text-amber-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Voir Nos Créations
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <p className="text-slate-500 text-sm mb-8 font-medium">Ils nous font confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Clients Premium' },
              { number: '100%', label: 'Satisfaction' },
              { number: '5-7j', label: 'Livraison' },
              { number: '5★', label: 'Note Moyenne' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
