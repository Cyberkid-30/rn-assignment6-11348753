import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./App/screens/HomeScreen";
import { useState,useEffect } from "react";
import CartScreen from "./App/screens/CartScreen";

export default function App() {
  const [cartItems, setCartItems] = useState([{}]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("shoppingItems");
        if (storedItems) {
          setCartItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    };
    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem("shoppingItems", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Failed to save items:", error);
      }
    };
    saveItems();
  }, [cartItems]);

  const handleDelete = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handlePressEvent = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      <HomeScreen handlePress={(item) => handlePressEvent(item)} />
      {/* <CartScreen cartItems={cartItems} onDelete={(id) => handleDelete(id)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
