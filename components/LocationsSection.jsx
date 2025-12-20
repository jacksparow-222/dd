'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Rocket, ChevronRight, Globe2 } from 'lucide-react';

export default function LocationsSection() {
  const locations = [
    { name: 'Oujda', desc: 'Siège & Studio', icon: '01' },
    { name: 'Berkane', desc: 'Secteur Orange', icon: '02' },
    { name: 'Nador', desc: 'Zone Portuaire', icon: '03' },
    { name: 'Jerada', desc: 'Soutien Local', icon: '04' },
    { name: 'Taourirt', desc: 'Axe Stratégique', icon: '05' },
    { name: 'Guercif', desc: 'Développement', icon: '06' },
    { name: 'Maroc', desc: 'Service National', icon: '07' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header avec Badge */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-amber-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <MapPin className="w-3 h-3" />
            <span>Ancrage Régional</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-tight text-slate-900 mb-6 tracking-tighter">
            L'Expertise Web de <br />
            <span className="italic font-serif text-amber-600">l'Oriental Marocain</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Nous combinons la proximité d'une agence locale avec les standards de qualité des plus grands studios internationaux.
          </p>
        </div>

        {/* Villes Grid - Style Minimaliste */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-24">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-amber-200 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500"
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold text-slate-300 group-hover:text-amber-500 transition-colors">
                {loc.icon}
              </span>
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">{loc.name}</h3>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">{loc.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pourquoi Local - Bento Style Box */}
        <div className="relative">
          <div className="absolute inset-0 bg-slate-900 rounded-[3rem] -rotate-1 scale-[1.02]" />
          <div className="relative bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
                  Pourquoi collaborer avec un <br/>
                  <span className="text-amber-600 underline decoration-amber-200 underline-offset-8">Partenaire de Proximité ?</span>
                </h3>
                
                <div className="space-y-8">
                  {[
                    { title: "Réunion en Personne", desc: "Disponible pour des cafés-projets à Oujda, Berkane ou Nador.", icon: Users },
                    { title: "Marché Oriental", desc: "Compréhension profonde des habitudes de consommation locales.", icon: Target },
                    { title: "Support Ultra-Réactif", desc: "Pas de décalage horaire, intervention immédiate sur votre site.", icon: Rocket },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-none mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase mb-6">
                  <Globe2 className="w-4 h-4" />
                  <span>Rayonnement Régional</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 font-light">
                  Que vous gériez un <strong>Riad à Oujda</strong>, une <strong>coopérative à Berkane</strong>, ou un 
                  <strong>projet d'exportation à Nador</strong>, nous adaptons votre technologie au terrain.
                </p>
                <p className="text-slate-700 leading-relaxed font-light italic border-l-2 border-amber-500 pl-4">
                  "Notre mission est de digitaliser l'économie de l'Oriental avec des standards de Silicon Valley."
                </p>
                
                <a 
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
                  className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all group"
                >
                  Démarrer à Oujda
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* SEO Micro-Footer */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-slate-400 uppercase tracking-widest leading-loose font-medium">
            Agence Web Oujda • Création Site Web Berkane • E-commerce Nador • Digital Oriental Maroc • 
            Développement Web Taourirt • Marketing Digital Guercif • Sites Web Professionnels Maroc
          </p>
        </div>

      </div>
    </section>
  );
}
