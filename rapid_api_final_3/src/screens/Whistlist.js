import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { removeItems } from "../features/rapidapi/rapidApiSlice";
import { useDispatch, useSelector } from "react-redux";

const Whistlist = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  const itemWhislist = savedItems.map((hotel, index) => {
    return (
      <View
        key={index}
        style={{
          width: 200,
          paddingVertical: 15,
          flexDirection: "row",
        }}
      >
        <Image
          source={{ uri: hotel?.image_url }}
          style={{
            width: 100,
            height: 100,
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
          }}
        />

        <View style={{ paddingHorizontal: 10 }}>
          <Text>{hotel?.name}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>{hotel?.label}</Text>
          <Pressable
            onPress={() =>
              savedItems?.find((item) => item.name === hotel.name)
                ? handleToRemove(hotel)
                : handleToSaved(hotel)
            }
          >
            {savedItems?.find((item) => item.name === hotel.name) ? (
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../../assets/Favorite1.png")}
              />
            ) : (
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../../assets/Favorite.png")}
              />
            )}
          </Pressable>
        </View>
      </View>
    );
  });

  return (
    <View>
      <View style={itemWhislist.length <= 0 ? "" : styles.container}>
        <ScrollView>{itemWhislist}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#fff",
  },
});

export default Whistlist;
