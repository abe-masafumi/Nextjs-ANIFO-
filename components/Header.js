import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Search } from './Search'
import { Button } from './Button'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../pages/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = () => {
  const auth = useContext(AuthContext)
  return (
    <header
      className="container-fluid p-2 mb-3"
      style={{ background: '#152032', color: '#eef0e6' }}
    >
      {/* - */}
      <div className="row d-flex align-items-center">
        {/* ヘッダーロゴ */}
        <div className="col-1 d-flex align-items-center">
          <Image src="/anifo.png" alt="ヘッダーロゴ" width={160} height={50} />
        </div>
        {/* ヘッダーメニュー */}
        <div className="col-11">
          {/* -- */}
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <Search />
            </div>
            <div className="col-1">Explore</div>
            <div className="col-1">My items</div>
            <div className="col-1">Following</div>
            <div className="col-1">Activity</div>
            <div className="col-1">How it works</div>
            <div className="col-2">Communuty</div>
            {/* ボタンコンポーネント作成 */}
            <div className="col-2 ">
              <div style={{ display: 'flex', paddingRight: 'auto', justifyContent: 'end' }}>
                <div style={{ paddingRight: '14px' }}>
                  <Link href="/createTreasure">
                    <a>
                      <Button
                        title="create"
                        message="作品投稿画面に遷移します"
                        color="#eef0e6"
                        backColor="#3a526f"
                      />
                    </a>
                  </Link>
                </div>
                {auth?.isAdress ? (
                  <div className="">
                    <Link href="/">
                      <a>
                        <Button
                          title="マイページ"
                          message="プロフィール画面に遷移します"
                          color="#eef0e6"
                          backColor="#3a526f"
                        />
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className="">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
