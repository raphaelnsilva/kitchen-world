import { performRequest } from '../../../lib/datocms'
import styles from './page.module.css'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Image, StructuredText } from 'react-datocms'
import { DateTime } from 'luxon'

export const metadata = {
  title: `Post | Receitas da dona Maria`
}

export default async function Receita({params}) {
  const ARTICLE_QUERY = `
    query Query {
      article(filter: {slug: {eq: "${params.slug}"}}) {
        slug
        title
        category
        publishDate
        postImage { 
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
        content {
          value
          blocks {
            __typename
            ... on ImageRecord {
              id
              image { 
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
        }
      }
    }
  `

  const response = await performRequest({
    query: ARTICLE_QUERY,
    revalidate: 0,
    visualEditingBaseUrl: false
  })

  const article = response.article
  const data = DateTime.fromISO(article.publishDate)
  const currentData = data.toFormat('dd/MM/yyyy')

  return (
    <article className={styles.postContent}>
      <h1 className={styles.postTitle}>{article.title}</h1>

      <p className={styles.postCategory}>{article.category}</p>

      <div className={styles.postImageContainer}>
        <div className={styles.postImage}>
          <Image data={article.postImage.responsiveImage} />
        </div>
      </div>

      <div className={styles.postDate}>
        <FaRegCalendarAlt />
        Publicado em: {currentData}
      </div>
      <StructuredText data={article.content} renderBlock={({ record }) => <Image data={record.image.responsiveImage} />} />
    </article>
  )
}
