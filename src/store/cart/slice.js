import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    entities: [],
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.entities.length === 0) {
        state.entities = [action.payload];
      } else {
        const isExist = state.entities.filter(
          (item) => item.id === action.payload.id
        );

        if (isExist.length === 0) {
          state.entities = [...state.entities, action.payload];
        }
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
