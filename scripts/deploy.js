async function main() {
    const Router = await ethers.getContractFactory("UniswapV2Router02");
    const Weth = await ethers.getContractFactory("WETH");

    // Deploying the WETH contract
    const weth = await Weth.deploy();
    await weth.deployed();
    console.log("Contract deployed to address:", weth.address);

    // Deploying the Router contract
    const router = await Router.deploy("0xb11343E1548e686b31f9198d4f232BD8a811C8c3", weth.address);
    await router.deployed();
    console.log("Contract deployed to address:", router.address);
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });