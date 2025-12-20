'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Store, ShoppingBag, Check } from "lucide-react";

export default function InstantDemo() {
  const [lang, setLang] = useState("fr");
  const [name, setName] = useState("");
  const [type, setType] = useState("Restaurant");
  const [color, setColor] = useState("gold");

  const isAr = lang === "ar";

  const types = [
    { id: 'Restaurant', icon: Layout, label: { fr: 'Restaurant', ar: 'مطعم' } },
    { id: 'Boutique', icon: Store, label: { fr: 'Boutique', ar: 'محل' } },
    { id: 'Ecommerce', icon: ShoppingBag, label: { fr: 'E-commerce', ar: 'متجر' } },
  ];

  const colors = [
    { id: 'gold', class: 'bg-amber-500', label: { fr: 'Or', ar: 'ذهبي' } },
    { id: 'red', class: 'bg-rose-500', label: { fr: 'Rouge', ar: 'أحمر' } },
    { id: 'blue', class: 'bg-blue-600', label: { fr: 'Bleu', ar: 'أزرق' } },
  ];

  return (
    <div 
      className={`max-w-md mx-auto p-6 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl transition-all duration-500 ${isAr ? 'text-right' : 'text-left'}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Header & Lang Switcher */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold text-slate-900">
          {isAr ? "Configurateur" : "Configuration"}
        </h3>
        <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
          {['fr', 'ar'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                lang === l ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-3 tracking-wide">
            {isAr ? "اسم المشروع" : "Nom de l'entreprise"}
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-slate-300"
            placeholder={isAr ? "مثال: رياض النكهات" : "ex: Riad des Saveurs"}
          />
        </div>

        {/* Business Type - Visual Cards */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-3">
            {isAr ? "النوع" : "Type d'activité"}
          </label>
          <div className="grid grid-cols-3 gap-3">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setType(t.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                  type === t.id 
                    ? "border-amber-500 bg-amber-50 text-amber-700 shadow-sm" 
                    : "border-slate-100 bg-slate-50/50 text-slate-500 hover:border-slate-200"
                }`}
              >
                <t.icon className={`w-5 h-5 ${type === t.id ? "text-amber-600" : "text-slate-400"}`} />
                <span className="text-[10px] font-bold uppercase tracking-tight">{t.label[lang as 'fr'|'ar']}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Picker - Visual Dots */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-3">
            {isAr ? "الهوية البصرية" : "Identité Visuelle"}
          </label>
          <div className="flex gap-4">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setColor(c.id)}
                className="group relative flex items-center justify-center"
              >
                <div className={`w-10 h-10 rounded-full ${c.class} shadow-lg transition-transform group-hover:scale-110`} />
                {color === c.id && (
                  <motion.div 
                    layoutId="check"
                    className="absolute inset-0 flex items-center justify-center text-white"
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                )}
                <span className={`absolute -bottom-6 text-[10px] font-medium transition-opacity ${color === c.id ? 'opacity-100' : 'opacity-0'}`}>
                  {c.label[lang as 'fr'|'ar']}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Summary (Optional but looks premium) */}
        <div className="mt-10 pt-6 border-t border-slate-100">
          <div className="bg-slate-900 rounded-2xl p-4 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Preview Live</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-light truncate max-w-[150px]">
                {name || (isAr ? "اسمك هنا" : "Votre Nom")}
              </span>
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                color === 'gold' ? 'bg-amber-500' : color === 'red' ? 'bg-rose-500' : 'bg-blue-600'
              }`}>
                {type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
