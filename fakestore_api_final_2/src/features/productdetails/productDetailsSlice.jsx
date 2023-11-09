import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  detail: [],
};

export const productDetail = createAsyncThunk(
  "products/detailProducts",
  async (productId) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return res.data;
  }
);

const detailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(productDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default detailSlice.reducer;
