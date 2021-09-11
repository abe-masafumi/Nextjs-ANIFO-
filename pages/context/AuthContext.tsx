// グローバル変数ページ
import { createContext, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}
type InitialState = {
  isAdress: boolean
}

export const AuthContext = createContext<InitialState | null>(null)
export const AuthProvider: React.VFC<Props> = ({ children }) => {
  // アドレスが取得できるかのboolean
  const [isAdress, setIsAdress] = useState(false)
  let isAd

  // ページを読み込んで最初の１回だけ初期値のfalseが入るからそれの防止
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { ethereum } = window
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
