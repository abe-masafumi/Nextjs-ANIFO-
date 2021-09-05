import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Search } from '../components/Search'
import { Button } from '../components/Button'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* ヘッダーロゴ */}
      <div className={styles.headerImageBox}>
        <Image src="/anifo.png" alt="ヘッダーロゴ" width={160} height={50} />
      </div>
      {/* ヘッダーメニュー */}
      <div className={styles.headerMenue}>
        <Search />
        <div className={styles.headerExplore}>Explore</div>
        <div className={styles.headerMyItems}>My items</div>
        <div className={styles.headerFollowing}>Following</div>
        <div className={styles.headerActivity}>Activity</div>
        <div className={styles.headerHowItWorks}>How it works</div>
        <div className={styles.headerCommunuty}>Communuty</div>
        {/* ボタンコンポーネント作成 */}

        <Link href="/createTreasure">
          <a>
            <Button
              title="createボタン"
              message="作品投稿画面に遷移します"
              color="#eef0e6"
              backColor="#3a526f"
            />
          </a>
        </Link>

        <Link href="/connectMyWallet">
          <a>
            <Button
              title="ウォレットに接続"
              message="ウォレット接続画面に遷移します"
              color="#eef0e6"
              backColor="#3a526f"
            />
          </a>
        </Link>
      </div>
    </header>
  )
}
