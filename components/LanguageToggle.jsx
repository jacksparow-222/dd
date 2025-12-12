'use client';
import React from 'react';

export default function LanguageToggle({ onChange }){
  const [lang,setLang]=React.useState('fr');
  const toggle = () => { const n = lang==='fr' ? 'ar' : 'fr'; setLang(n); if(onChange) onChange(n); }
  return (
    <button onClick={toggle} className="fixed top-4 right-4 px-4 py-2 bg-black text-white rounded z-50">
      {lang==='fr' ? 'العربية' : 'Français'}
    </button>
  )
}
