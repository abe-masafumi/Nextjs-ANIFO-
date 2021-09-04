import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button } from '../components/Button'

export default function createSingleTreasure() {
  return (
    <div className="container" style={{ background: 'pink', width: 1200 }}>
      <div className="row">
        <div className="col-8" style={{ background: 'orange' }}>
          <Link href="/createTreasure">
            <a>←収集可能なタイプを管理する</a>
          </Link>
          <h1>単一の収集品を作成する</h1>
          {/* ファイルのアップロード */}
          <div>
            <p>ファイルをアップロードする</p>
            <div className="border border-info w-100 rounded" style={{ height: 300 }}></div>
          </div>

          <div style={{ height: 40 }}></div>

          {/* 市場に出す */}
          <div>
            <p>市場に出す</p>
            <p>ユーザーがNFTをすぐに購入できるように価格を入力します</p>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div
                className="border border-info rounded m-1"
                style={{ height: 250, width: 250 }}
              ></div>
              <div
                className="border border-info rounded m-1"
                style={{ height: 250, width: 250 }}
              ></div>
              <div
                className="border border-info rounded m-1"
                style={{ height: 250, width: 250 }}
              ></div>
            </div>
          </div>

          <div style={{ height: 40 }}></div>
          {/* 価格 */}

          <p>価格</p>
          <p>サービス料2.5％</p>
          <p>あなたは0ETHを受け取ります</p>

          {/* 購入したらロックを解除 */}
          <div>
            <p>購入したらロックを解除</p>
            <p>トランザクションが成功すると、コンテンツのロックが解除されます</p>
          </div>
          {/* コレクションを選択 */}
          <div>
            <p>コレクションを選択</p>
            <div className="row">
              <div
                className="border border-info rounded m-1"
                style={{ height: 250, width: 250 }}
              ></div>
              <div
                className="border border-info rounded m-1"
                style={{ height: 250, width: 250 }}
              ></div>
            </div>
          </div>
          {/* 題名 */}
          <p>題名</p>
          {/* 説明（オプション） */}
          <p>説明（オプション）</p>
          {/* 使用料 */}
          <p>使用料</p>
          <Button
            title="アイテムを作成する"
            message="アイテムを作成しますか？"
            color="white"
            backColor="blue"
          />
        </div>
        {/* プレビュー用スペース */}
        <div className="col-4" style={{ background: 'gray' }}>
          <div>プレビュー用スペース</div>
          <div className="border border-info w-100 rounded" style={{ height: 500 }}></div>
        </div>
      </div>
    </div>
  )
}
