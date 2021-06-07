import { combineReducers } from "redux";
import blueDataReadingReducer from "./BlueDataReadingReducer";
import blueSignalReadingReducer from "./BlueSignalReadingReducer";
import redDataReadingReducer from "./RedDataReadingReducer";
import redSignalReadingReducer from "./RedSignalReadingReducer";
import yellowDataReadingReducer from "./YellowDataReadingReducer";
import yellowSignalReadingReducer from "./YellowSignalReadingReducer";

const RootReducer = combineReducers({
  blueDataReading: blueDataReadingReducer,
  blueSignalReading: blueSignalReadingReducer,
  redDataReading: redDataReadingReducer,
  redSignalReading: redSignalReadingReducer,
  yellowDataReading: yellowDataReadingReducer,
  yellowSignalReading: yellowSignalReadingReducer
})

export default RootReducer;