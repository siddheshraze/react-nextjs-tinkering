import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <ol>
          <li><Link href={'/browse'}>Browse</Link></li>
          <li><Link href={'/reports'}>Reports</Link></li>
          <li><Link href={'/upload'}>Upload</Link></li>
          <li><Link href={'/validate'}>Validate</Link></li>
        </ol>
      </div>
    </main>
  )
}
