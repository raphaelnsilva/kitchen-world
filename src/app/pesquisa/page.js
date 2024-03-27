import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'

export const metadata = {
  title: 'Pesquisa'
}

export default async function Pesquisa({searchParams}) {
  const search = searchParams.query 

  const FILTER_QUERY = `
    query MyQuery {
      allArticles(filter: {title: {matches: {pattern: "${search}"}}}) {
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
    query: FILTER_QUERY,
    revalidate: 0,
    visualEditingBaseUrl: false
  })

  const articles = response.allArticles

  return (
    <>
      <header className={styles.header}>
        <h1>Pesquisa: <span style={{ color: '#00b882'}}>{search}</span></h1>
        {articles.length === 0 ? '' : <p>Aqui estão todos os resultados para a sua pesquisa "{search}"</p>}
      </header>
      {articles.length === 0 ? (
        <div className={styles.errorMessage}>
          <h1>Desculpe, não encotramos nada para "{search}" =( </h1>
        </div>
      ) : (
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
      )}
    </>
  )
}
