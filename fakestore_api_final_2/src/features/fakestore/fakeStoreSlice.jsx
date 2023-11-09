import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

const initialState = {
  entities: [],
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
    builder.addCase(Products.fulfilled, (state, action) => {
      // state.entities.push(...action.payload);
      state.entities = action.payload;
    });
  },
});

export default productSlice.reducer;
