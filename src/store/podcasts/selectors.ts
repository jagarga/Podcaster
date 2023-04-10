import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.podcasts.pending;

const getPodcasts = (state: AppState) => state.podcasts.podcasts;

const getError = (state: AppState) => state.podcasts.error;

export const getPodcastsSelector = createSelector(
  getPodcasts,
  (podcasts) => podcasts,
);

export const getIsLoadingPodcastsSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
