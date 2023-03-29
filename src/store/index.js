import { configureStore } from "@reduxjs/toolkit";
import  charactersSlice  from "./slices/CharactersSlice";

const store = configureStore({
    reducer: {
        characters: charactersSlice,
    }
});

export default store;