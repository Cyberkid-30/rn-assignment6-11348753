import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/screens/HomeScreen";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([{}]);

  const handlePressEvent = (item) => {
    // setCartItems([...cartItems, item]);
  };
  return (
    <View style={styles.container}>
      <HomeScreen handlePress={(item) => handlePressEvent(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
