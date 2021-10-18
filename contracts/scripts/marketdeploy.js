async function main() {
  const MyNFT = await ethers.getContractFactory("NFTMarket")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  console.log("デプロイしたコントラクトアドレス(NFTMarket)-->:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
