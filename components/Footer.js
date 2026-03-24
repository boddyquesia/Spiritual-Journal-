import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} - Mi Proyecto Next.js</p>
    </footer>
  )
}
