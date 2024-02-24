import { View, Text } from "react-native";


export default function App(){
  return (
    <View style={{backgroundColor: "plumb", flex: 1, padding: 60}}>
      <Text>
        <Text style={{color: "blue"}}>Nested</Text> Text
      </Text>
    </View>
  )
}