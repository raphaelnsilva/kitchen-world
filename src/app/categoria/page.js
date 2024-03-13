
import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'


export default async function Category({ searchParams }) {
  const category = searchParams.query 

  const CATEGORY_QUERY = `
    query MyQuery {
      allArticles(filter: {category: {eq: "${category}"}}) {
        slug
        category
        title
        publishDate
        postImage { 
          url
          responsiveImage {
            width
            webpSrcSet
            srcSet
            src
            sizes
            height
            bgColor
            base64
            aspectRatio
          }
        }
      }
    }
  `
  const response = await performRequest({
    query: CATEGORY_QUERY,
    revalidate: 0,
    visualEditingBaseUrl: false
  })

  const articles = response.allArticles

  return (
    <article className={styles.categoryContainer}>
      <h1 className={styles.header}>Categoria: {category}</h1>
      <section className={styles.lastsPosts}>
        {articles.map((article) => (
          <Link className={styles.cardLink} key={article.slug} href={`/posts/${article.slug}`}>
            <Image data={article.postImage.responsiveImage} />
            <div className={styles.cardContent}>
              <span className={styles.category}>{article.category}</span>
              <h1 className={styles.cardTitle}>{article.title}</h1>
              <span className={styles.publishData}>
                <FaRegCalendarAlt />
                Publicado em: {article.publishDate}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </article>
  )
}