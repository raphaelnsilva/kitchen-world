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
            <Image src='/brand.png' alt={'brand'} width={40} height={40} />
            <p>Mundo da <br /> Cozinha</p>
          </div>
          <p className={styles.footerParagraph}>Bem-vindo(a) ao nosso blog! <br />Aqui, você encontrará um <br />mundo delicioso de sabores, <br />texturas e aromas. <br /><br /></p>
        </div>
        <ul className={styles.navList}>
          <Link href='/'><li className={styles.navLinks}>Página inicial</li></Link>
          <Link href='/receitas'><li className={styles.navLinks}>Receitas</li></Link>
          {/* <Link href='/sobre'><li className={styles.navLinks}>Categorias</li></Link> */}
          <Link href='/sobre'><li className={styles.navLinks}>Sobre nós</li></Link>
        </ul>
      </div>
      <div className={styles.terms}>
        <p>Todos os diretor reservados &copy;</p>
        <p>Por favor analíse nossos <Link href='/'>Termos de serviço</Link></p>
      </div>
    </footer>
  )
}
