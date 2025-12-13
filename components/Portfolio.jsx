'use client';
import { useState } from 'react';
import Modal from './Modal';

export default function Portfolio(){
  const [open,setOpen]=useState(false);
  const [curr,setCurr]=useState({});
  
  const items=[
    {
      name:'Riad des Saveurs', 
      category: 'Restaurant',
      img:'/mockups/restaurant-landing-01.png', 
      demo:'/mockups/restaurant-landing-01.png',
      description: 'Site élégant avec menu interactif et réservations en ligne'
    },
    {
      name:'Souk Chic', 
      category: 'E-commerce',
      img:'/mockups/agency-modern-01.png', 
      demo:'/mockups/agency-modern-01.png',
      description: 'Boutique moderne avec panier intelligent et paiement sécurisé'
    },
    {
      name:'Pâtisserie Atlas', 
      category: 'Boutique',
      img:'/mockups/ecommerce-fashion-01.png', 
      demo:'/mockups/ecommerce-fashion-01.png',
      description: 'Catalogue produits avec galerie haute définition'
    }
  ];
  
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets Réalisés Avec Succès
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it,i)=>(
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={it.img} 
                  alt={it.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <button 
                    onClick={()=>{ setCurr(it); setOpen(true); }}
                    className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-yellow-400"
                  >
                    Voir le Projet
                  </button>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                  {it.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {it.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {it.description}
                </p>

                {/* Stats */}
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>5.0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Livré à temps</span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Projet ?</h3>
          <p className="text-lg mb-8 text-purple-100">
            Rejoignez les dizaines d'entreprises qui nous font confiance
          </p>
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Démarrer Maintenant
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
      
      <Modal isOpen={open} onClose={()=>setOpen(false)} imgSrc={curr.demo} title={curr.name} />
    </section>
  )
}
