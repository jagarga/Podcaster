import PropTypes from "prop-types";
import * as React from "react";
import { useEffect, Suspense, useState } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoadingPodcastSelector,
  getPodcastSelector,
} from "../../store/podcast/selectors";
import { fetchPodcastRequest } from "../../store/podcast/actions";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import "./PodcastDetailPage.scss";
import WaitSpinner from "../../components/waitSpinner/waitSpinner";
import { useWithRouter } from "../../hooks/withRouter";
import {
  getIsLoadingPodcastsSelector,
  getPodcastsSelector,
} from "../../store/podcasts/selectors";
import { fetchPodcastsRequest } from "../../store/podcasts/actions";
import moment from "moment/moment";
import PodcastInfoCard from "../../components/podcastInfoCard/podcastInfoCard";

/**
 * Component with the information of use
 */
const PodcastDetailPage = ({ router }) => {
  const dispatch = useDispatch();
  const isLoadingDetail = useSelector(getIsLoadingPodcastSelector);
  const episodesSelector = useSelector(getPodcastSelector);
  const isLoadingPodcasts = useSelector(getIsLoadingPodcastsSelector);
  const podsSelector = useSelector(getPodcastsSelector);

  const [podcastSelected, setPodcastSelected] = useState(null);
  const [episodeSelected, setEpisodeSelected] = useState(null);

  useEffect(() => {
    if (podsSelector?.length === 0) {
      dispatch(fetchPodcastsRequest());
    } else {
      const podcastFiltered = podsSelector.filter(
        (podcast) => podcast.id.attributes["im:id"] === router?.params?.id,
      )?.[0];
      setPodcastSelected(podcastFiltered);
    }
  }, [podsSelector, router?.params]);

  useEffect(() => {
    if (episodesSelector?.length === 0) {
      dispatch(fetchPodcastRequest(router?.params?.id));
    } else {
      const episodeFiltered = episodesSelector.filter(
        (episode) => episode.trackId === parseInt(router?.params?.episodeId),
      )?.[0];
      setEpisodeSelected(episodeFiltered);
    }
  }, [episodesSelector, router?.params]);

  const isLoading = isLoadingPodcasts || isLoadingDetail;
  return (
    <>
      <Suspense fallback={<WaitSpinner />}>
        {isLoading && <WaitSpinner size="2rem" isHeadSpinner={true} />}
        <Grid container spacing={2}>
          <Grid item md={4}>
            {podcastSelected !== null && (
              <PodcastInfoCard
                key={podcastSelected?.id.attributes["im:id"]}
                podcast={podcastSelected}
              />
            )}
          </Grid>
          <Grid item md={8}>
            <Paper
              elevation={24}
              className="charContainer"
              sx={{ marginBottom: "20px", padding: "5%" }}
            >
              <Typography gutterBottom variant="h4" component="h4">
                {episodeSelected?.trackName}
              </Typography>
              <Typography color="textPrimary" component="p">
                {episodeSelected?.description}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ marginTop: "4%" }}>
                <audio
                  key={episodeSelected?.episodeUrl}
                  controls
                  style={{ width: "100%" }}
                >
                  <source src={episodeSelected?.episodeUrl} type="audio/mpeg" />
                </audio>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

PodcastDetailPage.propTypes = {
  router: PropTypes.shape({
    params: PropTypes.shape({
      episodeId: PropTypes.any,
      id: PropTypes.any,
    }),
  }),
};

export default useWithRouter(memo(PodcastDetailPage));
