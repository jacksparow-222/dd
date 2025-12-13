'use client';
import { useEffect, useState } from 'react';

export default function Hero(){
  const [spots,setSpots]=useState(5);
  const [timeLeft,setTimeLeft]=useState(48*3600);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(()=>{
    const t=setInterval(()=>setTimeLeft(s=>s>0?s-1:0),1000);
    return ()=>clearInterval(t);
  },[]);
  
  useEffect(()=>{
    const t=setInterval(()=>setSpots(s=>s>1?s-1:1),15000);
    return ()=>clearInterval(t);
  },[]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const format = s=>{ 
    const h=Math.floor(s/3600).toString().padStart(2,'0'); 
    const m=Math.floor((s%3600)/60).toString().padStart(2,'0'); 
    const sec=(s%60).toString().padStart(2,'0'); 
    return `${h}:${m}:${sec}` 
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Custom Wallpaper Background - ADD YOUR IMAGE HERE */}
      <div className="absolute inset-0 z-0">
        {/* Replace '/wallpaper.jpg' with your image path when ready */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/wallpaper.jpg')`,
            filter: 'blur(0px)'
          }}
        ></div>
        {/* Fallback animated gradient if no wallpaper */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 animate-gradient"></div>
      </div>

      {/* Animated Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Tech Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Glow Effect */}
      <div 
        className="absolute w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      ></div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent h-1 animate-scan"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Holographic Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full border-2 border-cyan-400 bg-cyan-950/30 backdrop-blur-xl shadow-lg shadow-cyan-500/50 animate-pulse-glow">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </div>
          <span className="text-cyan-300 font-bold text-sm tracking-wider">
            🚀 SYSTÈME ACTIVÉ • {spots} PLACES DISPONIBLES
          </span>
        </div>

        {/* Main Heading with Glitch Effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          <span className="block" data-text="FUTURE OF">
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              FUTURE OF
            </span>
          </span>
          <span className="block mt-2" data-text="WEB DESIGN">
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient-x">
              WEB DESIGN
            </span>
          </span>
        </h1>

        {/* Subheading with Typing Effect */}
        <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Sites web <span className="text-cyan-400 font-bold">IA-optimisés</span> avec design 
          <span className="text-purple-400 font-bold"> holographique</span> et 
          <span className="text-pink-400 font-bold"> performance quantique</span>
        </p>

        {/* Futuristic Countdown */}
        <div className="inline-block mb-10 group">
          <div className="bg-black/60 backdrop-blur-xl border-2 border-cyan-400 rounded-2xl p-6 shadow-lg shadow-cyan-500/50 relative overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 blur animate-border-flow"></div>
            
            <div className="relative z-10">
              <p className="text-cyan-400 text-sm mb-2 font-mono tracking-widest">EXPIRATION DU SYSTÈME:</p>
              <div className="flex gap-4 text-4xl md:text-5xl font-bold text-white font-mono tabular-nums">
                {format(timeLeft).split('').map((char, i) => (
                  <span 
                    key={i} 
                    className="inline-block"
                    style={{
                      textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
                      animation: char === ':' ? 'pulse 1s infinite' : 'none'
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
            className="group relative px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              ACTIVER MAINTENANT
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-cyan-300 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
          </a>
          
          <a 
            href="#portfolio"
            className="group px-8 py-5 bg-black/40 backdrop-blur-xl text-cyan-400 font-bold rounded-xl text-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              EXPLORER PROJETS
            </span>
          </a>
        </div>

        {/* Tech Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {icon: '⚡', stat: '99.9%', label: 'Uptime'},
            {icon: '🚀', stat: '<1s', label: 'Load Time'},
            {icon: '🔒', stat: '256-bit', label: 'Encryption'},
            {icon: '🌐', stat: '24/7', label: 'Support AI'}
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-2xl font-bold text-cyan-400 mb-1" style={{textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'}}>{item.stat}</div>
              <div className="text-xs text-cyan-200 font-mono tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Tech Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-50"></div>
      <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-cyan-400">
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
