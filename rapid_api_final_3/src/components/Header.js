import { View, TextInput, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { searchHotels } from "../features/rapidapi/rapidApiSlice";
import Search from "../../assets/search.png";

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const submitHandler = () => {
    dispatch(searchHotels(query)).then(() => {
      if (query <= 0) {
        navigation.navigate("Home", { name: "Home" });
      } else {
        navigation.navigate("Search", { name: "Hello Search" });
      }
    });
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 12,
        marginTop: "6%",
      }}
    >
      <TextInput
        style={styles.inputText}
        placeholder="Where do you want to go?"
        onChangeText={(text) => setQuery(text)}
        value={query}
      />
      <Pressable
        onPress={submitHandler}
        style={{
          backgroundColor: "#c3cfff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
        }}
      >
        <Image source={Search} style={{ width: 24, height: 24 }} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
    flex: 1,
  },
});
