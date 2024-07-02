import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CartScreenCard from "../components/CartScreenCard";

function CartScreen({ onDelete, cartItems }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/Logo.png")} />
        <Image
          style={styles.searchIcon}
          source={require("../assets/Search.png")}
        />
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.cardContainerText}>CHECKOUT</Text>
        <View style={styles.cards}>
          {cartItems.map((item) => (
            <CartScreenCard
              item={item}
              key={item.id}
              onDelete={(id) => onDelete(id)}
            />
          ))}
        </View>
      </View>
      <View style={styles.totalPrice}>
        <Text style={{ fontSize: 20, letterSpacing: 2 }}>EST.TOTAL</Text>
        <Text style={{ fontSize: 20, color: "#E0A75E", letterSpacing: 2 }}>
          $360
        </Text>
      </View>

      <TouchableOpacity style={styles.footer}>
        <Image
          style={{ color: "#fff" }}
          source={require("../assets/shoppingBag.png")}
        />
        <Text style={{ color: "#fff", fontSize: 24 }}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "dodgerblue",
    position: "relative",
  },
  header: {
    height: 60,
    width: "100%",
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    right: 10,
  },
  cards: {
    width: "100%",
    height: 560,
  },
  cardContainer: {},
  cardContainerText: {
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
  },
  totalPrice: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 50,
  },
  footer: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default CartScreen;
