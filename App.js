import { View, Text, Image, ScrollView, Pressable } from "react-native";
const logoImage = require("./assets/adaptive-icon.png")


export default function App() {
  return (
    <View style={{ backgroundColor: "plumb", flex: 1, padding: 60 }}>
      <ScrollView>
        <Pressable onPressIn={() => console.log("In Image")} onPressOut={() => console.log("Out Image")} onPress={() => console.log("image pressed")}>
          <Image source={logoImage} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("text pressed")}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Pressable>
        <Pressable onPressIn={() => console.log("In Image")} onPressOut={() => console.log("Out Image")} onLongPress={() => console.log("Long pressed")}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}