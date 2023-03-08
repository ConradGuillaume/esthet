import { createSlice } from "@reduxjs/toolkit";

export const PrestationSlice = createSlice({
  name: "prestations",
  initialState: {
    epile: [],
    massage: [],
  },
  reducers: {
    getEpilation: (state, { payload }) => {
      state.epile = payload;
    },
    getMassage: (state, { payload }) => {
      state.massage = payload;
    },
  },
});
export const { getEpilation, getMassage } = PrestationSlice.actions;
export default PrestationSlice.reducer;
