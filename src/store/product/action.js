import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getProducts = createAsyncThunk(
  "features/getProducts",
  async () => {
    try {
      const response = await httpService.get("/Products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getProduct = createAsyncThunk(
  "features/getProduct",
  async (productId) => {
    try {
      const response = await httpService.get(`/Products/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
