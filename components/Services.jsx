export default function Services(){
  const services=[
    {
      icon: '🍽️',
      title:'Sites Web Restaurants',
      desc:'Menus interactifs, réservations en ligne, galerie photos et design inspiré du patrimoine marocain',
      features: ['Menu Digital', 'Réservations', 'Galerie Photos', 'Multi-langues']
    },
    {
      icon: '🚚',
      title:'Systèmes de Livraison',
      desc:'Plateforme complète de gestion des commandes avec suivi en temps réel et paiement sécurisé',
      features: ['Gestion Commandes', 'Suivi GPS', 'Paiement en Ligne', 'Dashboard Admin']
    },
    {
      icon: '🛍️',
      title:'E-commerce Pro',
      desc:'Boutiques en ligne modernes avec catalogue produits, panier intelligent et analytics avancés',
      features: ['Catalogue Produits', 'Panier Intelligent', 'Analytics', 'SEO Optimisé']
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions Digitales Complètes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous créons des expériences web qui transforment vos visiteurs en clients fidèles
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s,i)=>(
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {s.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {s.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2">
                  {s.features.map((f,idx)=>(
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-purple-600">
                  En Savoir Plus
                </button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Besoin d'une solution personnalisée ?</p>
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Discutons de Votre Projet
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
