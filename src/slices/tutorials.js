import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TutorialDataService from "../services/tutorial.service";

const initialState = [];

export const retrieveTutorials = createAsyncThunk(
  "pokemons/retrieve",
  async () => {
    const res = await TutorialDataService.get();
    return res.data;
  }
);

const tutorialSlice = createSlice({
  name: "pokemon",
  initialState,
  extraReducers: {
    [retrieveTutorials.fulfilled]: (state, action) => {
      console.log("action.payload", action.payload);
      return [...action.payload];
    },
  },
});

const { reducer } = tutorialSlice;
export default reducer;
