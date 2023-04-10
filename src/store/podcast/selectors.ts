import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.podcast.pending;

const getPodcast = (state: AppState) => state.podcast.podcast;

const getError = (state: AppState) => state.podcast.error;

export const getPodcastSelector = createSelector(
  getPodcast,
  (podcast) => podcast,
);

export const getIsLoadingPodcastSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
