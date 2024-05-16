import { createSlice } from "@reduxjs/toolkit";
import * as productAction from "./action";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      program: "",
      title: "",
      description: "",
      batch: "",
      mentor: [
        {
          name: "",
        },
        {
          name: "",
        },
      ],
      price: "",
      pricereal: "",
    },
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAction.getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(productAction.getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(productAction.getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAction.getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(productAction.getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
