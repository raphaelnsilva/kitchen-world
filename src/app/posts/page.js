import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Cards from '../../components/cards/page'

export const metadata = {
  title: 'Posts | Mundo Da Cozinha',
  description: ''
}

async function getData() {
  const res = await performRequest({
    query: POSTS_PAGE,
    revalidate: 8000,
    visualEditingBaseUrl: false
  })
  return res.allArticles;
}

export default async function Posts() {
  const articles = await getData()

  return (
    <section className={styles.article}>
      <h1 className={styles.header}>Todas as receitas</h1>

      <div className={styles.section}>
        {articles.map((article) => (
          <>
            <Cards data={article} />
          </>
        ))}
      </div>
    </section>
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