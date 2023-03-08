import { configureStore } from "@reduxjs/toolkit";
import { PrestationSlice } from "./features/PrestationSlice";

export const store = configureStore({
  reducer: {
    Prestation: PrestationSlice.reducer,
  },
});
