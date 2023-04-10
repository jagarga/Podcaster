import {
  FETCH_PODCASTS_REQUEST,
  FETCH_PODCASTS_FAILURE,
  FETCH_PODCASTS_SUCCESS,
} from "./actionTypes";
import {
  FetchPodcastsRequest,
  FetchPodcastsRequestPayload,
  FetchPodcastsSuccess,
  FetchPodcastsSuccessPayload,
  FetchPodcastsFailure,
  FetchPodcastsFailurePayload,
} from "./types";

export const fetchPodcastsRequest = (
  payload: FetchPodcastsRequestPayload,
): FetchPodcastsRequest => ({
  type: FETCH_PODCASTS_REQUEST,
  payload,
});

export const fetchPodcastsSuccess = (
  payload: FetchPodcastsSuccessPayload,
): FetchPodcastsSuccess => ({
  type: FETCH_PODCASTS_SUCCESS,
  payload,
});

export const fetchPodcastsFailure = (
  payload: FetchPodcastsFailurePayload,
): FetchPodcastsFailure => ({
  type: FETCH_PODCASTS_FAILURE,
  payload,
});
