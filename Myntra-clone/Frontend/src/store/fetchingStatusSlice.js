import { createSlice } from "@reduxjs/toolkit";

const fetchingStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
    fetchError: null,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      state.fetchError = null;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
    markFetchFailed: (state, action) => {
      state.currentlyFetching = false;
      state.fetchError = action.payload;
    },
  },
});

export const fetchStatusActions = fetchingStatusSlice.actions;

export default fetchingStatusSlice;
