import { createSlice } from "@reduxjs/toolkit";
import actGetProductsCart from "./act/actGetProductsCart";

const initialState = {
  itemsId: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.itemsId[id]) {
        state.itemsId[id]++;
      } else {
        state.itemsId[id] = 1;
      }
    },
    deleteFromCart: (state, action) => {
      delete state.itemsId[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(
        (el) => el._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsCart.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsCart.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
      state.error = null;
    });
    builder.addCase(actGetProductsCart.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
