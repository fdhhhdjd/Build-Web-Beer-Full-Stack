import { combineReducers } from "redux";
import ReducerAuth from "./Reducer/ReducerAuth";
import ProductReducer from "./Reducer/ReducerProduct";
import ReducerAdmin from "./Reducer/ReducerAdmin";
const rootReducer = combineReducers({
  data: ReducerAuth,
  product: ProductReducer,
  admin: ReducerAdmin,
});
export default rootReducer;
