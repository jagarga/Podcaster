import * as React from "react";
import { useEffect, Suspense, useState, useCallback, useMemo } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoadingPodcastsSelector,
  getPodcastsSelector,
  getErrorSelector,
} from "../../store/podcasts/selectors";
import { fetchPodcastsRequest } from "../../store/podcasts/actions";
import { Chip, Grid, Stack, TextField } from "@mui/material";
import "./podcastListPage.scss";
import WaitSpinner from "../../components/waitSpinner/waitSpinner";
const PodcastCard = React.lazy(() =>
  import("../../components/podcastCard/podcastCard"),
);

/**
 * Component with the information of use
 */
const PodcastListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingPodcastsSelector);
  const podsSelector = useSelector(getPodcastsSelector);

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    dispatch(fetchPodcastsRequest());
  }, []);

  useEffect(() => {
    setPodcasts(podsSelector);
  }, [podsSelector]);

  /**
   * Function for render the podcasts card component
   * @param {Object} array category
   */

  const renderPodcastsCard = useCallback(
    (podcasts) =>
      podcasts?.map((podcast) => {
        return (
          <PodcastCard
            key={podcast?.id.attributes["im:id"]}
            podcast={podcast}
          />
        );
      }),
    [podcasts],
  );

  /**
   * On change to filter the podcasts by name and artist
   */
  const handleFilterPodcast = useCallback(
    (e) => {
      const podcastsFiltered = podsSelector.filter(
        (podcast) =>
          podcast["im:name"].label.toLowerCase().includes(e.target.value) ||
          podcast["im:artist"].label.toLowerCase().includes(e.target.value),
      );
      setPodcasts(podcastsFiltered);
    },
    [podsSelector],
  );

  return (
    <>
      <Suspense fallback={<WaitSpinner />}>
        {isLoading && <WaitSpinner size="2rem" isHeadSpinner={true} />}
        <div className="container">
          <Stack
            direction="row"
            spacing={1}
            sx={{ marginBottom: "4%", float: "right" }}
          >
            <Chip
              label="100"
              color="primary"
              size="small"
              sx={{ marginTop: "0.5rem" }}
            />
            <TextField
              label="Filter podcasts..."
              variant="outlined"
              size="small"
              onChange={handleFilterPodcast}
            />
          </Stack>
          <Grid container spacing={2}>
            {renderPodcastsCard(podcasts)}
          </Grid>
        </div>
      </Suspense>
    </>
  );
};

export default memo(PodcastListPage);
