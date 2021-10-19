import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import fate from '../public/fate.png'
import { ConnectMetaMaskButton } from '../components/ConnectMetaMaskButton'
import AuthProvider from './AuthContext'
import { Footer } from '../components/Footer'

export default function connectMyWallet() {
  return (
    <AuthProvider>
      <div className="vh-100 position-fixed" style={{ background: '#0b1118', color: '#eef0e6' }}>
        <header style={{ overflow: 'hidden', height: 350 }}>
          {/* ここに大きな画像を入れる */}
          <Image src={fate} alt="fate" className="img-fluid" />
        </header>
        <main className="container-sm" style={{ width: 800 }}>
          <div style={{height:20}}></div>
          <Link href="/">
            <a style={{ textDecoration: 'none' }}>← Go back</a>
          </Link>
          <div style={{height:20}}></div>
          <h1>Connect your wallet</h1>
          <div style={{height:40}}></div>
          <p>
            Connect with one of available wallet providers
            <br />
            or create a new wallet. What is a wallet?
          </p>
          <div className="row">
            <ConnectMetaMaskButton />
          </div>
          <div style={{height:20}}></div>
          <p>
            We do not own your private keys and cannot access your funds without your confirmation.
          </p>
          <div style={{height:20}}></div>
        </main>
        <Footer/>
      </div>
    </AuthProvider>
  )
}
