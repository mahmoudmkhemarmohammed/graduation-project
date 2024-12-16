import { createSlice } from "@reduxjs/toolkit";
import actGetBestSalingProducts from "./act/actGetBestSalingProducts";

const bestSalingProductsSlice = createSlice({
  name: "bestSalingProductsSlice",
  initialState: {
    records: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetBestSalingProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetBestSalingProducts.fulfilled, (state, action) => {
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetBestSalingProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default bestSalingProductsSlice.reducer;
