import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
//import { FlatList } from 'react-native-gesture-handler';


const EWordss = () => {

    const [engword, setEngword] = useState([
        {
            engword: 'kind', id: '1'
        },
        {
            engword: 'hardly', id: '2'
        },
        {
            engword: 'least', id: '3'
        },
        {
            engword: 'particular', id: '4'
        },
        {
            engword: 'each', id: '5'
        },
    ]);

    const[wordtocompare, setWordtocompare] = useState([
        {
            engword: 'case', id: '6'
        }
    ]);


    const merged_arrays = [...wordtocompare, ...engword];


    const pressHandler = (engword) => {

        console.log(engword);
    }

    return (

        <View style={styles.container}>
            <Text>EWordss</Text>

            <FlatList 
            // data = {engword}
            data = {merged_arrays}
            renderItem = { ({item}) => (
                <View>
                    <TouchableOpacity onPress={()=> pressHandler(item.engword)}><Text style={styles.item}>{item.engword}</Text></TouchableOpacity>
                </View>
    )}
            />
        </View>
    )
}

export default EWordss;

const styles = StyleSheet.create({

    container: {
        // flex: 4,
        flex: 7,
        backgroundColor: 'white',
        marginTop: 40,
        alignItems: 'center'
        // textAlignVertical: 'center'
    },

    item: {
        fontSize: 15,
        backgroundColor: 'white',
        // marginTop: 30,
        marginTop: 20,
        // padding: 20
        padding: 2
    }

});