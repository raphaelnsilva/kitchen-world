import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Card from '../../components/card/card'


export const metadata = {
  title: 'Receitas | Mundo Da Cozinha',
  description: ''
}

async function getData() {
  const res = await performRequest({
    query: POSTS_PAGE,
    revalidate: 60,
    visualEditingBaseUrl: false
  })
  return res.allArticles;
}

export default async function Receitas() {
  const articles = await getData()

  return (
    <section className={styles.article}>
      <div className={styles.header}>
        <h1>Todas as receitas</h1>
        <p>Aqui estão nossas receitas mais especiais, elaboradas e testadas para ajudá-lo a preparar uma excelente refeição em família.</p>
      </div>
      <div className={styles.section}>
        {articles.map((article) => <Card key={article.slug} data={article}/>)}
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