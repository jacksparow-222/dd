
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Oujda Digital Studio',
  description: 'Sites web sur-mesure pour restaurants et e-commerce au Maroc'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head/>
      <body>
        {children}
      </body>
    </html>
  )
}
