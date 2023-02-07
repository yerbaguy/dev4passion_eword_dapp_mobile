require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
import React, { useState, useEffect } from 'react';
import { ethers } from "ethers"
import WalletConnectProvider from "@walletconnect/web3-provider"
import EWordContract from './utils/EWordContract.json'

import detectEthereumProvider from '@metamask/detect-provider'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {scheme} from './app.json';

import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
////import { EWordContract } from './EWord';



import { loadEWord } from './interact';
//import loadEWord  from './interact';
import Web3 from 'web3';

const ewordAddress = "0x047F65031c8aBf370FDBfEf667B0b1fd702F09Ef"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

//Using HTTPS
const web3 = createAlchemyWeb3("https://eth-mainnet.g.alchemy.com/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm");

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey); 

console.warn(web3);

//console.warn(web3);

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`;
};

const Section: React.FC<{
    title: string;
  }> = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  };

  const EWords = () => {

    const [data, setData] = React.useState([]);

    const [engW, setEngW] = React.useState([])
    const [plW, setplW] = React.useState([])


    useEffect(()=>{


      // const provider = await detectEthereumProvider()
      // if (provider) {
      //   console.log("detected")
      // }
     

      getEWord();
      console.log(engW);
     // const fetchEngWordPlWord = async() => {
     // async function fetchEngWordPlWord() {

        // const eword = await loadEWord();
        // setEngW(engW)
        // console.log(eword[0]);
  
     // }

     // fetchEngWordPlWord();

     // loadEWordContract();

    // },[],[data])
     },[],[engW])


    const connector = useWalletConnect();

    const connectWallet = React.useCallback(() => {
      return connector.connect();
    }, [connector]);
  
    const killSession = React.useCallback(() => {
      return connector.killSession();
    }, [connector]);


  //  const getEWord = async() => {
    async function getEWord() {
      console.log("eword");

            const provider = await web3.eth.accounts.privateKeyToAccount("d6a736bafc7f7a6ec508475555533eae388590c4d16748afee99f615ff7908dd");

                 const signer = provider.signTransaction

                 const contract = new ethers.Contract(ewordAddress, EWordContract.abi, signer)

                 const wordid = 1;
                 const transaction = await contract.getEngWordPlWord(wordid)

                 setEngW(transaction[0])
                 console.log("transaction", transaction[0]);



        // console.log(provider);

      // const provider = new ethers.providers.Web3Provider(
      //   new WalletConnectProvider({API_KEY: '1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm'})
      // )


//       const provider = await detectEthereumProvider()

// if (provider) {

//   console.log('Ethereum successfully detected!')

//   // From now on, this should always be true:
//   // provider === window.ethereum

//   // Access the decentralized web!

//   // Legacy providers may only have ethereum.sendAsync
//   const chainId = await provider.request({
//     method: 'eth_chainId'
//   })
// } else {

//   // if the provider is not detected, detectEthereumProvider resolves to null
//   console.error('Please install MetaMask!')
// }
      









     // console.log(provider);
    }

    return (
        <View>

<Section title="Connect your wallet">
            {!connector.connected && (
              <TouchableOpacity
                onPress={connectWallet}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Connect a Wallet</Text>
              </TouchableOpacity>
            )}
            {!!connector.connected && (
              <>
                <Text>{shortenAddress(connector.accounts[0])}</Text>
                <TouchableOpacity
                  onPress={killSession}
                  style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Log out</Text>
                </TouchableOpacity>
              </>
            )}
          </Section>

        </View>
    )
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    buttonStyle: {
      backgroundColor: '#3399FF',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#3399FF',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      fontWeight: '600',
    },
  });
export const loadEWordContract = async() => {

  const ewords = await EWordContract.methods.getEWords().call();
  setData(ewords);
  console.warn(ewords);
 
  // const ewordss =  JSON.parse(ewords)
    // setData(ewordss)
    // console.warn(ewordss.getEngWordPlWord(2));

   // const result = JSON.parse(ewordss);
    // setData(result);
    // console.warn(result);



   // console.debug(ewordss)
   // console.warn(data.getEWords());
   // console.warn(ewordss);
  return ewords;
};

  ////export default EWords;

  // export default App;
export default withWalletConnect(EWords, {
  clientMeta: {
    description: 'Connect with WalletConnect',
  },
  redirectUrl: Platform.OS === 'web' ? window.location.origin : `${scheme}://`,
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});