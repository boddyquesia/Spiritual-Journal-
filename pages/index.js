import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Vercel Template</title>
        <meta name="description" content="A complete Next.js template for Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Este es un proyecto listo para deploy en Vercel.
        </p>

        <div className={styles.grid}>
          <Link href="/posts/1" className={styles.card}>
            <h2>Post 1 &rarr;</h2>
            <p>Ejemplo de ruta dinámica con ID 1.</p>
          </Link>

          <Link href="/posts/2" className={styles.card}>
            <h2>Post 2 &rarr;</h2>
            <p>Ejemplo de ruta dinámica con ID 2.</p>
          </Link>

          <a href="/api/hello" className={styles.card}>
            <h2>API Route &rarr;</h2>
            <p>Prueba el endpoint serverless /api/hello.</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
