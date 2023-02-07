const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", // Replace with your Alchemy API Key.
  network: Network.ETH_GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();


// require('dotenv').config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey); 

// // const contractABI = require('../contract-abi.json')
// const contractABI = require('./utils/EWordContract.json')
// const ewordAddress = "0x047F65031c8aBf370FDBfEf667B0b1fd702F09Ef";

// export const EWordContract = new web3.eth.Contract(
//   contractABI,
//   ewordAddress
// );