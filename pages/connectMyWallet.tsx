import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import fate from '../public/fate.png'

export default function connectMyWallet() {
  return (
    <div className="vh-100" style={{ background: '#0b1118', color: '#eef0e6' }}>
      <header style={{ overflow: 'hidden', height: 350 }}>
        {/* ここに大きな画像を入れる */}
        <Image src={fate} alt="fate" className="img-fluid" />
      </header>
      <main className="container-sm" style={{ width: 800 }}>
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>← Go back</a>
        </Link>
        <h1>Connect your wallet</h1>
        <p>
          Connect with one of available wallet providers
          <br />
          or create a new wallet. What is a wallet?
        </p>
        {/* とりあえずメタマスクだけ */}
        {/* testネットワークに繋ぐ */}
        {/* メタマスクをつないでユーザー認証する */}
        <div className="row">
          <div className="col-4">
            <div
              className="border border-info rounded m-1"
              style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
            ></div>
          </div>
          <div className="col-4">
            <div
              className="border border-info rounded m-1"
              style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
            ></div>
          </div>
          <div className="col-4">
            <div
              className="border border-info rounded m-1"
              style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
            ></div>
          </div>
          <div className="col-4">
            <div
              className="border border-info rounded m-1"
              style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
            ></div>
          </div>
          <div className="col-4">
            <div
              className="border border-info rounded m-1"
              style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
            ></div>
          </div>
          <div className="col-4">
            <div
              className="border border-info rounded m-1"
              style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
            ></div>
          </div>
        </div>
        <p>
          We do not own your private keys and cannot access your funds without your confirmation.
        </p>
      </main>
    </div>
  )
}
