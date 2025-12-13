'use client';
import { useEffect, useState } from 'react';

export default function Hero(){
  const [spots,setSpots]=useState(5);
  const [timeLeft,setTimeLeft]=useState(48*3600);
  
  useEffect(()=>{
    const t=setInterval(()=>setTimeLeft(s=>s>0?s-1:0),1000);
    return ()=>clearInterval(t);
  },[]);
  
  useEffect(()=>{
    const t=setInterval(()=>setSpots(s=>s>1?s-1:1),15000);
    return ()=>clearInterval(t);
  },[]);
  
  const format = s=>{ 
    const h=Math.floor(s/3600).toString().padStart(2,'0'); 
    const m=Math.floor((s%3600)/60).toString().padStart(2,'0'); 
    const sec=(s%60).toString().padStart(2,'0'); 
    return `${h}:${m}:${sec}` 
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Limited offer badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-bold text-sm mb-8 animate-bounce shadow-lg shadow-red-500/50">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Offre Limitée - Places Disponibles: {spots}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Transformez Votre Business
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mt-2">
            Avec Un Site Web Pro
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Des sites web sur-mesure pour restaurants, boutiques et e-commerce. 
          <span className="text-yellow-400 font-semibold"> Conception moderne, rapide et optimisée.</span>
        </p>

        {/* Countdown timer */}
        <div className="inline-block bg-black/40 backdrop-blur-sm px-8 py-4 rounded-2xl mb-10 border border-white/10">
          <p className="text-gray-300 text-sm mb-2">Cette offre expire dans:</p>
          <div className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-wider">
            {format(timeLeft)}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl text-lg shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/80 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Commencer Maintenant
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl text-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300"
          >
            Voir Nos Projets
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">50+</div>
            <div className="text-sm text-gray-300">Clients Satisfaits</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">48h</div>
            <div className="text-sm text-gray-300">Livraison Rapide</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">100%</div>
            <div className="text-sm text-gray-300">Sur-Mesure</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
