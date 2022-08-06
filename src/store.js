import { configureStore, createSlice } from "@reduxjs/toolkit";

const place = createSlice({
  name: "place",
  initialState: "",
  reducers: {
    changePlace(state, a) {
      return a.payload;
    },
  },
});

const data = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    changeData(state, a) {
      return a.payload;
    },
  },
});

export default configureStore({
  reducer: {
    place: place.reducer,
    data: data.reducer,
  },
});

export let { changePlace } = place.actions;
export let { changeData } = data.actions;
