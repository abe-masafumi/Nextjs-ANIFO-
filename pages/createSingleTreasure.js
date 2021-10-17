import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { MainButton } from '../components/MainButton'
import { Footer } from '../components/Footer'
import { H6 } from '../components/H6'
import AuthProvider from './AuthContext'
import { ButtonImageFile } from '../components/ButtonImageFile'

export default function CreateSingleTreasure() {
  const handleSubmit = async (e) => {
    const { ethereum } = window
    if (confirm('送信しますか？')) {
      // if (!ethereum?.selectedAddress) {
      //   alert('ウォレットに接続してください')
      //   e.preventDefault()
      // }
    } else {
      alert('送信をていしします')
      e.preventDefault()
    }
    // submit後にアドレスを取得してformに追加
    const myform = document.getElementById('myform')
    const address = ethereum?.selectedAddress
    console.log(`🏦 Meta Maskのアドレスをinput hidden に追加 --> ${address}`)
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', 'address')
    input.setAttribute('value', address)
    myform.appendChild(input)
  }

  return (
    <AuthProvider>
      <div style={{ background: '#0b1118', color: '#eef0e6' }}>
        <Header />
        <form
          id="myform"
          onSubmit={handleSubmit}
          // ローカルと本番用で切り替えてね🤗🤗🤗
          // action="https://loving-kusu-4281.lolipop.io/"
          action="http://localhost/myfile_lab05/%20NFTMetaData/"
          method="POST"
          encType="multipart/form-data"
        >
          {/* <input type="file" id="avatar" name="file" accept="image/*" /> */}
          <div className="container my-5 h-100">
            <div className="row">
              <div className="col-8">
                <Link href="/createTreasure">
                  <a>←収集可能なタイプを管理する</a>
                </Link>
                <h1>単一の収集品を作成する</h1>
                {/* ファイルのアップロード */}
                <div>
                  <h4>ファイルをアップロードする</h4>
                  <div className="border border-info w-100 rounded" style={{ height: 300 }}>
                    <ButtonImageFile />
                  </div>
                </div>
                <div style={{ height: 40 }}></div>
                {/* 市場に出す */}
                <div>
                  <h4>市場に出す</h4>
                  <H6 title={'ユーザーがNFTをすぐに購入できるように価格を入力します'} />
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    {/* コンポーネントをいろんなところで使いまわしているけど、ここだけonclickイベントを入れたい！それはできるのか？コンポーネント側で処理の仕方がわからない。それかコンポーネントを分けるか */}
                    <MainButton width={250} height={250} title={'1'} />
                    <MainButton width={250} height={250} title={'2'} />
                    <MainButton width={250} height={250} title={'3'} />
                  </div>
                </div>
                <div style={{ height: 40 }}></div>
                {/* 価格 */}
                <h4>価格</h4>
                <H6 title={'サービス料2.5％'} />
                <input type="text" name="plice" />
                <H6 title={'あなたは0ETHを受け取ります'} />
                {/* 購入したらロックを解除 */}
                <div>
                  {/* <h4>購入したらロックを解除⇦これの意味がわからない</h4>
            <H6 title={"トランザクションが成功すると、コンテンツのロックが解除されます"} /> */}
                </div>
                {/* コレクションを選択 */}
                <div>
                  <h4>コレクションを選択</h4>
                  <div className="row">
                    <MainButton width={250} height={250} title={'1'} />
                    <MainButton width={250} height={250} title={'2'} />
                  </div>
                </div>
                {/* 題名 */}
                <h4>題名</h4>
                {/* 説明（オプション） */}
                <input type="text" name="title" />
                <h4>
                  説明
                  <span className="text-white-50" style={{ fontSize: 16 }}>
                    （オプション）
                  </span>
                </h4>
                <input type="text" name="discription" />
                <H6 title={'改行が保持されます'} />

                {/* 使用料 */}
                <h4>使用料</h4>
                <H6 title={'推奨：0％、10％、20％、30％。最大は50％です'} />
                <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
                <input type="submit" id="send_mixdata" value={"アイテムを作成する"} style={{color:"#eef0e6", background:"#3a526f", height:"40px", width:"300px" ,borderRadius:"32px",boxShadow:"0px 0px 5px #ccc"}} />
              </div>
              {/* プレビュー用スペース */}
              <div className="col-4">
                <div className="position-fixed">
                  <div className="mt-5">プレビュー用スペース</div>
                  <MainButton width={414} height={500} />
                </div>
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </AuthProvider>
  )
}
