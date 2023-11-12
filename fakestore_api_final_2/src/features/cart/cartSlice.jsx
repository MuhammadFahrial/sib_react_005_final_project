import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  cartItems: [],
  loading: false,
  error: null,
  // cartQuantity: 0,
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
        state.cartItems[itemIndex].cartQuantity++;
        // localStorage.setItem("cart", JSON.stringify(state.cartItems));
        // localStorage.setItem(
        //   "quantity",
        //   JSON.stringify((state.cartItems[itemIndex].cartQuantity += 1))
        // );
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);

        // const tempProduct = { ...action.payload, cartQuantity: 1 };
        // localStorage.setItem("cart", JSON.stringify(state.cartItems));
        // localStorage.setItem(
        //   "quantity",
        //   JSON.stringify(state.cartItems.push(tempProduct))
        // );
      }
    },

    // Remove Items
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems;
    },

    increment: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[itemIndex].cartQuantity++;
    },

    decrement: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems;
      } else {
        state.cartItems[itemIndex].cartQuantity--;
      }
    },

  },
});

export const { addItems, removeItems, increment, decrement} =
  cartSlice.actions;
export default cartSlice.reducer;
