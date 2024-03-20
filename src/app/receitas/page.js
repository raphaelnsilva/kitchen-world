import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'

export const metadata = { title: 'Receitas | Mundo Da Cozinha' }

async function getData() {
  const res = await performRequest({
    query: POSTS_PAGE,
    revalidate: 80000,
    visualEditingBaseUrl: false
  })
  return res.allArticles;
}

export default async function Receitas() {
  const articles = await getData()

  return (
    <>
      <div className={styles.header}>
        <h1>Todas as receitas</h1>
        <p>Aqui estão nossas receitas mais especiais, elaboradas e testadas para ajudá-lo a preparar uma excelente refeição em família.</p>
      </div>
      <div className={styles.section}>
        {articles.map((article) => (
          <Link className={styles.cardLink} href={`/receitas/${article.slug}`}>
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

const POSTS_PAGE = `
  query Query {
    allArticles {
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