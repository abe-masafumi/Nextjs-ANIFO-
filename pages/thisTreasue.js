import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/Header'
import AuthProvider from './AuthContext'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { nftmarketaddress, nftaddress } from '../contracts/config'

import Market from '../nftmarketcontract.json'
import NFT from '../nftcontractabi.json'
import { useEffect, useState } from 'react'

export const getServerSideProps = async (context) => {
  const keyword = context.query.name
  console.log(`☀️☀️queryが取得できました--> ${keyword}`)
  // ローカルと本番用で切り替えてね🤗🤗🤗
  // const res = await fetch(`https://loving-kusu-4281.lolipop.io/thisTresure.php`,
  const res = await fetch(`http://localhost/myfile_lab05/%20NFTMetaData/thisTresure.php`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(keyword),
  })
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function thisTreasue({ data }) {
  const tokenID = Number(data['tokenID'])
  // const tokenID = data['tokenID'].toNumber();
  // const [nfts, setNfts] = useState([])
  // const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  // console.log(`MetaMaskAddress--> ${data['MetaMaskAddress']}`)
  // console.log(`create_at--> ${data['create_at']}`)
  // console.log(`discription--> ${data['discription']}`)
  // console.log(`image--> ${data['image']}`)
  // console.log(`meta_id--> ${data['meta_id']}`)
  // console.log(`plice--> ${data['plice']}`)
  // console.log(`title--> ${data['title']}`)
  // console.log(`uniqid--> ${data['uniqid']}`)
  // console.log(`update_at--> ${data['update_at']}`)
  // console.log(data)
  const addressfirst = data['MetaMaskAddress'].substr(0, 4)
  const addressend = data['MetaMaskAddress'].substr(-4)

  const copyAddress = () => {
    const copybutton = document.getElementById('copybutton')
    navigator.clipboard.writeText(data['MetaMaskAddress'])
    copybutton.innerHTML = 'Copyed!'
    window.setTimeout(function () {
      copybutton.innerHTML = `${addressfirst}...${addressend}`
    }, 1500)
  }

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://ropsten.infura.io/v3/23fe94037fc54cf39e0f3e880c587ec3',
    )
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    console.log(tokenContract)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    console.log(marketContract)

    // const data = await marketContract.fetchMarketItems()

    // console.log(data);
    // const items = await Promise.all(
    // data.map(async (i) => {
    // console.log(i);
    // const tokenUri = await tokenContract.tokenURI(i.tokenId)
    // console.log(tokenUri);
    // const meta = await axios.get(tokenUri)
    // let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
    // let item = {
    //   price,
    // tokenId: i.tokenId.toNumber(),
    //   seller: i.seller,
    //   owner: i.owner,
    //   image: meta.data.image,
    //   name: meta.data.name,
    //   description: meta.data.description,
    // }
    // console.log(item);
    // console.log(item);
    // return item
    // }),
    // )
    // setNfts(items)
    // setLoadingState('loaded')
    // console.log(nfts);
  }
  // 購入ボタンを押した時の挙動
  async function buyNft() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(data['plice'].toString(), 'ether')
    console.log(`price-->${price}`)
    const transaction = await contract.createMarketSale(nftaddress, tokenID, {
      value: price,
      gasLimit: 250000,
      gasPrice: 8000000000,
    })
    // console.log(transaction);
    await transaction.wait()
    console.log(transaction)
    loadNFTs()
  }

  return (
    <AuthProvider>
      <div className="vh-100 vw-100 position-fixed" style={{ background: '#0b1118' }}>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 vh-100 d-flex align-items-center justify-content-center">
              <div>
                {/* 🤗🤗デプロイ時変更🤗🤗 */}
                {/* <img src={`https://loving-kusu-4281.lolipop.io/image/${data["uniqid"]}${data["image"]}`} /> */}
                <img
                  src={`http://localhost/myfile_lab05/%20NFTMetaData/image/${data['uniqid']}${data['image']}`}
                />
              </div>
            </div>
            <div className="col-4 vh-100" style={{ background: '#0b1118', color: '#eef0e6' }}>
              <div className="h1">{data['title']}</div>
              <div className="h6" style={{ opacity: 0.2 }}>
                {data['create_at']}
              </div>
              <div className="h3">
                {data['plice']} <span className="h4">ETH</span>
              </div>
              <div className="h3">{data['discription']}</div>
              <div data-toggle="tooltip" title="copy">
                投稿者：
                <button
                  id="copybutton"
                  style={{ border: 'solid 1px #152032', borderRadius: '5rem' }}
                  onClick={copyAddress}
                >
                  {`${addressfirst}...${addressend}`}
                </button>
              </div>
              <div className="position-absolute bottom-0 mb-4 w-25">
                <button onClick={buyNft}>購入する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
