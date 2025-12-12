
export default function Contact(){
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'smail.al.harrak@gmail.com';
  return (
    <section className="px-6 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
      <p className="mb-6">Prêt à créer votre site web? Contactez-nous maintenant!</p>
      <a href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP||'+212600000000').replace(/\D/g,'')}`} className="inline-block px-8 py-4 bg-green-600 text-white rounded-xl">Envoyer un message WhatsApp</a>
      <p className="mt-4 text-sm text-gray-500">Email: <a href={`mailto:${email}`} className="underline">{email}</a></p>
    </section>
  )
}
