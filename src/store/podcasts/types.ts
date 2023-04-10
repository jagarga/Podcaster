import { IPodcasts } from "../../constants/interfaces";
import {
  FETCH_PODCASTS_REQUEST,
  FETCH_PODCASTS_SUCCESS,
  FETCH_PODCASTS_FAILURE,
} from "./actionTypes";

export interface PodcastsState {
  pending: boolean;
  podcasts: IPodcasts[];
  error: string | null;
}

export interface FetchPodcastsRequestPayload {
  page: number;
}

export interface FetchPodcastsSuccessPayload {
  podcasts: IPodcasts[];
}

export interface FetchPodcastsFailurePayload {
  error: string;
}

export interface FetchPodcastsRequest {
  type: typeof FETCH_PODCASTS_REQUEST;
  payload: FetchPodcastsRequestPayload;
}

export type FetchPodcastsSuccess = {
  type: typeof FETCH_PODCASTS_SUCCESS;
  payload: FetchPodcastsSuccessPayload;
};

export type FetchPodcastsFailure = {
  type: typeof FETCH_PODCASTS_FAILURE;
  payload: FetchPodcastsFailurePayload;
};

export type PodcastsActions =
  | FetchPodcastsRequest
  | FetchPodcastsSuccess
  | FetchPodcastsFailure;
