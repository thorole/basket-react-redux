import { createSlice } from "@reduxjs/toolkit";
import basketItems from "../../basketItems";

const initialState = {
  basketItems: basketItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    clearBasket: (state) => {
      state.basketItems = [];
    },
  },
});

// console.log(basketSlice);

export const { clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
