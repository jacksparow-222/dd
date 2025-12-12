
export default function Testimonials(){
  const data=[{name:'Rachid - Pâtisserie',text:'Service parfait, mon site a doublé mes ventes !'},{name:'Samira - Boutique',text:'Très professionnel, rapide et propre !'},{name:'Yassine - Restaurant',text:'Un site moderne qui attire les clients.'}];
  return (
    <section className="px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Témoignages</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.map((d,i)=>(<div key={i} className="p-6 bg-white rounded-xl shadow"><p className="italic mb-4">"{d.text}"</p><h4 className="font-bold">— {d.name}</h4></div>))}
      </div>
    </section>
  )
}
