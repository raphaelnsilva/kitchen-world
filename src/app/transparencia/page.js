import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Transparência | Mundo Da Cozinha'
}

export default function transparencia() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Transparência</h1>
        <p>Bem-vindos ao Mundo da Cozinha, onde a transparência é um dos nossos pilares fundamentais!</p>
      </header>
      
      <p>
        No Mundo da Cozinha, acreditamos firmemente na importância de construir uma relação de confiança
        com todos os nossos leitores e seguidores. É por isso que criamos esta página de transparência,
        onde nos comprometemos a compartilhar informações relevantes sobre o funcionamento e operações do nosso blog.
      </p>
      <br />
      <h4>Origem das Receitas:</h4>
      <p>
        Nossas receitas são cuidadosamente selecionadas e elaboradas por nossa equipe apaixonada pela culinária.
        Em alguns casos, adaptamos receitas de fontes confiáveis e sempre garantimos atribuição adequada e links
        para a fonte original.
      </p>
      <br />
      <h4>Fotografias e Imagens:</h4>
      <p>
        Todas as imagens e fotografias que utilizamos em nossas postagens são de nossa autoria ou adquiridas através
        de bancos de imagens respeitáveis, onde respeitamos rigorosamente todas as licenças e direitos autorais aplicáveis.
      </p>
      <br />
      <h4>Ingredientes e Substituições:</h4>
      <p>
        Quando compartilhamos uma receita, fornecemos uma lista completa de ingredientes necessários para prepará-la.
        Reconhecemos que cada indivíduo possui suas próprias necessidades dietéticas e restrições alimentares, por isso
        encorajamos nossos leitores a adaptarem as receitas conforme necessário, levando em consideração alergias e intolerâncias alimentares.
      </p>
      <br />
      <h4>Comentários e Envolvimento dos Leitores:</h4>
      <p>
        Valorizamos imensamente os comentários e a participação ativa de nossa comunidade de leitores. Estamos sempre abertos
        a sugestões, dúvidas e feedback sobre nossas receitas. No entanto, reservamo-nos o direito de moderar e remover qualquer
        comentário que seja ofensivo, spam ou que viole nossas políticas de uso. Buscamos criar um ambiente de respeito mútuo e troca
        construtiva de ideias.
      </p>
      <br />
      <h4>Afiliados e Publicidade:</h4>
      <p>
        Gostaríamos de ressaltar que todo o conteúdo editorial do Mundo da Cozinha é produzido de forma independente, sem qualquer
        influência de patrocinadores ou anunciantes. No entanto, estamos abertos a possibilidades de parcerias e programas de afiliados
          para exibir anúncios relevantes. Atualmente, estamos explorando parcerias com o Google AdSense, sempre em conformidade com os
          termos estabelecidos. É importante salientar que isso não afeta de forma alguma a seleção de receitas ou nossa opinião sobre os
          produtos apresentados. Sempre buscamos recomendar produtos que consideramos de qualidade e úteis para nossos leitores.
      </p>
      <br />
      <p>
        Estamos comprometidos em fornecer um blog de culinária autêntico, confiável e acessível a todos os amantes da cozinha.
        Se você tiver alguma dúvida, preocupação ou sugestão, não hesite em entrar em contato conosco através do formulário de
        contato <Link href='/contato'>clicando aqui!</Link>.
      </p>
      <br />
      <p>Agradecemos por fazer parte do Mundo da Cozinha!</p>
      <br />
      <p>A equipe do Mundo da Cozinha</p>
      
    </section>
  )
}
