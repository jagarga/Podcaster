import { IPodcast } from "../../constants/interfaces";
import {
  FETCH_PODCAST_REQUEST,
  FETCH_PODCAST_SUCCESS,
  FETCH_PODCAST_FAILURE,
} from "./actionTypes";

export interface PodcastState {
  pending: boolean;
  podcast: IPodcast[];
  error: string | null;
}

export interface FetchPodcastRequestPayload {
  id: number;
}

export interface FetchPodcastSuccessPayload {
  podcast: IPodcast[];
}

export interface FetchPodcastFailurePayload {
  error: string;
}

export interface FetchPodcastRequest {
  type: typeof FETCH_PODCAST_REQUEST;
  payload: FetchPodcastRequestPayload;
}

export type FetchPodcastSuccess = {
  type: typeof FETCH_PODCAST_SUCCESS;
  payload: FetchPodcastSuccessPayload;
};

export type FetchPodcastFailure = {
  type: typeof FETCH_PODCAST_FAILURE;
  payload: FetchPodcastFailurePayload;
};

export type PodcastActions =
  | FetchPodcastRequest
  | FetchPodcastSuccess
  | FetchPodcastFailure;
