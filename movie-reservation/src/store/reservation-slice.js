import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const reservationtSlice = createSlice({
  name: "reservation",
  initialState: {
    selectmovie: "",
    selectcinema: "",
    selectdate: new Date(),
    selecttime: "",
    selectcinematype: "",
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {
    selectmovie(state, action) {
      const selectmovie = action.payload;
      state.selectmovie = selectmovie;
    },
    selectcinema(state, action) {
      const selectcinema = action.payload;
      state.selectcinema = selectcinema;
    },
    selectdate(state, action) {
      const selectdate = action.payload;
      state.selectdate = selectdate;
    },
    selecttime(state, action) {
      const selecttime = action.payload.start_time;
      const selectcinematype = action.payload.cinema_type;
      state.selecttime = selecttime;
      state.selectcinematype = selectcinematype;
    },
  },
});

export const reservationAction = reservationtSlice.actions;

export default reservationtSlice;
