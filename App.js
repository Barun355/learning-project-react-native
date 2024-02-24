import { useState } from "react";
import { View, Pressable, Button, Modal } from "react-native";
const logoImage = require("./assets/adaptive-icon.png")


export default function App() {

  const [isModalVisible, setIsModalVisisble] = useState(false)

  return (
    <View style={{ backgroundColor: "plumb", flex: 1, padding: 60 }}>
        <Button
          title="Press"
          color="midnightblue"
          onPress={() => {
            console.log("Button  Pressed")
            setIsModalVisisble(true)
          }}
        />
        <Modal visible={isModalVisible} onRequestClose={() =>  setIsModalVisisble(false)} animationType="slide">
          <View style={{flex: 1, backgroundColor: "lightblue", padding: 60}}>
            <Button title="Close" color="midnightblue" onPress={() => setIsModalVisisble(false)}/>
          </View>
        </Modal>
    </View>
  )
}