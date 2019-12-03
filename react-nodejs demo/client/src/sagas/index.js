import homeSaga from "../components/home/homeSaga";
import aboutSaga from "../components/about/aboutSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([aboutSaga, homeSaga]);
}
export default rootSaga;
