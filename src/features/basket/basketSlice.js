import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
});

// console.log(basketSlice);

export default basketSlice.reducer;
