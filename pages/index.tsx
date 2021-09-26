import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Treasure } from '../components/Treasure'
import AuthProvider from './AuthContext'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <div className={styles.container}>
        <Head>
          <title>NEXTで作る卒制の旅</title>
          <meta name="description" content="Generated by create next app" />
          {/* bootstrapのレスポンシブ対応 */}
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="container-fluid ">
          <div className="row">
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
            <Treasure />
          </div>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default Home
