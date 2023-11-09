import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add Items
    addItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "quantity",
          JSON.stringify((state.cartItems[itemIndex].cartQuantity += 1))
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "quantity",
          JSON.stringify(state.cartItems.push(tempProduct))
        );
      }
    },

    // Remove Items
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload.title
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
