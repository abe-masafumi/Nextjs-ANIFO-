import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ethers } from 'ethers'
import Contract from '../nftcontractabi.json'
// 現在の
//コントラクトアドレス（marketdeploy）--> 0x9c8Cc3b0DeC2dbdf2ceD454eDF91695BBFd2cff2
//コントラクトアドレス（mynftdeploy）--> 0xe389cE61ca77F77E413A717f0Ae8c9e296aC16bB
export const getStaticProps = async (context) => {
  require('dotenv').config()
  const API_URL = process.env.API_URL
  const PUBLIC_KEY = process.env.PUBLIC_KEY //使わない
  const PRIVATE_KEY = process.env.PRIVATE_KEY

  return {
    props: { API_URL, PUBLIC_KEY, PRIVATE_KEY }, // will be passed to the page component as props
  }
}

const Home = ({ API_URL, PUBLIC_KEY, PRIVATE_KEY }) => {
  console.log(API_URL)
  // console.log(PUBLIC_KEY)
  console.log(PRIVATE_KEY)
  const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
  const web3 = createAlchemyWeb3(API_URL)

  const contract = require('../nftcontractabi.json')
  const contractAddress = '0xe389cE61ca77F77E413A717f0Ae8c9e296aC16bB'
  const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
  nftContract.methods
    .tokenURI(1)
    // .totalSupply() //継承実験-->失敗
    .call()
    .then((url) => {
      console.log(`callしたurl--> ${url}`)
    })
  let accounts = []

  // async function requestAccount() {
  //   await window.ethereum.request({ method: 'eth_requestAccounts' })
  // }
  async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  }

  // mint作業の定義
  async function mintNFT(tokenURI) {
    // if (typeof window.ethereum !== 'undefined') {
    // await requestAccount()
    await getAccount()
    // console.log(accounts[0])
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const signer = provider.getSigner()
    // const contract = new ethers.Contract(contractAddress, Contract.abi, signer)
    // const transaction = await contract.mintNFT(PUBLIC_KEY, tokenURI)
    // await transaction.wait()
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: contractAddress,
            // gasPrice: '0x09184e72a000',
            // gas: '0x2510',
            data: nftContract.methods.mintNFT(accounts[0], tokenURI).encodeABI(),
          },
        ],
      })
      .then((txHash) => {
        console.log(txHash)
        console.log(`💚💚💚 mint完了 💚💚💚`) //処理が終わってから表示したい
        // window.location.href = `/?${hash}`;
      })
      .catch((error) => {
        console.error
        console.log(
          '送信がキャンセルされたか、トランザクションを送信する際に何か問題が発生しました:',
          error,
        )
      })
    // console.log(`💚💚💚 mint完了 💚💚💚`)

    // }

    //   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

    //   // the transaction
    //   const tx = {
    //     from: PUBLIC_KEY,
    //     to: contractAddress,
    //     nonce: nonce,
    //     gas: 53520,
    //     value: "100",
    //     data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    //   }

    //   const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
    //   signPromise
    //     .then((signedTx) => {
    //       web3.eth.sendSignedTransaction(
    //         signedTx.rawTransaction,
    //         function (err, hash) {
    //           if (!err) {
    //             console.log(
    //               "あなたのトランザクションのハッシュは: ",
    //               hash,
    //               "\nAlchemyのMempoolをチェックして、取引の状況を確認しましょう"
    //             )
    //             console.log(`💚💚💚 mint完了 💚💚💚`)
    //             window.location.href = `/?${hash}`;

    //           } else {
    //             console.log(
    //               "トランザクションを送信する際に何か問題が発生しました:",
    //               err
    //             )
    //           }
    //         }
    //       )
    //     })
    //     .catch((err) => {
    //       console.log("Promise failed:", err)
    //     })
  }
  useEffect(() => {
      const params = new URL(document.location).searchParams
      if (params.get('url')) {
        console.log(`👍phpにMetaDataが作成されました`)
        const paramsUrl = params.get('url')
        console.log(`〠i get paramasUrl-->  ${paramsUrl}`)
        // -----ミント作業-----
        // 🤗🤗デプロイ時変更🤗🤗
        mintNFT(paramsUrl)
        // ----ミント作業--end----
      }
    },[])

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ background: '#0b1118' }}
    >
      <div className="h1" style={{ color: '#eef0e6', textShadow: '0px 0px 20px #008282' }}>
        NFTを発行しています
      </div>
    </div>
  )
}
export default Home
