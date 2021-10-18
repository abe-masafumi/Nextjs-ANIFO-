import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'
import Image from 'next/image'

export const ConnectMetaMaskButton = () => {
  const useWindow = () => {
    return typeof window !== 'undefined'
  }

  const OnClickConnect = async () => {
    try {
      if (useWindow()) {
        // これの赤線が気になる！
        const { ethereum } = window
        const newAccounts = await ethereum.request({ method: 'eth_requestAccounts' })
        Router.push('/')
      }
    } catch (error) {
      console.error(error)
      console.error('接続がキャンセルされたかエラーが発生しました')
    }
  }

  return (
    <>
      <div className="col-4">
        <div
          className="border border-info rounded m-1 overflow-hidden"
          style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
          onClick={OnClickConnect}
        >
          <Image
            // 🤗🤗デプロイ時変更🤗🤗
            src="/metamask.png"
            alt="fox image"
            width={400}
            height={400}
            margin="auto"
          />
        </div>
      </div>
    </>
  )
}
