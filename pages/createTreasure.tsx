import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainButton } from '../components/MainButton'
import { Header } from '../components/Header'
import AuthProvider from './AuthContext'

export default function createTreasure() {
  return (
    <AuthProvider>
      <div  className="vh-100 vw-100 position-fixed" style={{ background: '#0b1118', color: '#eef0e6' }}>
        <Header />
        <div className="container-sm vh-100" style={{ width: 600 }}>
          <main className="container w-100">
            <div style={{height:"50px"}}></div>
            <Link href="/">
              <a style={{ textDecoration: 'none' }}>← go back</a>
            </Link>
            <div style={{height:"20px"}}></div>
            <h1>作品を投稿する</h1>
            <div style={{height:"20px"}}></div>
            <p>
              Choose “Single” if you want your collectible to be one of a kind or
              <br />
              “Multiple” if you want to sell one collectible multiple times
            </p>
            {/* メインボタンの選択 */}
            <div className="row text-center w-100">
              <div className="col-sm">
                <Link href="/createSingleTreasure">
                  <a className="text-decoration-none">
                    <MainButton width={220} height={250} title={'single'} />
                  </a>
                </Link>
              </div>
              <div style={{ width: 20 }}></div>
              <div className="col-sm" style={{pointerEvents:"none", opacity:0.4 }}>
                <Link href="/createSingleTreasure">
                  <a className="text-decoration-none">
                    <MainButton width={220} height={250} title={'Multiple'} />
                  </a>
                </Link>
              </div>
            </div>
            <p>
              We do not own your private keys and cannot access your funds
              <br /> without your confirmation
            </p>
          </main>
        </div>
      </div>
    </AuthProvider>
  )
}
