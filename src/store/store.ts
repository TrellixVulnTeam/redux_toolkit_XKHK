import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "src/features/photos/photosSlice";

export const store = configureStore({
  reducer: {
    photo: photosReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;