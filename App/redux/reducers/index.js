import { combineReducers } from "redux";
import { sliceApi } from "../services";

import test from "../services/test";

export const rootReducer = combineReducers({
  [sliceApi.reducerPath]: sliceApi.reducer,
  // test,
});
