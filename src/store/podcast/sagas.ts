import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPodcastFailure, fetchPodcastSuccess } from "./actions";
import { FETCH_PODCAST_REQUEST } from "./actionTypes";
import { getPodcast } from "../../api/api";

/*
  Worker Saga: Fired on FETCH_PODCAST_REQUEST action
*/
function* fetchPodcastSaga(payload) {
  try {
    const response = yield call(getPodcast, payload?.payload);
    const data = JSON.parse(response?.data?.contents)?.results;

    data.shift(); // The first element is the podcast info (We delete it)

    yield put(
      fetchPodcastSuccess({
        podcast: data,
      }),
    );
  } catch (e) {
    yield put(
      fetchPodcastFailure({
        error: e.message,
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_PODCAST_REQUEST` action.
  Allows concurrent increments.
*/
function* podcastSaga() {
  yield all([takeLatest(FETCH_PODCAST_REQUEST, fetchPodcastSaga)]);
}

export default podcastSaga;
