export default function LocationsSection() {
  const locations = [
    { name: 'Oujda', icon: '🏙️', desc: 'Service principal et bureaux' },
    { name: 'Berkane', icon: '🌊', desc: 'Déplacements disponibles' },
    { name: 'Nador', icon: '⛰️', desc: 'Consultations sur place' },
    { name: 'Jerada', icon: '🏔️', desc: 'Support à distance' },
    { name: 'Taourirt', icon: '🌄', desc: 'Interventions possibles' },
    { name: 'Guercif', icon: '🏘️', desc: 'Service régional' },
    { name: 'Tout le Maroc', icon: '🌍', desc: 'Support en ligne' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-semibold mb-6">
            <span>✦</span> Zones Couvertes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Service Dans Toute La Région Orientale
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Création de sites web professionnel à Oujda, Berkane, Nador et dans toute la région Oriental du Maroc
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {locations.map((loc, i) => (
            <div 
              key={i}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-100 hover:border-amber-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {loc.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-lg">
                {loc.name}
              </h3>
              <p className="text-xs text-slate-600">
                {loc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SEO Text */}
        <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-3xl p-12 border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Développeur Web Local - Avantage Régional
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                🎯 Pourquoi Choisir Un Service Local?
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span><strong>Rencontres en personne</strong> possibles à Oujda, Berkane ou Nador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span><strong>Connaissance du marché</strong> local Oriental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span><strong>Support réactif</strong> sans décalage horaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span><strong>Prix adaptés</strong> au marché marocain</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                📍 Nos Zones d'Intervention
              </h4>
              <p className="text-slate-700 mb-4">
                <strong>Service complet à Oujda</strong> et dans toute la région Orientale du Maroc. 
                Nous nous déplaçons pour les consultations et offrons un support à distance partout au Maroc.
              </p>
              <p className="text-slate-700">
                Que vous soyez un <strong>restaurant à Oujda</strong>, une <strong>boutique à Berkane</strong>, 
                un <strong>salon à Nador</strong> ou une entreprise ailleurs dans l'Oriental, nous avons la 
                solution web qu'il vous faut.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a 
              href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discuter De Votre Projet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Additional SEO content */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Oujda Digital Studio</strong> est votre <strong>agence web de confiance</strong> dans 
            la région Orientale. Spécialisés dans la <strong>création de sites web pour restaurants</strong>, 
            <strong>boutiques en ligne</strong>, <strong>salons</strong>, <strong>cabinets médicaux</strong> et 
            <strong>entreprises locales</strong>. Service professionnel, prix transparents, résultats garantis.
          </p>
        </div>
      </div>
    </section>
  );
}
