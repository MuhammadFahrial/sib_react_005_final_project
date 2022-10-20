import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/indonesia/newsSliceIndonesia";
import savedReducer from "../features/news/saved/savedSlice";
import searchReducer from "../features/news/search/searchSlice";
import logger from "redux-logger";
import React from "react";

export const store = configureStore({
  reducer: {
    articles: newsReducer,
    saved: savedReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
