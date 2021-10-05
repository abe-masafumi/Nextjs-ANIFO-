// グローバル変数ページ
import { createContext, useEffect, useState } from 'react'

// Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  // アドレスが取得できるかのboolean
  const [isAdress, setIsAdress] = useState(false)
  let isAd

  // ページを読み込んで最初の１回だけ初期値のfalseが入るからそれの防止
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
      console.log(`🆔ウォレット接続状態 -->${isAdress}`)
    }, 1000)
    return () => {
      clearInterval(connecting)
      console.log('💔💔💔アンマウント💔💔💔')
    }
  }, [isAdress])

  return <AuthContext.Provider value={{ isAdress }}>{children}</AuthContext.Provider>
}
export default AuthProvider
