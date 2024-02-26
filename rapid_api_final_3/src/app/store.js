import { configureStore, createReducer } from "@reduxjs/toolkit";
import hotelsReducer from "../features/rapidapi/rapidApiSlice";
import savedReducer from "../features/rapidapi/rapidApiSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    saved: savedReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
