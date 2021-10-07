import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

export const getStaticProps = async (context) => {
  require("dotenv").config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

  return {
    props: { API_URL, PUBLIC_KEY, PRIVATE_KEY }, // will be passed to the page component as props
  }
}

const Home = ({ API_URL, PUBLIC_KEY, PRIVATE_KEY }) => {
  console.log(API_URL)
  console.log(PUBLIC_KEY)
  console.log(PRIVATE_KEY)
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../nftcontractabi.json")
const contractAddress = "0x8E85dAa187F2860F9d9dccA0dBBe30B4db487Ac6"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
}
useEffect(() => {
  const params = new URL(document.location).searchParams
  if (params.get('url')) {
    console.log(`👍phpにMetaDataが作成されました`)
    const paramsUrl = params.get('url')
    console.log(`〠i get paramasUrl-->  ${paramsUrl}`)
    // -----ミント作業-----
    // mintNFT(paramsUrl);

    // ----ミント作業--end----
    console.log(`💚💚💚 mint完了 💚💚💚`)
    window.location.href = '/';
  }
}, [])

return  (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{background:"#0b1118"}}>
      <div className="h1" style={{color:"#eef0e6", textShadow:"0px 0px 20px #008282"}}>NFTを発行中発行しています</div>
    </div>
  );
}
export default Home
