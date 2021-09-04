import Link from 'next/link'
import styles from '../styles/createTreasure.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Heading } from '@chakra-ui/layout'

export default function createTreasure() {
  return (
    <div className="container" style={{ width: 500 }}>
      <header>{/* ここにindexのheaderを入れる(headerをコンポーネントに？) */}</header>
      <main className="container w-100">
        <Link href="/">
          <a>← go back</a>
        </Link>
        <h1>Create collectible</h1>
        <p>
          Choose “Single” if you want your collectible to be one of a kind or
          <br />
          “Multiple” if you want to sell one collectible multiple times
        </p>

        <div className="row text-center w-100">
          <div className="col-sm">
            <Link href="/createSingleTreasure">
              <a>
                <div className="border border-primary m-2" style={{ height: 250 }}>
                  Single
                </div>
              </a>
            </Link>
          </div>
          <div style={{ width: 20 }}></div>
          <div className="col-sm">
            <Link href="/createSingleTreasure">
              <a>
                <div className="border border-primary m-2" style={{ height: 250 }}>
                  Multiple
                </div>
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
  )
}
