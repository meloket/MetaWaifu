async function main() {
    const Waifus = await ethers.getContractFactory("Waifus")
    const SDT_Contract_Addr = "0x5c117723c91c24B8A3411d4BE19B9e9c603b5051";
  
    // Start deployment, returning a promise that resolves to a contract object
    const myContract = await Waifus.deploy(SDT_Contract_Addr)
    await myContract.deployed();
    console.log("Contract deployed to address:", myContract.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  