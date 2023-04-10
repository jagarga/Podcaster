import {
  FETCH_PODCASTS_REQUEST,
  FETCH_PODCASTS_SUCCESS,
  FETCH_PODCASTS_FAILURE,
} from "./actionTypes";

import { PodcastsActions, PodcastsState } from "./types";

const initialState: PodcastsState = {
  pending: false,
  podcasts: [],
  error: null,
};

export default (state = initialState, action: PodcastsActions) => {
  switch (action.type) {
    case FETCH_PODCASTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PODCASTS_SUCCESS:
      return {
        ...state,
        pending: false,
        podcasts: action.payload.podcasts,
        error: null,
      };
    case FETCH_PODCASTS_FAILURE:
      return {
        ...state,
        pending: false,
        podcasts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
