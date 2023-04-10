import {
  FETCH_PODCAST_REQUEST,
  FETCH_PODCAST_SUCCESS,
  FETCH_PODCAST_FAILURE,
} from "./actionTypes";

import { PodcastActions, PodcastState } from "./types";

const initialState: PodcastState = {
  pending: false,
  podcast: [],
  error: null,
};

export default (state = initialState, action: PodcastActions) => {
  switch (action.type) {
    case FETCH_PODCAST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PODCAST_SUCCESS:
      return {
        ...state,
        pending: false,
        podcast: action.payload.podcast,
        error: null,
      };
    case FETCH_PODCAST_FAILURE:
      return {
        ...state,
        pending: false,
        podcast: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
