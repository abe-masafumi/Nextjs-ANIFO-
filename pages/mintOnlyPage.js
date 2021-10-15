import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ethers } from 'ethers'
import Contract from '../nftcontractabi.json'
import Web3Modal from 'web3modal'
// 現在の
//コントラクトアドレス（marketdeploy）--> 0x71328CD3827329Ce12835B37c7cC6b485c600631
//コントラクトアドレス（mynftdeploy） --> 0x85b4a524Fed06B546cf708028899A87C21e12131
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
  console.log(PRIVATE_KEY)
  const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
  const web3 = createAlchemyWeb3(API_URL)

  const NFT = require('../nftcontractabi.json')
  const contractAddress = '0x85b4a524Fed06B546cf708028899A87C21e12131'
  const Market = require('../nftmarketcontract.json')
  const nftmarketaddress = '0x71328CD3827329Ce12835B37c7cC6b485c600631'
  // const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
  
  let accounts = []
  async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  }
  // mint作業の定義
  async function mintNFT(url,price) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    
    let contract = new ethers.Contract(contractAddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()
    console.log(tx);
    console.log(event);
    console.log(value);
    console.log(tx.transactionHash);
    console.log(tokenId);
  
    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(contractAddress, tokenId, price, { value: listingPrice })
     tx = await transaction.wait()
     console.log(tx);
    // router.push('/')
  }
  useEffect(() => {
      const params = new URL(document.location).searchParams
      if (params.get('url')) {
        console.log(`👍phpにMetaDataが作成されました`)
        const paramsUrl = params.get('url')
        const paramsPrice = params.get('price')
        console.log(paramsPrice);
        console.log(`〠i get paramasUrl-->  ${paramsUrl}`)
        // -----ミント作業-----
        // 🤗🤗デプロイ時変更🤗🤗
        mintNFT(paramsUrl,paramsPrice)
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
