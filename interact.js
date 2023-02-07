require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('./utils/EWordContract.json')
const contractAddress = "0x047F65031c8aBf370FDBfEf667B0b1fd702F09Ef";
// export const helloWorldContract = new web3.eth.Contract(
// contractABI,contractAddress);
export const ewordContract = new web3.eth.Contract(
    contractABI,contractAddress);

export const loadEWord = async () => { 
    // const message = await helloWorldContract.methods.message().call(); 
    // return message;

    // const eword = await ewordContract.methods.getEngWordPlWord(1).call(); 
    // return eword;

        const getEngWordPlWord = await
    await ewordContract.methods.getEngWordPlWord(1).call(); 
    return getEngWordPlWord;
};