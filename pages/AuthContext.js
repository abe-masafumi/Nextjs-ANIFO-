// グローバル変数ページ
import { createContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import NFTcontractABI from '../contractABI'
let web3js;

function startApp() {
  let NFTcontractAddress = '0x8E85dAa187F2860F9d9dccA0dBBe30B4db487Ac6'
  const cryptoZombies = new web3js.eth.Contract(NFTcontractABI, NFTcontractAddress)
  console.log(cryptoZombies)
}

// Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
if (typeof Web3 !== 'undefined') {
  // Mist/MetaMaskのプロバイダの使用
  web3js = new Web3(Web3.currentProvider)
  // console.log(web3js);
} else {
  console.log('MetaMaskをインストールしてー')
}
startApp()

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  // アドレスが取得できるかのboolean
  const [isAdress, setIsAdress] = useState(false)
  // let isAd

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)

  ページを読み込んで最初の１回だけ初期値のfalseが入るからそれの防止
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { ethereum }  = window
      ethereum?.selectedAddress && true ? (isAd = true) : (isAd = false)
      setIsAdress(isAd)
    }
  }, [])

  useEffect(() => {
    // 一定時間でメタマスクとの通信確認
    const connecting = setInterval(() => {
      const { ethereum } = window
      ethereum?.selectedAddress && true ? (isAd = true) : (isAd = false)
      setIsAdress(isAd)
      console.log(isAdress)
    }, 1000)
    return () => {
      clearInterval(connecting)
      console.log('アンマウント')
    }
  }, [isAdress])

  return <AuthContext.Provider value={{ isAdress }}>{children}</AuthContext.Provider>
}
export default AuthProvider
