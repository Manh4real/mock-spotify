import { configureStore } from "@reduxjs/toolkit";

// reducers
import tranckControllerReducer from "./trackControllerSlice";

export default configureStore({
  reducer: {
    trackController: tranckControllerReducer,
  },
});
