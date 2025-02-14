import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function Card({ item, onPress }) {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.background} source={item.image}>
        <TouchableOpacity style={styles.add} onPress={onPress}>
          <Image source={require("../assets/add_circle.png")} />
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <Text style={{ fontWeight: "600" }}>{item.name}</Text>
        <Text style={{ color: "gray" }}>{item.description}</Text>
        <Text style={{ color: "#E0A75E" }}>${item.price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 180,
    // backgroundColor: "dodgerblue",
    paddingBottom: 10,
  },
  background: {
    height: 250,
    position: "relative",
  },
  add: {
    position: "absolute",
    bottom: 10,
    right: 10,
    cursor: "pointer",
  },
});
export default Card;
