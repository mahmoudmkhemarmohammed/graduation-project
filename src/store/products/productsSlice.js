import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import actAddProducts from "./act/actAddProducts";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    records: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get Products
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });

    // Add Products
    builder.addCase(actAddProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddProducts.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actAddProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
