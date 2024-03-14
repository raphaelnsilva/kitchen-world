import styles from './page.module.css'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Início | Mundo da Cozinha',
  description: 'Olá cozinheiro(a), Bem-vindo(a) ao nosso blog Mundo da Cozinha! Aqui, você encontrará um mundo de novas receitas e deliciosos sabores, texturas e aromas, além de muita informação sobre culinária e gastronomia.'
}

export default async function Home() {

  return (
    <>
      <section className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <h1>Receitas e dicas culinárias</h1>
          <br />
          <p>Bem-vindo(a) ao nosso blog! Aqui, você encontrará um mundo delicioso de sabores, texturas e aromas.</p>
        </div>
        <Link href='/receitas' className={styles.btn}>Ver receitas <IoIosArrowForward /></Link>
      </section>
      <section className={styles.homeCategories}>
        
        <div className={styles.categoryContent}>
          <h1>As receitas mais amadas</h1>
          <br />
          <p>Navegue pelas catergorias e encontre a receita certa que você está procurando</p>
        </div>
        
        
        <div className={styles.categoryCards}>
          <Link href='/categorias?query=bebidas'>
            <div className={styles.categoryCard}>
              <Image src='/bebidas.jpeg' width={120} height={120} alt='café'/>
              <p>Bebidas</p>
            </div>
          </Link>
          <Link href='/categorias?query=receitas%20salgadas'>
            <div className={styles.categoryCard}>
              <Image src='/salgados.jpeg' width={120} height={120} alt='café'/>
              <p>Receitas salgadas</p>
            </div>
          </Link>
          <Link href='/categorias?query=receitas%20doces'>
            <div className={styles.categoryCard}>
              <Image src='/doces.jpeg' width={120} height={120} alt='café'/>
              <p>Receitas doces</p>
            </div>
          </Link>
          <Link href='/categorias?query=caldos'>
            <div className={styles.categoryCard}>
              <Image src='/caldos.webp' width={120} height={120} alt='café'/>
              <p>Caldos</p>
            </div>
          </Link>
          <Link href='/categorias?query=dicas'>
            <div className={styles.categoryCard}>
              <Image src='/dicas.webp' width={120} height={120} alt='café'/>
              <p>Dicas</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}