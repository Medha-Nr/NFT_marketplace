require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PROJECT_ID = "fd269ce880254810bb2bbfaf9ad02fb6";

const privateKey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://rpc-mumbai.matic.today`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.17",
};

/*
"https://rpc-mumbai.matic.today"
 */
