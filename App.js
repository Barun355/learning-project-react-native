import { View, Button } from "react-native";
const logoImage = require("./assets/adaptive-icon.png")


export default function App() {
  return (
    <View style={{ backgroundColor: "plumb", flex: 1, padding: 60 }}>
      <Button title="Press" onPress={() => console.log("Button Pressed")} color="midnightblue" disabled />
    </View>
  )
}