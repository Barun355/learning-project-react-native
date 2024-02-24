import { useState } from "react";
import { View, StatusBar, Button } from "react-native";


export default function App() {

  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true)

  return (
    <View style={{ backgroundColor: "plumb", flex: 1, padding: 60 }}>
      <Button title="Status Bar Toggle" onPress={() => setIsStatusBarVisible(prev => !prev)} />
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden={isStatusBarVisible} />
    </View>
  )
}