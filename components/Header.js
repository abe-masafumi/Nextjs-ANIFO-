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
  // console.log(auth);
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
            <div className="col-1 text-center">
              <Link href="/">
                <a style={{ color: '#eef0e6', textDecoration: 'none'}}>
                  Explore
                </a>
              </Link>
            </div>
            <div className="col-1 text-center">
              {/* <Link href="/">
                <a style={{ color: '#eef0e6', textDecoration: 'none'}}>
                  Following
                </a>
              </Link> */}
            </div>
            <div className="col-1 text-center">
              {/* <Link href="/">
                <a style={{ color: '#eef0e6', textDecoration: 'none'}}>
                  Activity
                </a>
              </Link> */}
            </div>
            <div className="col-1 text-center">
              {/* <Link href="/">
                <a style={{ color: '#eef0e6', textDecoration: 'none'}}>
                  How it works
                </a>
              </Link> */}
            </div>
            <div className="col-1 text-center">
              {/* <Link href="/">
                <a style={{ color: '#eef0e6', textDecoration: 'none'}}>
                  Communuty
                </a>
              </Link> */}
            </div>
            {/* ボタンコンポーネント作成 */}
            <div className="col-4 ">
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
                    <Link href={{ pathname: '/mypage' , query: { address: auth.address }}}>
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
