async function main() {
    const Waifus = await ethers.getContractFactory("Waifus")
    const SDT_Contract_Addr = "";
  
    // Start deployment, returning a promise that resolves to a contract object
    const myContract = await Waifus.deploy()
    await myContract.deployed(SDT_Contract_Addr);
    console.log("Contract deployed to address:", myContract.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  