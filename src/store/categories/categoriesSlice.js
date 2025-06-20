import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import actAddCategories from "./act/actAddCategories";
import actAddSubCategories from "./act/actAddSubCategories";

const initialState = {
  loading: "idle",
  records: null,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Categories
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });

    // Add Categories
    builder.addCase(actAddCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddCategories.fulfilled, (state) => {
      (state.loading = "succeeded"), (state.error = null);
    });
    builder.addCase(actAddCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });

    // Add SubCategories
    builder.addCase(actAddSubCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddSubCategories.fulfilled, (state) => {
      (state.loading = "succeeded"), (state.error = null);
    });
    builder.addCase(actAddSubCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
