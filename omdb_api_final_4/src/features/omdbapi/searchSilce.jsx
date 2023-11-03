import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const Movie_URL = "https://www.omdbapi.com/?s=marvel&apikey=68e1bba8";

const initialState = {
  search: [],
  loading: false,
  error: null,
};

export const movieSearch = createAsyncThunk(
  "seacrh/moviesSearch",
  async (search) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${search}&apikey=68e1bba8`
    );
    return res?.data?.Search;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Movie Search
      .addCase(movieSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(movieSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(movieSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
