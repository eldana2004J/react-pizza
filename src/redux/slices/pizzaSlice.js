import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: 0,
};

const pizzaSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    pizza(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { pizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
