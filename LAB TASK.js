import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  StatusBar,
  Text,
  button,
} from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

export default function App() {
  return (
     <View style={styles.parentContainer}>
       <View style={styles.childContainer}>
        <Image style={styles.Image} source={require('./assets/favicon.png')}></Image>
        </View>
        <Text style={style.H1}>Discover Your Own Dream House</Text>
        <Text style={style.H2} >Hello there I'm Iqra Malik from BCS6A. IQrararararrrrara ararararrara </Text>
        <View style={{ flexDirection: "row" }}>
        <Text style={styles.Button}>Sign in</Text>
        <Text style={styles.Button1}>Register</Text>
      </View>
      </View>
  
  )
}

const styles = StyleSheet.create({
  parentContainer:{
    backgroundColor:"black"
    borderRadius:30,
    width:300,
    height:450,
    flex:1,
    alignItems:'center',
    alignSelf:'center',
    paddingTop:8,

  },
  childContainer:{
    backgroundColor:"pink",
    borderRadius:40,
    width:300,
    height:400,

  },
  Image:{
    width:350,
    height:450,
  },
H1:{
  Color:'white',
  fontSize:30,
  width:300,
  textAlign:'Center',
  paddingTop:20,
},
H2:{
  COLOR:'WHITE',
  padding:10,
  textAlign:'Center',
  

}
Button: {
  
  color: "white",
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  backgroundColor: "pink",
  textAlign: "center",
  fontWeight: "bold",
  lineHeight: 50,
  marginLeft: 20,
  fontSize: 20,
  width: 150,
},
Button1: {
  
  textAlign: "center",
  marginRight: 20,
  borderTopRightRadius: 15,
  borderBottomRightRadius: 15,
  backgroundColor: "#f8f8ff",
  fontSize: 20,
  width: 120,
  lineHeight: 50,
  fontWeight: "bold",
},
});
