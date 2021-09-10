import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/dist/shared/lib/router/router';
import Router from 'next/router'
import { useEffect } from 'react';

// const { ethers } = require("ethers");
// console.log(ethers)
export const ConnectMetaMaskButton = () => {
  let accounts: []

  const useWindow = () => {
    return typeof window !== "undefined"
  }
  
  const isMetaMaskConnected = () => {
    return accounts && accounts.length > 0
  }
  
  const onClickConnect = async () => {
    try {
      if (useWindow()) {
        const { ethereum } = window;
        console.log(ethereum);
        const newAccounts = await ethereum.request({ method: 'eth_requestAccounts' });
        accounts = newAccounts;
        console.log(accounts);
        Router.push('/');
        }
      } catch (error) {
        console.error(error);
        console.error("接続がキャンセルされたかエラーが発生しました");
      }
      if (isMetaMaskConnected()) {
        alert('ログイン完了');
      }
    };

      
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
