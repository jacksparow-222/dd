
export default function Pricing(){
  const plans=[{name:'Basique',price:'499 DH',features:['Site simple','Design responsive']},{name:'Premium',price:'899 DH',features:['Site complet','SEO optimisé']},{name:'E-commerce',price:'1499 DH',features:['Boutique en ligne','Paiement sécurisé']}];
  return (
    <section className="px-6 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Nos Tarifs</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p,i)=>(
          <div key={i} className={`p-6 rounded-xl shadow ${i===1?'border-4 border-yellow-500':''}`}>
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <div className="text-3xl font-extrabold mb-4">{p.price}</div>
            <ul className="text-left mb-6">{p.features.map((f,idx)=><li key={idx}>• {f}</li>)}</ul>
            <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`} className="inline-block px-6 py-2 bg-yellow-500 text-white rounded-lg">Choisir ce plan</a>
          </div>
        ))}
      </div>
    </section>
  )
}
