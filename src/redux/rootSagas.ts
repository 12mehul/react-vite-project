import { all } from "redux-saga/effects";
import { watchProjectSagas } from "./project/sagas";

// Root saga: combine multiple sagas into one
export default function* rootSaga() {
  yield all([watchProjectSagas()]);
}
