import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet, View, Pressable, Image } from "react-native";
import Home from "../../assets/home.png";
import Whislist from "../../assets/wishlist.png";
import History from "../../assets/history.png";
import Profile from "../../assets/customer.png";
import About from "../../assets/about.png";

const Nav = () => {
  const navigation = useNavigation();
  const handleAboutUs = () => {
    navigation.navigate("About", { name: "Hello About Us" });
  };

  const handleHome = () => {
    navigation.navigate("Home", { name: "Hello Home Screen" });
  };

  const handleWhislist = () => {
    navigation.navigate("Whislist", { name: "Hello Whislist" });
  };

  const handleHistory = () => {
    navigation.navigate("History", { name: "Hello History" });
  };

  const handleProfile = () => {
    navigation.navigate("Profile", { name: "Hello Profile" });
  };

  console.log(navigation.navigate);
  return (
    <View style={styles.container}>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => handleHome()}>
            <Image source={Home} style={styles.ImageContainer} />
          </Pressable>

          <Pressable onPress={() => handleWhislist()}>
            <Image source={Whislist} style={styles.ImageContainer} />
          </Pressable>

          <Pressable onPress={() => handleHistory()}>
            <Image source={History} style={styles.ImageContainer} />
          </Pressable>

          <Pressable onPress={() => handleProfile()}>
            <Image source={Profile} style={styles.ImageContainer} />
          </Pressable>

          <Pressable onPress={() => handleAboutUs()}>
            <Image source={About} style={styles.ImageContainer} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  ImageContainer: {
    width: 24,
    height: 24,
  },

  NavContainer: {
    width: "100%",
    position: "sticky",
    bottom: 0,
  },

  NavBar: {
    flexDirection: "row",
    backgroundColor: "#c3cfff",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 24,
  },

  ViewText: {
    fontSize: 15,
    color: "black",
    paddingVertical: 20,
    borderRightColor: "blue",
  },
});

export default Nav;
