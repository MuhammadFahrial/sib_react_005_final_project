import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { addItems, removeItems } from "../features/rapidapi/rapidApiSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const searchHotels = useSelector((state) => state.hotels.search);
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleToSaved = (item) => {
    dispatch(addItems(item));
  };

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <View>
      <ScrollView vertical>
        {searchHotels.map((hotel, index) => {
          return (
            <View
              key={index}
              style={{
                marginRight: 6,
                marginLeft: 12,
                display: "flex",
                flexDirection: "row",
                marginVertical: 20,
                gap: 20,
              }}
            >
              {hotel.image_url === undefined ? (
                <Text
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    width: 150,
                    height: 150,
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    paddingVertical: 60,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                >
                  Image not found
                </Text>
              ) : (
                <Image
                  source={{ uri: hotel.image_url }}
                  style={{
                    width: 150,
                    height: 150,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
              )}
              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", width: 217 }}>
                    {hotel?.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray", width: 215 }}>
                    {hotel?.label}
                  </Text>
                </View>
                <View>
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
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingHorizontal: 15,
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});
