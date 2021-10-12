async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy("0x9c8Cc3b0DeC2dbdf2ceD454eDF91695BBFd2cff2")
  console.log("デプロイしたコントラクトアドレス-->:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
