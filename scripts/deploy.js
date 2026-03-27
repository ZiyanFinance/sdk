const hre = require("hardhat");

async function main() {
  const Ziyan = await hre.ethers.getContractFactory("ZiyanEquity");
  const ziyan = await Ziyan.deploy("ZIYAN Apple", "zAAPL", hre.ethers.parseEther("0.01"));

  await ziyan.waitForDeployment();

  console.log("ZIYAN deployed to:", await ziyan.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
