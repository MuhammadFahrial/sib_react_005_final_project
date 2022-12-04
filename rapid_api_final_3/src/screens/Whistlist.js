import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { addItems, removeItems } from "../features/rapidapi/rapidApiSlice";
import { useDispatch, useSelector } from "react-redux";

const Whistlist = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <View style={styles.container}>
      {/* <Text>Whishlits</Text> */}

      <ScrollView>
        {savedItems.map((hotel, index) => {
          return (
            <View
              key={index}
              style={{
                width: 200,
                paddingVertical: 5,
                flexDirection: "row",
              }}
            >
              <Image
                source={{ uri: hotel?.image_url }}
                style={{ width: 150, height: 150 }}
              />

              <View style={{ paddingHorizontal: 10 }}>
                <Text>{hotel?.name}</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  {hotel?.label}
                </Text>
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
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});

export default Whistlist;
