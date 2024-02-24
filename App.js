import { useState } from "react";
import { View, ActivityIndicator, Button, Alert } from "react-native";


export default function App() {
  
  const [isActivityIndicatorLoading, setIsActivityIndicatorLoading] = useState(false)


  return (
    <View style={{ backgroundColor: "plumb", flex: 1, padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button title="Alert 2" onPress={() => Alert.alert("Invalid Data", "DOB incorrect")} />
      <Button title="Alert 3" onPress={() => {
        Alert.alert(
          "Invalid Data",
          "DOB incorrect",
          [{
            text: 'Cancel',
            onPress: () => console.log("Cancel Pressed")
          },
          {
            text: 'Ok',
            onPress: () => console.log("Ok Pressed")
          }]
        )
      }}
      />
    </View>
  )
}