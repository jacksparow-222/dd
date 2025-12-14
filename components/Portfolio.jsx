'use client';
import { useState } from 'react';

export default function Portfolio(){
  const items=[
    {
      name:'Restaurant Riad Luxe', 
      category: 'Gastronomie',
      gradient: 'from-amber-400 to-orange-500',
      icon: '🍽️',
      description: 'Site premium avec réservations instantanées et menu interactif',
      result: '+300% réservations',
      features: ['Menu Digital HD', 'Réservations Live', 'Galerie 360°'],
      metrics: { conversion: '45%', traffic: '+280%', satisfaction: '98%' }
    },
    {
      name:'Boutique Fashion Elite', 
      category: 'E-commerce',
      gradient: 'from-purple-400 to-pink-500',
      icon: '👗',
      description: 'E-commerce premium avec expérience d\'achat exceptionnelle',
      result: 'ROI +450%',
      features: ['Panier Intelligent', 'Paiement 1-Click', 'AR Try-On'],
      metrics: { conversion: '52%', traffic: '+320%', satisfaction: '99%' }
    },
    {
      name:'Pâtisserie Artisanale', 
      category: 'Lifestyle',
      gradient: 'from-pink-400 to-rose-500',
      icon: '🍰',
      description: 'Vitrine digitale qui capture l\'essence de l\'artisanat français',
      result: '+250% ventes',
      features: ['Commande Express', 'Livraison Tracking', 'Blog Recettes'],
      metrics: { conversion: '48%', traffic: '+290%', satisfaction: '97%' }
    }
  ];
  
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-premium">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-semibold mb-6">
            <span>✦</span> Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Nos Réalisations D'Exception
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Chaque projet est unique. Chaque résultat est mesurable.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {items.map((it,i)=>(
            <div 
              key={i} 
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-500"
            >
              {/* Visual/Icon Header */}
              <div className={`relative h-64 bg-gradient-to-br ${it.gradient} flex items-center justify-center`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url('/wallpaper.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                </div>
                
                {/* Icon */}
                <div className="relative text-8xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                  {it.icon}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-900 shadow-lg">
                  {it.category}
                </div>

                {/* Result badge */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-amber-600 shadow-lg">
                  {it.result}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {it.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {it.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {it.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{it.metrics.conversion}</div>
                    <div className="text-xs text-slate-500">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{it.metrics.traffic}</div>
                    <div className="text-xs text-slate-500">Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{it.metrics.satisfaction}</div>
                    <div className="text-xs text-slate-500">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt Pour Des Résultats Exceptionnels ?
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui ont choisi l'excellence et transformé leur présence digitale
          </p>
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Démarrer Mon Projet Premium
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
