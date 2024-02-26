import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hotels } from "../features/rapidapi/rapidApiSlice";
import { addItems, removeItems } from "../features/rapidapi/rapidApiSlice";
import Header from "../components/Header";

export default HomeScreen = () => {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels.data);
  const savedItems = useSelector((state) => state.saved.savedItems);

  useEffect(() => {
    dispatch(Hotels());
  }, [dispatch]);

  const handleToSaved = (item) => {
    dispatch(addItems(item));
  };

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  const MarginTop = () => <View style={{ marginTop: 15 }} />;

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MarginTop />
        <View>
          <Text style={styles.titleText}>Top Hotel Indonesia</Text>
          <ScrollView horizontal>
            {allHotels.map((hotel, index) => {
              console.log(allHotels);
              return (
                <View
                  key={index}
                  style={{
                    marginRight: 6,
                    marginLeft: 12,
                  }}
                >
                  <Image
                    source={{ uri: hotel?.image_url }}
                    style={{ width: 250, height: 200 }}
                  />
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
                        {savedItems?.find(
                          (item) => item.name === hotel.name
                        ) ? (
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // paddingHorizontal: 15,
  },

  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});
