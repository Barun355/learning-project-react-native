import { View, Text, Image, ImageBackground } from "react-native";
const logoImage = require("./assets/adaptive-icon.png")


export default function App(){
  return (
    <View style={{backgroundColor: "plumb", flex: 1, padding: 60}}>
      {/* <Image source={logoImage} style={{width: 300, height: 300}} />
      <Image source={{uri: "https://picsum.photos/300"}} style={{width: 300, height: 300}} /> */}
      <ImageBackground source={logoImage} style={{flex: 1}}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  )
}