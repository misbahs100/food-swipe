import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SwipeableImage({ user }) {
  return (
    <View>
      <Image source={{ uri: user.strDrinkThumb }} style={styles.photo} />
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>
            {user.strDrink}
          </Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {user.strCategory}
          </Text>
        </View>
        <View style={styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
          <Text style={[styles.textSecondary, styles.textShadow]}>
            {user.strGlass}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: "80vh",
    resizeMode: "cover",
    borderRadius: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    // top: '100%'
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPrimary: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "white",
    marginLeft: 10,
    fontSize: 25,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
