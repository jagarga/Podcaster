import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPodcastsFailure, fetchPodcastsSuccess } from "./actions";
import { FETCH_PODCASTS_REQUEST } from "./actionTypes";
import { getPodcasts } from "../../api/api";

/*
  Worker Saga: Fired on FETCH_PODCASTS_REQUEST action
*/
function* fetchPodcastsSaga() {
  try {
    const response = yield call(getPodcasts);
    yield put(
      fetchPodcastsSuccess({
        podcasts: response.data.feed.entry,
      }),
    );
  } catch (e) {
    yield put(
      fetchPodcastsFailure({
        error: e.message,
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_PODCASTS_REQUEST` action.
  Allows concurrent increments.
*/
function* podcastsSaga() {
  yield all([takeLatest(FETCH_PODCASTS_REQUEST, fetchPodcastsSaga)]);
}

export default podcastsSaga;
