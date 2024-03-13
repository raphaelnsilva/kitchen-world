import { performRequest } from '../../../lib/datocms'
import styles from './page.module.css'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Image, StructuredText } from 'react-datocms'

export const metadata = {
  title: `Post | Receitas da dona Maria`
}

export default async function Post({params}) {
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
    revalidate: 10,
    visualEditingBaseUrl: false
  })

  const article = response.article

  return (
    <article className={styles.postContent}>
      <h1 className={styles.postTitle}>{article.title}</h1>
      <div className={styles.metaData}>
        <div className={styles.postDate}>
          <FaRegCalendarAlt />
          Publicado em: {article.publishDate}
        </div>
        <div className={styles.postCategory}>{article.category}</div>
      </div>
      <div className={styles.postImageContainer}>
        <div className={styles.postImage}>
          <Image data={article.postImage.responsiveImage} />
        </div>
      </div>
      <StructuredText
        data={article.content}
        renderBlock={({record}) => {
          return <Image data={record.image.responsiveImage} />
        }}
      />
    </article>
  )
}
