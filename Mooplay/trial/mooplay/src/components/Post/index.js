import React,{useEffect,useState} from "react";
import {View, Text, Image,
  TouchableWithoutFeedback,LoadError} from 'react-native';
import Video from "react-native-video";
import styles from "./styles";

const Post = ()=> {

const [paused,setPaused]=useState(false);

  const onPlayPause =()=> {
    console.warn("press");
    setPaused(!paused);
  };

  const onProfilePicClick =()=> {
    console.warn("profileCliked");

  };

return(
    <View style ={styles.container}>
       
<TouchableWithoutFeedback onPress={onPlayPause}>
 <Video 
 source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/demoplayer-ecc96.appspot.com/o/demo%2FCopyVideos%2FVideo-DX7WBDjRTkj5MsTVJoq9.mp4?alt=media&token=c72459eb-0541-48e6-86d5-fa36b0ec348c' }}
 

 style={styles.video}
resizeMode={'cover'}
repeat={true}
paused={paused}
onError ={(e: LoadError) =>console.log(e)}
      />
</TouchableWithoutFeedback>

<View style={styles.bottomStyle}>
<Text style={{fontSize:20,
  color:'white',
  marginBottom:100}}>Iam the Bottom</Text>
</View>


<View style={styles.rightIconContainerStyle}>


<TouchableWithoutFeedback onPress={onProfilePicClick}>
<Image style={styles.profilePicStyle}
 source={{uri:'https://firebasestorage.googleapis.com/v0/b/demoplayer-ecc96.appspot.com/o/profilePics%2FProfilePic-L4hpQ06gmVYMzaU1Na4HeNP5nwK2.jpg?alt=media&token=5882d2ad-aa42-462e-9995-d91e369030da'}}
// source={require('../../assets/comment.webp')}
>
</Image> 
</TouchableWithoutFeedback>

<Text
style={{fontSize: 20,
  color:'#fff',
  fontWeight:'bold',
  right:-10
}}
>
  Follow
</Text>

<Image style={styles.rightIconStyle}
//  source={{uri:'https://firebasestorage.googleapis.com/v0/b/demoplayer-ecc96.appspot.com/o/profilePics%2FProfilePic-L4hpQ06gmVYMzaU1Na4HeNP5nwK2.jpg?alt=media&token=5882d2ad-aa42-462e-9995-d91e369030da'}}
source={require('../../assets/forward1.webp')}
>
</Image> 

<Image style={styles.rightIconStyle}
//  source={{uri:'https://firebasestorage.googleapis.com/v0/b/demoplayer-ecc96.appspot.com/o/profilePics%2FProfilePic-L4hpQ06gmVYMzaU1Na4HeNP5nwK2.jpg?alt=media&token=5882d2ad-aa42-462e-9995-d91e369030da'}}
source={require('../../assets/comment.webp')}
>
</Image> 

<Image style={styles.rightIconStyle}
//  source={{uri:'https://firebasestorage.googleapis.com/v0/b/demoplayer-ecc96.appspot.com/o/profilePics%2FProfilePic-L4hpQ06gmVYMzaU1Na4HeNP5nwK2.jpg?alt=media&token=5882d2ad-aa42-462e-9995-d91e369030da'}}
source={require('../../assets/like.webp')}
>
</Image> 

<Image style={styles.rightIconStyle}
//  source={{uri:'https://firebasestorage.googleapis.com/v0/b/demoplayer-ecc96.appspot.com/o/profilePics%2FProfilePic-L4hpQ06gmVYMzaU1Na4HeNP5nwK2.jpg?alt=media&token=5882d2ad-aa42-462e-9995-d91e369030da'}}
source={require('../../assets/share.png')}
>
</Image> 


</View>



    </View>
);




};



export default Post;