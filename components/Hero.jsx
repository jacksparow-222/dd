'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Hero() {
  const [spots, setSpots] = useState(5);
  const [timeLeft, setTimeLeft] = useState(48 * 3600);
  const [isMounted, setIsMounted] = useState(false);

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setTimeLeft(s => (s > 0 ? s - 1 : 0)), 1000);
    const spotTimer = setInterval(() => setSpots(s => (s > 1 ? s - 1 : 1)), 25000);
    return () => {
      clearInterval(timer);
      clearInterval(spotTimer);
    };
  }, []);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return {
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    };
  };

  const time = formatTime(timeLeft);

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/40 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v2E-6h.02c.02 0 .04 0 .05-.02V34h-.05zM34 36v.02c0 .02.02.04.04.05V36h-.04zM34 34v.05h.05V34h-.05zM34 32v.05h.05V32h-.05zM36 32v.05h.05V32h-.05zM32 34v.05h.05V34h-.05zM32 36v.05h.05V36h-.05z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        {/* Badge Disponibilité */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border border-amber-200 rounded-full shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-800">
            Plus que <span className="font-bold text-amber-600">{spots} places</span> disponibles ce mois
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-tight text-slate-900 mb-8 tracking-tighter"
        >
          Sites Web 
          <span className="block italic font-serif font-light text-amber-600">D'Exception</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl font-light leading-relaxed"
        >
          Nous fusionnons <span className="text-slate-900 font-medium">design minimaliste</span> et 
          <span className="text-slate-900 font-medium"> performance extrême</span> pour propulser votre présence digitale.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mb-14"
        >
          {[
            { label: 'Heures', value: time.hours },
            { label: 'Minutes', value: time.minutes },
            { label: 'Secondes', value: time.seconds }
          ].map((unit, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white border border-slate-200 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-sm mb-2">
                <span className="text-2xl md:text-3xl font-light text-slate-800 tabular-nums">
                  {unit.value}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{unit.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 w-full justify-center"
        >
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP || '+212710925748').replace(/\D/g,'')}`}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all group shadow-xl hover:shadow-slate-200"
          >
            <MessageCircle className="w-5 h-5" />
            Lancer mon projet
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#portfolio"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
          >
            Voir le portfolio
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-slate-100 w-full max-w-4xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Livraison', val: '48 Heures' },
              { label: 'Design', val: 'Sur-mesure' },
              { label: 'Support', val: '24/7 VIP' },
              { label: 'Révisions', val: 'Illimitées' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 text-amber-600 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">{stat.val}</span>
                </div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-tighter">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
