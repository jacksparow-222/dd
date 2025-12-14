export default function Contact(){
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'smail.al.harrak@gmail.com';
  const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP||'+212710925748').replace(/\D/g,'');
  
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-premium">
        {/* Main CTA */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Left side - CTA */}
              <div className="p-12 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
                  <span>✦</span> Offre Premium
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Prêt Pour
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    L'Excellence ?
                  </span>
                </h2>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Transformons ensemble votre vision en un site web d'exception qui génère des résultats mesurables.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-10">
                  {[
                    'Réponse garantie sous 2h',
                    'Consultation stratégique gratuite 30min',
                    'Devis détaillé sous 24h',
                    'Accompagnement personnalisé'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a 
                  href={`https://wa.me/${whatsapp}?text=Bonjour,%20je%20souhaite%20discuter%20d'un%20projet%20premium`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Démarrer La Conversation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Right side - Contact info */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-8">Autres Moyens De Contact</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/80 text-sm mb-1">Email</div>
                        <a href={`mailto:${email}`} className="text-white font-semibold hover:text-amber-100 transition-colors break-all">
                          {email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/80 text-sm mb-1">WhatsApp</div>
                        <a href={`tel:+${whatsapp}`} className="text-white font-semibold hover:text-amber-100 transition-colors">
                          +{whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/80 text-sm mb-1">Disponibilité</div>
                        <div className="text-white font-semibold">Lun-Sam: 9h-20h</div>
                        <div className="text-white/70 text-sm">Réponse rapide 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'Qualité Premium', desc: 'Excellence garantie' },
              { icon: '⚡', title: 'Réponse Rapide', desc: 'Sous 2 heures' },
              { icon: '💎', title: 'Prix Transparent', desc: 'Sans surprises' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
