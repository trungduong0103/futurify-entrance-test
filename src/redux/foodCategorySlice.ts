import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FOOD_CATEGORIES } from "../mock-data/MockFoodList";
import type { RootState } from "./store";

const initialState: string = FOOD_CATEGORIES[0];

export const categorySlice = createSlice({
  name: "foodCategory",
  initialState,
  reducers: {
    setCategory: (_state: any, action: PayloadAction<string>) => action.payload,
  },
});

export const { setCategory } = categorySlice.actions;

export const selectCategory = (state: RootState) => state.foodCategory;

export default categorySlice.reducer;
