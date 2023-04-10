import {
  FETCH_PODCAST_REQUEST,
  FETCH_PODCAST_FAILURE,
  FETCH_PODCAST_SUCCESS,
} from "./actionTypes";
import {
  FetchPodcastRequest,
  FetchPodcastRequestPayload,
  FetchPodcastSuccess,
  FetchPodcastSuccessPayload,
  FetchPodcastFailure,
  FetchPodcastFailurePayload,
} from "./types";

export const fetchPodcastRequest = (
  id: FetchPodcastRequestPayload,
): FetchPodcastRequest => ({
  type: FETCH_PODCAST_REQUEST,
  payload: id,
});

export const fetchPodcastSuccess = (
  payload: FetchPodcastSuccessPayload,
): FetchPodcastSuccess => ({
  type: FETCH_PODCAST_SUCCESS,
  payload,
});

export const fetchPodcastFailure = (
  payload: FetchPodcastFailurePayload,
): FetchPodcastFailure => ({
  type: FETCH_PODCAST_FAILURE,
  payload,
});
