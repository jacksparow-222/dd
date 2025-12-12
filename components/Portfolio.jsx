
'use client';
import { useState } from 'react';
import Modal from './Modal';
export default function Portfolio(){
  const [open,setOpen]=useState(false);
  const [curr,setCurr]=useState({});
  const items=[
    {name:'Riad des Saveurs', img:'/mockups/restaurant-landing-01.png', demo:'/mockups/restaurant-landing-01.png'},
    {name:'Souk Chic', img:'/mockups/agency-modern-01.png', demo:'/mockups/agency-modern-01.png'},
    {name:'Pâtisserie Atlas', img:'/mockups/ecommerce-fashion-01.png', demo:'/mockups/ecommerce-fashion-01.png'}
  ];
  return (
    <section className="px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Exemples de Sites Web</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((it,i)=>(
          <div key={i} className="p-4 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-300 relative group">
            <img src={it.img} alt={it.name} className="rounded-lg mb-4 w-full" />
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded animate-pulse">À ne pas manquer!</div>
            <h3 className="text-xl font-bold mb-2">{it.name}</h3>
            <button onClick={()=>{ setCurr(it); setOpen(true); }} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded shadow">Voir le site</button>
          </div>
        ))}
      </div>
      <Modal isOpen={open} onClose={()=>setOpen(false)} imgSrc={curr.demo} title={curr.name} />
    </section>
  )
}
