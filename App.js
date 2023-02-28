/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';

require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
//import React from 'react';

import Web3 from 'web3';

import  EWordContractt  from './utils/EWordContract.json';

const ewordAddress = "0x047F65031c8aBf370FDBfEf667B0b1fd702F09Ef"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');


import { useState, useEffect} from 'react';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import type {Node} from 'react';
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EWords from './EWords';
import { Formik } from 'formik';


function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function LearnWordsScreen({ navigation }) {

  // const [engword, setEngword] = React.useState('');
  const [engword, setEngword] = useState('');
  const [plword, setPlword] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([1]);

   // var data = 1;
  


   const countrandeword = (data) => {
  //  const countrandeword = () => {



      console.log("dataa_countrandeword", data);

      const min = Math.ceil(1);
      // max = Math.floor(data.length);
      const max = Math.floor(data);
  
      // return Math.floor(Math.random() * (max - min) + min);
      const dataa =  Math.floor(Math.random() * (max - min) + min);
      console.log("random_int_countrandeword", dataa)

        data = dataa;
        engWordPlWord(data);

      return data;
  }

  const engWordPlWord = (countrand) => {

       // var data = [];

       console.log("engwordplword", countrand);

       Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');

       const contractt = new Contract(EWordContractt.abi, ewordAddress);


       var result = contractt.methods.getEngWordPlWord(countrand).call((error, result) => {
        console.log(result);
        console.log(result[0]);
        var engw = result[0];
       // data = engw;
        setEngword(engw);
        console.log(result[1]);
        var plw = result[1];
        setPlword(plw);
    });

  }

  const compareTextWithEngWord = (newText) => {

       var engw = newText

       
       console.log(newText);
       console.log("engword", engword);
       console.log("text", text);

       if (engw === engword) {
        console.log("OK");
        setEngword("");
        countrandeword(data);
        // setEngword("");
       } else {
        console.log("No");
       }
       
  }

  useEffect(()=>{

    var data = [];

    Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');

    const contractt = new Contract(EWordContractt.abi, ewordAddress);
     
    //const account = contract.methods.accounts
     // console.log("account", account)

    console.log("contract", contractt);


    var result1 = contractt.methods.getEWords().call((error, result1) => {

      console.log("result1", result1.length);
       // var data = result1.length;
       // setData(data);
        // data = result1.length;
        data_result = result1.length;
        data = data_result
        setData(data);
        console.log("data_result", data);     
        var countrand = countrandeword(data);
     // var countrand = countrandeword();
       console.log("countrand", countrand);
   
      const min = Math.ceil(1);
      // max = Math.floor(data.length);
    const max = Math.floor(data);
  
      // return Math.floor(Math.random() * (max - min) + min);
      const dataa =  Math.floor(Math.random() * (max - min) + min);
      console.log("random_int", dataa)

          


    //   var result = contractt.methods.getEngWordPlWord(dataa).call((error, result) => {
    //     console.log(result);
    //     console.log(result[0]);
    //     console.log(result[1]);
    // });

    var result = contractt.methods.getEngWordPlWord(countrand).call((error, result) => {
      console.log(result);
      console.log(result[0]);
      var engw = result[0];
      setEngword(engw);
      console.log(result[1]);
  });
    

  });


    getengword();
    console.log(engword)
    compareTextWithEngWord();
  // },[],[engword], [compareTextWithEngWord])
 },[])
//})

  const getengword = () => {

    console.log("engword", text);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <Text>Learn Words</Text>

      <SafeAreaView>

      <TextInput
        placeholder="Type here to translate!"
        // onChangeText={newText => setText(newText)}
        onChangeText={newText => compareTextWithEngWord(newText)}
        
        defaultValue={text}
      />

      <Text>{text}</Text>
      {/* <Text>{engword}</Text> */}
      <Text>{plword}</Text>





        <TextInput
        // onChangeText={engw => setEngword(engw)}
        // onChangeText={engw => setEngword(engw)}
      
      
        // onChangeText={setEngword}
        // placeholder= 'english-word'
        // value={engword}
      
      
      />
      </SafeAreaView>
    </View>
  );
}

function WordsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <Text>Words</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



const Section = ({children, title}): Node => {
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

const Drawer = createDrawerNavigator();

const App: () => Node = () => {

  const [engword, setEngword] = React.useState('');
  const [text, setText] = useState('');

  const isDarkMode = useColorScheme() === 'dark';


//  useEffect(()=> {

//   LearnWordsScreen();

//  },[])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <NavigationContainer>
    

<SafeAreaView>
        <TextInput
        // onChangeText={engw => setEngword(engw)}
        // onChangeText={engw => setEngword(engw)}
        onChangeText={newText => setEngword(newText)}
        placeholder= 'english-word'
       // value={engword}
        defaultValue={text}
        />
        <Text>{text}</Text>
      </SafeAreaView>


  
    <Drawer.Navigator initialRouteName="Learn">
      
      <Drawer.Screen name="Words" component={WordsScreen} />
      <Drawer.Screen name="Learn" component={LearnWordsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>



    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>

    //         <EWords />


    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
});

export default App;
