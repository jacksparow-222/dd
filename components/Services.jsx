export default function Services(){
  const services=[
    {
      icon: '🏆',
      title: 'Sites Web Premium',
      desc: 'Design d\'exception personnalisé à votre image de marque. Chaque pixel compte.',
      features: ['Design Sur-Mesure', 'Performance Optimale', 'SEO Avancé', 'Mobile First'],
      value: 'ROI +250%'
    },
    {
      icon: '⚡',
      title: 'E-commerce Excellence',
      desc: 'Boutiques en ligne qui convertissent. Interface intuitive et paiement sécurisé.',
      features: ['Paiement Sécurisé', 'Gestion Inventory', 'Analytics Pro', 'Support 24/7'],
      value: 'Conversion +180%'
    },
    {
      icon: '🎯',
      title: 'Stratégie Digitale',
      desc: 'Accompagnement complet de A à Z. De la conception au succès de votre projet.',
      features: ['Conseil Expert', 'Formation Complète', 'Maintenance Premium', 'Updates Réguliers'],
      value: 'Satisfaction 100%'
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-premium">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-semibold mb-6">
            <span>✦</span> Nos Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Excellence À Chaque Étape
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Solutions digitales premium conçues pour les entreprises qui visent l'excellence
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((s,i)=>(
            <div 
              key={i} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-amber-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {s.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                {s.desc}
              </p>

              {/* Value Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl text-amber-700 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {s.value}
              </div>
              
              {/* Features list */}
              <div className="space-y-3 mb-6">
                {s.features.map((f,idx)=>(
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a 
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
                className="block w-full py-3 text-center bg-slate-900 text-white rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                En Savoir Plus
              </a>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Value Prop */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-amber-50 rounded-3xl p-12 border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Pourquoi Choisir L'Excellence ?
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Investir dans un site premium, c'est investir dans votre réussite. Chaque projet est traité avec le même niveau d'exigence et de professionnalisme.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Qualité Garantie', 'Livraison Rapide', 'Support Illimité', 'Prix Transparent'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
