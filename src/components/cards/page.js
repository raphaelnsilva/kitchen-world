import Link from 'next/link'
import { Image } from 'react-datocms'
import styles from './page.module.css'

export default function Cards(props) {
  const article = props.data;

  return (
      <Link className={styles.cardLink} key={article.slug} href={`/posts/${article.slug}`}>
        <Image data={article.postImage.responsiveImage} />
        <div className={styles.cardContent}>
          <p className={styles.category}>{article.category}</p>
          <h1 className={styles.cardTitle}>{article.title}</h1>
        </div>
      </Link>
  )
}
