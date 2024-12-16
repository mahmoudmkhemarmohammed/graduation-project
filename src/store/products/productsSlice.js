import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    records: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
