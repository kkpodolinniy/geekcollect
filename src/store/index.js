import { configureStore } from "@reduxjs/toolkit";
import collectItemReducer from "./collectItemSlice";

export default configureStore({
  reducer: {
    сollectionItems: collectItemReducer,
  },
});
