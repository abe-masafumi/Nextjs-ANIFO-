// グローバル変数ページ
import { createContext, useEffect, useState } from 'react'

// Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  // アドレスが取得できるかのboolean
  const [isAdress, setIsAdress] = useState(false)
  const [address, setAdress] = useState("");
  let isAd

  // ページを読み込んで最初の１回だけ初期値のfalseが入るからそれの防止
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { ethereum }  = window
      ethereum?.selectedAddress && true ? (isAd = true) : (isAd = false)
      setIsAdress(isAd)
      setAdress(ethereum?.selectedAddress)
    }
  }, [])

  useEffect(() => {
    // 一定時間でメタマスクとの通信確認
    const connecting = setInterval(() => {
      const { ethereum } = window
      ethereum?.selectedAddress && true ? (isAd = true) : (isAd = false)
      setIsAdress(isAd)
      setAdress(ethereum?.selectedAddress)
      console.log(`🆔ウォレット接続状態 -->${isAdress} ログインアドレス-->${address}`)
    }, 1000)
    return () => {
      clearInterval(connecting)
      console.log('💔💔💔アンマウント💔💔💔')
    }
  }, [isAdress,address])

  return <AuthContext.Provider value={{ isAdress,address }}>{children}</AuthContext.Provider>
}

export default AuthProvider
