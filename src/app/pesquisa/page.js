import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import { BiSolidMessageAltError } from 'react-icons/bi'
import Card from '@/components/card/card'

export const metadata = {
  title: 'Pesquisa'
}

export default async function Search({searchParams}) {
  const search = searchParams.query 

  const FILTER_QUERY = `
    query MyQuery {
      allArticles(filter: {title: {matches: {pattern: "${search}"}}}) {
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
      {articles.length === 0 ? (
        <div className={styles.errorMessage}>
          <h1>Desculpe, não encotramos sua pesquisa =( </h1>
        </div>
      ) : (
        <div className={styles.posts}>
          {articles.map((article) => <Card key={article.slug} data={article} />)}
        </div>
      )}
    </>
  )
}
