const hre = require("hardhat");

async function main() {
  // Get the network name
  const networkName = hre.network.name;

  // Get the Contract
  const VerifAIFactory = await hre.ethers.getContractFactory("VerifAI");

  // Get the deployed contract address (replace it with your contract address)
  const contractAddress = 1234567; // Following is a dummy contract address

  // Verify the contract
  await hre.run("verify:verify", {
    network: networkName,
    contract: "contracts/VerifAI.sol:VerifAI",
    address: contractAddress,
  });

  console.log("Contract verified on:", networkName);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
