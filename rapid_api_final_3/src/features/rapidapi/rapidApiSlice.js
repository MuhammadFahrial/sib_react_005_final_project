import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://apidojo-booking-v1.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d98230dc92msh3741783c327b172p16f25bjsnf98b3f16584e",
    "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
  },
};

const initialState = {
  search: [],
  data: [],
  savedItems: [],
  loading: false,
  error: null,
};

export const Hotels = createAsyncThunk("hotels/fetchHotels", async () => {
  try {
    const res = await axios.get(
      `${baseUrl}/locations/auto-complete?text=indonesia&languagecode=en-us`,
      options
    );
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const searchHotels = createAsyncThunk(
  "search/fetchHotels",
  async (search) => {
    try {
      const res = await axios.get(
        `${baseUrl}/locations/auto-complete?text=${search}&languagecode=en-us`,
        options
      );
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const rapidApiSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.savedItems.unshift(action.payload);
      AsyncStorage.setItem("saved", JSON.stringify(state.savedItems));
    },

    removeItems: (state, action) => {
      state.savedItems = state.savedItems.filter(
        (item) => item.name !== action.payload.name
      );
      AsyncStorage.setItem("saved", JSON.stringify(state.savedItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Hotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(Hotels.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(Hotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(searchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addItems, removeItems } = rapidApiSlice.actions;
export default rapidApiSlice.reducer;
