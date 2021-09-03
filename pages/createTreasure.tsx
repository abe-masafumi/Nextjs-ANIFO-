import Link from 'next/link'
import styles from '../styles/createTreasure.module.css'

export default function createTreasure() {
  return (
    <div>
      <header>{/* ここにindexのheaderを入れる(headerをコンポーネントに？) */}</header>
      <main>
        <Link href="/">
          <a>← go back</a>
        </Link>
        <h1>Create collectible</h1>
        <p>
          Choose “Single” if you want your collectible to be one of a kind or
          <br />
          “Multiple” if you want to sell one collectible multiple times
        </p>

        <div className={styles.buttonContainer}>
          <div className={styles.singleButton}>Single</div>
          <div className={styles.multipleButton}>Multiple</div>
        </div>
        <p>
          We do not own your private keys and cannot access your funds
          <br /> without your confirmation
        </p>
      </main>
    </div>
  )
}
