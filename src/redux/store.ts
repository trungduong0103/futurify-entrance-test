import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import foodCategorySlice from "./foodCategorySlice";
const store = configureStore({
  reducer: {
    foodCategory: foodCategorySlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
