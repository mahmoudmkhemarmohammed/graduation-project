import { createSlice } from "@reduxjs/toolkit";
import actGetBrands from "./act/actGetBrands";

const initialState = {
  loading: "idle",
  error: null,
  records: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetBrands.pending, (state) => {
      (state.loading = "pending"), (state.error = null);
    });
    builder.addCase(actGetBrands.fulfilled, (state, action) => {
      state.loading = "succeeded",
      state.records = action.payload
      state.error = null;
    });
    builder.addCase(actGetBrands.rejected, (state, action) => {
      (state.loading = "failed"), (state.error = action.payload);
    });
  },
});

export default brandsSlice.reducer;
