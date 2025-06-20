import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByPrefix from "./act/actGetProductsByPrefix";

const initialState = {
  loading: "idle",
  records: [],
  error: null,
};

const productsByPrefix = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetProductsByPrefix.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default productsByPrefix.reducer;
