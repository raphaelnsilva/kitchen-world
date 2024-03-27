import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'

export default async function Categoria({searchParams}) {
  const category = searchParams.query 

  const CATEGORY_QUERY = `
    query MyQuery {
      allArticles(filter: {category: {eq: "${category}"}}) {
        id
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
    <>
      <div className={styles.header}>
        <h1>Categoria: <span style={{ color: '#00b882', fontSize: '30px'}}>{category}</span></h1>
        <p>Aqui estão todas as receitas da categoria selecionada.</p>
      </div>
      <div className={styles.posts}>
        {articles.map((article) => (
          <Link key={article.id} className={styles.cardLink} href={`/receitas/${article.slug}`}>
            <Image data={article.postImage.responsiveImage} />
            <div className={styles.cardContent}>
              <p className={styles.category}>{article.category}</p>
              <h1 className={styles.cardTitle}>{article.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}