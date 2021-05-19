import {StyleSheet,Dimensions} from "react-native";

const styles= StyleSheet.create({

    container : { 
        width: "100%",
        height: Dimensions.get('window').height,
        backgroundColor: 'black'
    },
video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
},

bottomStyle:{
height:'100%',
justifyContent:'flex-end',
position:'absolute'
},
rightIconContainerStyle:{
    alignSelf:'flex-end', 
    position:'absolute'
},

profilePicStyle:{
 marginTop:50,
 width:80,
 height:80,
 borderRadius:40,
 borderWidth:2,
 borderColor:'#fff'
},
rightIconStyle:{
    marginTop:40,
    width:28,
    height:28,
    right: -30
   },



});

export default styles;