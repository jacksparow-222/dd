
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const templates = {
  Restaurant: { fr:{tagline:'Menu en ligne • Réservation • Commandes', cta:'Voir le menu'}, ar:{tagline:'قائمة طعام • حجوزات • طلبات', cta:'عرض القائمة'} },
  Boutique: { fr:{tagline:'Produits soigneusement sélectionnés', cta:'Voir la boutique'}, ar:{tagline:'منتجات مختارة بعناية', cta:'عرض المتجر'} },
  Ecommerce: { fr:{tagline:'Boutique en ligne & Paiement sécurisé', cta:'Voir produits'}, ar:{tagline:'متجر إلكتروني ودفع آمن', cta:'عرض المنتجات'} },
  Default: { fr:{tagline:'Site professionnel sur-mesure', cta:'Découvrir'}, ar:{tagline:'موقع احترافي مخصص', cta:'اكتشف'} }
}
export default function InstantDemo(){ 
  const [lang,setLang]=useState('fr'); const [name,setName]=useState(''); const [type,setType]=useState('Restaurant'); const [color,setColor]=useState('gold'); const [preview,setPreview]=useState(null);
  useEffect(()=>{ document.documentElement.setAttribute('dir', lang==='ar' ? 'rtl' : 'ltr') },[lang]);
  function generate(e){ e?.preventDefault(); const t = templates[type]||templates.Default; const pTitle = name.trim()||(lang==='fr'?'Votre Entreprise':'اسم متجرك'); setPreview({title:pTitle, tagline:t[lang].tagline, cta:t[lang].cta, color, type}); setTimeout(()=>{ const el=document.getElementById('instant-demo-preview'); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}) },120)}
  const palette = { gold:{accent:'bg-yellow-500', text:'text-black'}, red:{accent:'bg-red-600', text:'text-white'}, blue:{accent:'bg-blue-700', text:'text-white'} }
  const P = palette[preview?.color||color]||palette.gold;
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-6 grid gap-4 md:grid-cols-4 items-end">
        <div>
          <label className="block text-sm font-semibold mb-1">{lang==='fr'?'Langue':'اللغة'}</label>
          <div className="flex gap-2">
            <button onClick={()=>setLang('fr')} className={`px-3 py-1 rounded ${lang==='fr'?'bg-black text-white':'border'}`}>FR</button>
            <button onClick={()=>setLang('ar')} className={`px-3 py-1 rounded ${lang==='ar'?'bg-black text-white':'border'}`}>AR</button>
          </div>
        </div>
        <div><label className="block text-sm font-semibold mb-1">{lang==='fr'?'Nom de l'entreprise':'اسم المشروع'}</label><input value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 rounded border" placeholder={lang==='fr'?'ex: Riad des Saveurs':'مثال: رياض النكهات'} /></div>
        <div><label className="block text-sm font-semibold mb-1">{lang==='fr'?'Type':'النوع'}</label><select value={type} onChange={e=>setType(e.target.value)} className="w-full px-3 py-2 rounded border"><option>Restaurant</option><option>Boutique</option><option>Ecommerce</option></select></div>
        <div><label className="block text-sm font-semibold mb-1">{lang==='fr'?'Couleur':'اللون'}</label><select value={color} onChange={e=>setColor(e.target.value)} className="w-full px-3 py-2 rounded border"><option value="gold">Or / Chaud</option><option value="red">Rouge</option><option value="blue">Bleu</option></select></div>
      </div>
      <div className="flex gap-3"><button onClick={generate} className="px-5 py-3 rounded-xl bg-black text-white font-semibold">{lang==='fr'?'Générer la prévisualisation':'إنشاء معاينة'}</button><button onClick={()=>{setName(''); setType('Restaurant'); setColor('gold'); setPreview(null)}} className="px-5 py-3 rounded-xl border">{lang==='fr'?'Réinitialiser':'إعادة تعيين'}</button></div>
      {preview && (
        <div id="instant-demo-preview" className="mt-8">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="rounded-2xl overflow-hidden shadow-xl">
            <div className={`p-10 text-center ${P.text}`} style={{background: preview.color==='gold' ? 'linear-gradient(90deg,#FDE68A,#F59E0B)' : preview.color==='red' ? 'linear-gradient(90deg,#FCA5A5,#EF4444)' : 'linear-gradient(90deg,#93C5FD,#3B82F6)'}}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{preview.title}</h2>
              <p className="opacity-90 mb-6">{preview.tagline}</p>
              <div className="flex justify-center gap-3">
                <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className={`px-6 py-3 rounded-full font-semibold ${P.accent || 'bg-yellow-500'} ${P.text}`}>{preview.cta}</a>
                <button onClick={()=>{ const msg = lang==='fr' ? `Bonjour, j'aimerais un devis pour un site ${preview.type} – ${preview.title}` : `مرحبا، أريد عرض سعر لموقع ${preview.type} – ${preview.title}`; window.open(`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`, '_blank')}} className="px-6 py-3 rounded-full border font-semibold bg-white/30">{lang==='fr'?'Demande de devis':'طلب عرض سعر'}</button>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border"><h4 className="font-semibold mb-2">{lang==='fr'?'Fonctionnalités':'الخصائص'}</h4><ul className="text-sm space-y-1"><li>• {lang==='fr'?'Design personnalisé':'تصميم مخصص'}</li><li>• {lang==='fr'?'Mobile-friendly':'متجاوب مع الجوال'}</li><li>• {lang==='fr'?'WhatsApp ordering':'طلب عبر واتساب'}</li></ul></div>
                <div className="p-4 rounded-lg border"><h4 className="font-semibold mb-2">{lang==='fr'?'Aperçu rapide':'معاينة سريعة'}</h4><div className="grid grid-cols-2 gap-2"><div className="h-20 bg-gray-100 rounded flex items-center justify-center text-sm">Image</div><div className="h-20 bg-gray-100 rounded flex items-center justify-center text-sm">Image</div><div className="h-20 bg-gray-100 rounded flex items-center justify-center text-sm">Image</div><div className="h-20 bg-gray-100 rounded flex items-center justify-center text-sm">Image</div></div></div>
                <div className="p-4 rounded-lg border"><h4 className="font-semibold mb-2">{lang==='fr'?'Prix indicatif':'سعر تقريبي'}</h4><div className="text-2xl font-bold">{lang==='fr'?'€199–€699':'199€–699€'}</div><div className="text-sm opacity-80 mt-2">{lang==='fr'?'Dépend du scope':'يعتمد على حجم العمل'}</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
