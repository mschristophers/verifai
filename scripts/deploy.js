const hre = require("hardhat");

async function main() {
  // Get the Contract Factory
  const VerifAIFactory = await hre.ethers.getContractFactory("VerifAI");

  // Deploy the contract and wait for it to be mined
  const verifAI = await VerifAIFactory.deploy();
  await verifAI.deployed();

  console.log("VerifAI deployed to:", verifAI.address);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
