import { View } from "react-native";


export default function App(){
  return (
    <View style={{backgroundColor: "plumb", flex: 1}}>
      <View style={{backgroundColor: "lightblue", width: 200, height: 200, margin: 10}}></View>
      <View style={{backgroundColor: "lightgreen", width: 200, height: 200, margin: 10}}></View>
    </View>
  )
}