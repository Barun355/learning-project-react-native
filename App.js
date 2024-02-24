import { useState } from "react";
import { View, ActivityIndicator, Button } from "react-native";


export default function App() {
  
  const [isActivityIndicatorLoading, setIsActivityIndicatorLoading] = useState(false)


  return (
    <View style={{ backgroundColor: "plumb", flex: 1, padding: 60 }}>
      <Button title="Start Loading" onPress={() => setIsActivityIndicatorLoading(prev => !prev)} />
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={isActivityIndicatorLoading} />
    </View>
  )
}