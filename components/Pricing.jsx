export default function Pricing(){
  const plans=[
    {
      name:'Essentiel',
      price:'499',
      popular: false,
      description: 'Parfait pour démarrer votre présence en ligne',
      features:[
        'Site vitrine 1-3 pages',
        'Design responsive mobile',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement 1 an inclus',
        'Support email'
      ]
    },
    {
      name:'Professionnel',
      price:'899',
      popular: true,
      description: 'La solution complète pour votre business',
      features:[
        'Site complet jusqu\'à 10 pages',
        'Design 100% personnalisé',
        'Système de réservation/commande',
        'Intégration WhatsApp Business',
        'SEO avancé + Analytics',
        'Support prioritaire 24/7',
        'Formation complète',
        'Maintenance 3 mois offerte'
      ]
    },
    {
      name:'E-commerce',
      price:'1499',
      popular: false,
      description: 'Boutique en ligne complète et performante',
      features:[
        'Boutique en ligne illimitée',
        'Gestion produits avancée',
        'Panier & checkout sécurisé',
        'Paiement en ligne intégré',
        'Dashboard admin complet',
        'Suivi commandes en temps réel',
        'Marketing automation',
        'Support dédié 24/7'
      ]
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Tarifs Transparents
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choisissez Votre Formule
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prix justes, sans frais cachés. Paiement flexible disponible.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((p,i)=>(
            <div 
              key={i} 
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 ${
                p.popular ? 'ring-4 ring-purple-500 md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Popular badge */}
              {p.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm shadow-lg">
                  ⭐ Plus Populaire
                </div>
              )}

              <div className={`p-8 ${p.popular ? 'pt-16' : 'pt-8'}`}>
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{p.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">{p.price}</span>
                    <span className="text-2xl text-gray-500">DH</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Paiement unique</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {p.features.map((f,idx)=>(
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a 
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                    p.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                      : 'bg-gray-900 text-white hover:bg-purple-600'
                  }`}
                >
                  Choisir {p.name}
                </a>
              </div>

              {/* Decorative gradient */}
              {p.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-transparent opacity-30 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Tous Les Plans Incluent</h3>
            <p className="text-gray-300">Notre engagement qualité pour votre réussite</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {icon: '🚀', title: 'Livraison Rapide', desc: 'Sous 48h-7 jours'},
              {icon: '🔒', title: 'SSL Gratuit', desc: 'Sécurité garantie'},
              {icon: '📱', title: 'Mobile First', desc: '100% responsive'},
              {icon: '🎨', title: 'Design Sur-Mesure', desc: 'Unique à votre marque'}
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">Questions sur nos tarifs ?</p>
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`}
            className="inline-flex items-center gap-2 mt-4 text-purple-600 font-semibold hover:text-purple-700"
          >
            Contactez-nous pour un devis personnalisé
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
