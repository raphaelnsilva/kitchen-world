import './globals.css'
import Footer from '../components/footer/footer'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
import Navigation from '../components/navigation/navigation'
import Script from 'next/script'

export const metadata = {
  title: 'Mundo Da Cozinha',
  description: 'Olá cozinheiro(a), Bem-vindo(a) ao nosso blog Mundo da Cozinha! Aqui, você encontrará um mundo de novas receitas e deliciosos sabores, texturas e aromas, além de muita informação sobre culinária e gastronomia.'
}

export default async function RootLayout({children}) {
  return (
    <html lang='pt-br'>
      <head>
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9396204168733715"
        crossOrigin="anonymous" 
        strategy="lazyOnload"
      />
      </head>
      <body suppressHydrationWarning={true}>
        <Navigation />
        <main>
          <Breadcrumb homeElement={'Página Inicial'} separator={<span> {'>'} </span>}capitalizeLinks/>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
