
export default function Services(){
  const services=[{title:'Sites Web Restaurants',desc:'Menus en ligne, réservation et design inspiré du Maroc'},{title:'Systèmes de Livraison',desc:'Gestion complète des commandes'},{title:'E-commerce',desc:'Boutiques en ligne sécurisées et faciles à gérer'}];
  return (
    <section className="px-6 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Nos Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s,i)=>(
          <div key={i} className="p-6 bg-gray-100 rounded-xl shadow relative hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
