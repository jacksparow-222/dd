export default function Testimonials(){
  const data=[
    {
      name:'Rachid Benjelloun',
      role:'Propriétaire, Pâtisserie Délice',
      text:'Service impeccable ! Mon site a transformé mon business. Les commandes en ligne ont triplé en 2 mois. L\'équipe est très professionnelle et à l\'écoute.',
      avatar: '👨‍🍳',
      rating: 5,
      result: '+300% commandes'
    },
    {
      name:'Samira El Amrani',
      role:'Gérante, Boutique Souk Chic',
      text:'Un travail rapide, propre et moderne. Ma boutique en ligne est magnifique et mes clients adorent la facilité de navigation. ROI positif dès le premier mois !',
      avatar: '👩‍💼',
      rating: 5,
      result: 'ROI en 1 mois'
    },
    {
      name:'Yassine Tazi',
      role:'Chef, Restaurant Le Jardin',
      text:'Exactement ce dont j\'avais besoin. Le système de réservation fonctionne parfaitement et l\'intégration WhatsApp simplifie tout. Je recommande à 100% !',
      avatar: '👨‍🍳',
      rating: 5,
      result: 'Zéro downtime'
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Témoignages Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous avons aidé des dizaines d'entreprises à réussir en ligne
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4.9/5</div>
              <div className="text-sm text-gray-600">Note Moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Recommandations</div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((d,i)=>(
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="p-8">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(d.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{d.text}"
                </p>

                {/* Result badge */}
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                  ✓ {d.result}
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl">
                    {d.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{d.name}</h4>
                    <p className="text-sm text-gray-600">{d.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">Qualité Garantie</h3>
              <p className="text-purple-100">Satisfaction client ou remboursement</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Livraison Rapide</h3>
              <p className="text-purple-100">Votre site en 48h à 7 jours</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-2">Support 24/7</h3>
              <p className="text-purple-100">Nous sommes toujours là pour vous</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Rejoignez Nos Clients Satisfaits
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
