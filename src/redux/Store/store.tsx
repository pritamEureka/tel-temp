import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "../Reducer/MainSlice";

const store = configureStore({
  reducer: {
    Initial: MainSlice, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;