import { combineReducers } from "redux";
import ReducerAuth from "./Reducer/ReducerAuth";
import ProductReducer from "./Reducer/ReducerProduct";
const rootReducer = combineReducers({
  data: ReducerAuth,
  product: ProductReducer,
});
export default rootReducer;
