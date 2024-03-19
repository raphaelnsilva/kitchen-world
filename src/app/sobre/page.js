import styles from './page.module.css'

export const metadata = {
  title: 'Sobre nós | Mundo Da Cozinha'
}

export default function Sobre() {
  return (
    <section className={styles.aboutContainer}>
      <h1>Sobre nosso Blog</h1>
      <div className={styles.aboutContent}>
        <p>
          Blog foi concebido com o propósito de compartilhar experiências
          culinárias e deliciosas receitas. Aqui, compartilhamos artigos que
          abordam uma variedade de tópicos relacionados à gastronomia e ao
          cozinhar em geral. Nossa marca e nossas postagens não são de forma forma
          forma alguma influenciadas por preferências culinárias específicas ou
          tendências alimentares.
        </p>
        <p>
          Este blog utiliza uma plataforma avançada e foi projetado para ser
          acessível por qualquer tipo de dispositivo. Foi construído com foco na
          praticidade e em proporcionar uma experiência positiva para o usuário
          busca por receitas irresistíveis. Nossas receitas são elaboradas
          manualmente, sem o uso de inteligência artificial. Acreditamos que as
          instruções e dicas compartilhadas aqui devem ser claras e de fácil
          execução para cozinheiros de todos os níveis e para qualquer pessoa
          interessada em explorar o mundo da culinária.
        </p>
        <p>
          Nosso compromisso se estende à qualidade do conteúdo publicado.
          constantemente aprimorando nossas receitas e compartilhando truques
          truques culinários para manter nossos leitores inspirados na cozinha.
          Compartilhando conhecimento de forma transparente, estamos contribuindo
          para a promoção da culinária e incentivando pessoas de todos os níveis a
          se aventurarem na cozinha com confiança e entusiasmo. Agradecemos a você
          por fazer parte dessa jornada e esperamos que encontre nosso blog uma
          fonte valiosa de inspiração culinária.
        </p>
      </div>
    </section>
  )
}
