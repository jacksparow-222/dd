export default function Pricing(){
  const plans=[
    {
      name:'Essentiel',
      price:'2,999',
      period:'Paiement unique',
      popular: false,
      tagline: 'Parfait pour démarrer',
      features:[
        'Site vitrine professionnel 5 pages',
        'Design sur-mesure premium',
        'Responsive parfait mobile/desktop',
        'Optimisation SEO complète',
        'Formulaire contact avancé',
        'Hébergement premium 1 an',
        'Certificat SSL sécurisé',
        'Formation complète 2h',
        '30 jours support prioritaire'
      ],
      value: 'ROI: 6 mois',
      cta: 'Commencer'
    },
    {
      name:'Premium',
      price:'5,499',
      period:'Paiement unique',
      popular: true,
      tagline: 'Le plus choisi',
      features:[
        'Tout du plan Essentiel',
        'Jusqu\'à 15 pages personnalisées',
        'Blog/Actualités intégré',
        'Réservation/Commande en ligne',
        'Intégration WhatsApp Business',
        'Google Analytics & Search Console',
        'Optimisation vitesse extrême',
        'Galerie photos professionnelle',
        'Formation avancée 4h',
        '90 jours support premium',
        '3 mois maintenance gratuite'
      ],
      value: 'ROI: 3 mois',
      cta: 'Choisir Premium'
    },
    {
      name:'E-commerce Elite',
      price:'8,999',
      period:'Paiement unique',
      popular: false,
      tagline: 'Solution complète',
      features:[
        'Tout du plan Premium',
        'Boutique produits illimitée',
        'Panier intelligent & checkout',
        'Paiement en ligne sécurisé',
        'Gestion stock automatique',
        'Dashboard admin complet',
        'Email marketing intégré',
        'Programme fidélité clients',
        'Multi-langues & devises',
        'Formation e-commerce 6h',
        '6 mois support VIP',
        '6 mois maintenance incluse'
      ],
      value: 'ROI: 2 mois',
      cta: 'Lancer Ma Boutique'
    }
  ];
  
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-premium">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-semibold mb-6">
            <span>✦</span> Investissement
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Un Investissement Qui Rapporte
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-8">
            Tarifs transparents. Valeur exceptionnelle. Résultats garantis.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Garantie Satisfaction 100% - Ou Remboursé
          </div>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((p,i)=>(
            <div 
              key={i} 
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                p.popular ? 'border-4 border-amber-500 md:-mt-4 md:mb-4 scale-105' : 'border border-slate-200'
              }`}
            >
              {/* Popular badge */}
              {p.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-3 font-bold text-sm">
                  🏆 MEILLEUR RAPPORT QUALITÉ/PRIX
                </div>
              )}

              <div className={`p-8 ${p.popular ? 'pt-16' : 'pt-8'}`}>
                {/* Plan info */}
                <div className="text-center mb-8">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{p.name}</div>
                  <div className="text-sm text-slate-600 mb-4">{p.tagline}</div>
                  
                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-slate-900">{p.price}</span>
                    <span className="text-xl text-slate-600 ml-2">DH</span>
                  </div>
                  <p className="text-sm text-slate-500">{p.period}</p>

                  {/* Value badge */}
                  <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    {p.value}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {p.features.map((f,idx)=>(
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a 
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    p.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                      : 'bg-slate-900 text-white hover:bg-amber-600'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {icon: '⚡', title: 'Livraison Express', desc: 'Votre site en 48h-7 jours'},
            {icon: '🛡️', title: 'Garantie Totale', desc: 'Satisfait ou remboursé'},
            {icon: '🎓', title: 'Formation Incluse', desc: 'Maîtrisez votre site'},
            {icon: '💬', title: 'Support Premium', desc: 'Réponse sous 2h'}
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-amber-50 rounded-3xl p-12 border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Besoin D'Une Solution Personnalisée ?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-nous pour un devis sur-mesure adapté à vos besoins spécifiques.
          </p>
          <a 
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Demander Un Devis Personnalisé
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
