import { all, fork } from "redux-saga/effects";

import podcastsSaga from "./podcasts/sagas";
import podcastSaga from "./podcast/sagas";

export function* rootSaga() {
  yield all([fork(podcastsSaga)]);
  yield all([fork(podcastSaga)]);
}
