
import Card from '@/components/card/card'
import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'

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
    <section className={styles.categoryContainer}>
      <h1 className={styles.header}>Categoria: {category}</h1>
      <div className={styles.posts}>
        {articles.map((article) => <Card data={article} />)}
      </div>
    </section>
  )
}