import { configureStore } from "@reduxjs/toolkit";
import { setUpListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./slices/tutorials";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setUpListeners(store.dispatch);
