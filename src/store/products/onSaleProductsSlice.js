import { createSlice } from "@reduxjs/toolkit";
import actGetOnSaleProducts from "./act/actGetOnSaleProducts";

const onSaleProductsSlice = createSlice({
  name: "onSaleProductsSlice",
  initialState: {
    records: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetOnSaleProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOnSaleProducts.fulfilled, (state, action) => {
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetOnSaleProducts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload
    });
  },
});

export default onSaleProductsSlice.reducer;
