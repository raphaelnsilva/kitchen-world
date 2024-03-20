'use client'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.brandContainer}>
          <div className={styles.brand}>
            <Image src='/brand.png' alt={'brand'} width={60} height={60} />
            <p>Mundo da <br /> Cozinha</p>
          </div>
          <p className={styles.footerParagraph}>Bem-vindo(a) ao nosso blog! <br />Aqui, você encontrará um <br />mundo delicioso de sabores, <br />texturas e aromas. <br /><br /></p>
        </div>
        <div className={styles.navContainer}>
          <ul className={styles.footerList}>
            <h3>Menu</h3>
            <Link href='/' className={styles.navLinks}>Home</Link>
            <Link href='/receitas' className={styles.navLinks}>Receitas</Link>
            <Link href='/sobre' className={styles.navLinks}>Sobre nós</Link>
            <Link href='/contato' className={styles.navLinks}>Contato</Link>
            <Link href='/transparencia' className={styles.navLinks}>Transparência</Link>
          </ul>
          <ul className={styles.footerList}>
            <h3>Categorias</h3>
            <Link href='/categorias?query=receitas%20doces'>Receitas doces</Link>
            <Link href='/categorias?query=bebidas'>Bebidas</Link>
            <Link href='/categorias?query=receitas%20salgadas'>Receitas salgadas</Link>
            <Link href='/categorias?query=caldos'>Caldos</Link>
            <Link href='/categorias?query=dicas'>Dicas</Link>
          </ul>
        </div>
      </div>
      <div className={styles.terms}>
        <p>Todos os diretor reservados &copy;</p>
        <p>Por favor analíse nossos <Link href='/termos'>Termos de uso e politicas de privacidade</Link></p>
      </div>
    </footer>
  )
}
