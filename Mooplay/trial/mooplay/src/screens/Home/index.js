import React from "react";
import {View,Text,Image} from "react-native";
import Post from '../../components/Post';
import styles from "./styles";
const Home = () => {
    return (
        <View>
            <Post/>

            <View style={styles.homeIconContainerStyle}>


<Text
style={{fontSize:20,
    color:'white',
    marginBottom:100}}
>
     BottomTAB
</Text>

            </View>
            </View>
    );
};
export default Home;