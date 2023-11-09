import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  detail: [],
  loading: false,
  error: null,
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
    builder
      .addCase(productDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
     .addCase(productDetail.pending, (state) => {
        state.loading = true;
      })
     .addCase(productDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default detailSlice.reducer;
