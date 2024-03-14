import styles from './card.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'

export default function Card(props) {
  const article = props.data
  
  return (
    <Link className={styles.cardLink} key={article.slug} href={`/receitas/${article.slug}`}>
      <Image data={article.postImage.responsiveImage} />
      <div className={styles.cardContent}>
        <p className={styles.category}>{article.category}</p>
        <h1 className={styles.cardTitle}>{article.title}</h1>
      </div>
    </Link>
  )
}