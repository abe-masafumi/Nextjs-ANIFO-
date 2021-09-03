import Link from 'next/link'
import styles from '../styles/connectMyWallet.module.css'

export default function connectMyWallet() {
  return (
    <div>
      <header className={styles.header}>{/* ここに大きな画像を入れる */}</header>
      <main className={styles.main}>
        <Link href="/">
          <a>← go back</a>
        </Link>
        <h1>Connect your wallet</h1>
        <p>
          Connect with one of available wallet providers
          <br />
          or create a new wallet. What is a wallet?
        </p>
      </main>
    </div>
  )
}
