import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

const initialState = {
  entities: [],
  loading: false,
  error: null,
};

export const Products = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get(PRODUCTS_URL);
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(Products.fulfilled, (state, action) => {
        state.entities = action.payload;
      })
      .addCase(Products.pending, (state) => {
        state.loading = true;
      })
      .addCase(Products.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
