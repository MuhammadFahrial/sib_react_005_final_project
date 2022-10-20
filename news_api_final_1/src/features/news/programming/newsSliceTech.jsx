import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const news_API_Tech =
  "https://newsapi.org/v2/everything?" +
  "q=programming&" +
  "from=2022-08-30&" +
  "apiKey=9ddab756845e4422a9d321f36b9b351a";

const initialState = {
  entities: [],
};

export const fetchNews = createAsyncThunk("articles/fetchNews", async () => {
  const response = await axios.get(news_API_Tech);
  return response.data;
});

const newsSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.entities = action.payload.articles;
    });
  },
});

export default newsSlice.reducer;
