'use client';
import React from 'react';

export function FloatingWhatsApp(){
  const WA = process.env.NEXT_PUBLIC_WHATSAPP || '+212600000000';
  const num = WA.replace(/\D/g,'');
  return (
    <a href={`https://wa.me/${num}?text=Bonjour,%20je%20souhaite%20un%20site%20web`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg z-50">
      💬
    </a>
  )
}

export function LanguageWrapper({ children }){
  const [lang,setLang] = React.useState('fr');
  return (
    <div dir={lang==='ar' ? 'rtl' : 'ltr'}>
      <div className="flex justify-end p-4">
        <button onClick={()=>setLang('fr')} className={`px-3 py-1 rounded ${lang==='fr' ? 'bg-black text-white' : 'bg-gray-200'}`}>FR</button>
        <button onClick={()=>setLang('ar')} className={`ml-2 px-3 py-1 rounded ${lang==='ar' ? 'bg-black text-white' : 'bg-gray-200'}`}>AR</button>
      </div>
      {children}
    </div>
  )
}
