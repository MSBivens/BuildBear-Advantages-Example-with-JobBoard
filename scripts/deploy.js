const hre = require("hardhat");

async function main() {
  const PublicJobBoard = await hre.ethers.getContractFactory("PublicJobBoard");
  const publicBoard = await PublicJobBoard.deploy();

  await publicBoard.deployed();

  console.log("PublicJobBoard.sol deployed to:", publicBoard.address);
}

// ensures the code is clean
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
