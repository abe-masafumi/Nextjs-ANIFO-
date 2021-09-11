import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'

export const ConnectMetaMaskButton = () => {
  const useWindow = () => {
    return typeof window !== 'undefined'
  }

  const onClickConnect = async () => {
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
          className="border border-info rounded m-1"
          style={{ height: 200, width: 250, boxShadow: '0px 0px 6px #ccc' }}
          onClick={onClickConnect}
        ></div>
      </div>
    </>
  )
}
