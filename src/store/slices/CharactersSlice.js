import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characterList: [],
  },
  reducers: {
      addFavorite(state, action) {
        console.log("addFavorite", action);
    //   state.push(action.payload);
          state.characterList=[action.payload, ...state.characterList]
    },
    removeFavorite(state, action) {},
    removeAllFavorites(state, action) {},
    },
  
});

export default charactersSlice.reducer;
export const { addFavorite } = charactersSlice.actions;
