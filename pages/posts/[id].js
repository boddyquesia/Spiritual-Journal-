import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../styles/Home.module.css'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  // Simulación de datos
  const postData = {
    title: `Post Dinámico #${id}`,
    content: `Este es el contenido del post con ID ${id}. Los datos se están recuperando de la ruta dinámica.`,
    author: process.env.NEXT_PUBLIC_SITE_NAME || 'Admin'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>{postData.title}</h1>
        <p className={styles.description}>{postData.content}</p>
        <p>Autor: {postData.author}</p>
        
        <Link href="/" className={styles.backLink}>
          &larr; Volver al inicio
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export default Post
