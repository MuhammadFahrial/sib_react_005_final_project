// Mengimpor fungsi-fungsi yang dibutuhkan dari Redux Toolkit dan Redux-Logger
import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../features/fakestore/fakeStoreSlice";
import detailReducer from "../features/productdetails/productDetailsSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/login/AuthSlice";
import logger from "redux-logger";

// Membuat store Redux dengan konfigurasi menggunakan Redux Toolkit
export const store = configureStore({
  // Menentukan reducers yang akan mengelola bagian-bagian state dalam store
  reducer: {
    products: productReducer, // Reducer untuk mengelola state produk
    productDetail: detailReducer, // Reducer untuk mengelola state detail produk
    cart: cartReducer, // Reducer untuk mengelola state keranjang belanja
    auth: authReducer, // Reducer untuk mengelola state otentikasi pengguna
  },
  // Middleware digunakan untuk memperluas fungsionalitas Redux
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
