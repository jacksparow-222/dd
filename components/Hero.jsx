
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
  const format = s=>{ const h=Math.floor(s/3600).toString().padStart(2,'0'); const m=Math.floor((s%3600)/60).toString().padStart(2,'0'); const sec=(s%60).toString().padStart(2,'0'); return `${h}:${m}:${sec}` }
  return (
    <section className="px-6 py-24 text-center bg-gradient-to-r from-yellow-400 via-red-500 to-blue-900 text-white relative">
      <div className="absolute top-6 right-6 bg-red-600 px-4 py-2 rounded-full font-bold animate-pulse">Offre Limitée !</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Ne manquez pas l'opportunité de booster vos ventes !</h1>
      <p className="max-w-2xl mx-auto mb-6">Des sites web 100% sur-mesure pour restaurants, boutiques et e-commerce.</p>
      <div className="mb-4">Places restantes ce mois: <span className="text-3xl font-bold">{spots}</span></div>
      <div className="mb-6 inline-block bg-black bg-opacity-30 px-6 py-2 rounded-lg">{'Temps restant: '}{format(timeLeft)}</div>
      <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`} className="inline-block mt-6 px-8 py-4 bg-[var(--gold)] text-white rounded-xl shadow font-bold">Commencez Maintenant</a>
    </section>
  )
}
