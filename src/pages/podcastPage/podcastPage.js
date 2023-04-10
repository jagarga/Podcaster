import PropTypes from "prop-types";
import * as React from "react";
import { useEffect, Suspense, useCallback, useState } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoadingPodcastSelector,
  getPodcastSelector,
} from "../../store/podcast/selectors";
import { fetchPodcastRequest } from "../../store/podcast/actions";
import { Grid, Paper, Typography } from "@mui/material";
import "./podcastPage.scss";
import WaitSpinner from "../../components/waitSpinner/waitSpinner";
import { useWithRouter } from "../../hooks/withRouter";
import {
  getIsLoadingPodcastsSelector,
  getPodcastsSelector,
} from "../../store/podcasts/selectors";
import { fetchPodcastsRequest } from "../../store/podcasts/actions";
import TableData from "../../components/tableData/tableData";
import moment from "moment/moment";
import PodcastInfoCard from "../../components/podcastInfoCard/podcastInfoCard";

/**
 * Component with the information of use
 */
const PodcastPage = ({ router }) => {
  const navigate = router?.navigate;

  const dispatch = useDispatch();
  const isLoadingDetail = useSelector(getIsLoadingPodcastSelector);
  const episodesSelector = useSelector(getPodcastSelector);
  const isLoadingPodcasts = useSelector(getIsLoadingPodcastsSelector);
  const podsSelector = useSelector(getPodcastsSelector);

  const [podcastSelected, setPodcastSelected] = useState(null);
  const [podcastId, setPodcastId] = useState(router?.params?.id);
  const [episodeTableData, setEpisodeTableData] = useState(null);

  const styles = {
    textTitle: {
      fontWeight: "bold",
      padding: "10px",
    },
  };

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
    setPodcastId(router?.params?.id);
    if (router?.params?.id !== undefined && podsSelector?.length === 0)
      dispatch(fetchPodcastRequest(router?.params?.id));
  }, [router?.params]);

  const onRedirect = useCallback(
    (episodeId) => {
      navigate(`/podcast/${podcastId}/episode/${episodeId}`);
    },
    [podcastId],
  );

  const timeDuration = useCallback((time) => {
    const seconds = moment.duration(time).seconds();
    const minutes = moment.duration(time).minutes();
    const hours = Math.trunc(moment.duration(time).asHours());
    return hours + ":" + minutes + ":" + seconds;
  }, []);

  useEffect(() => {
    const episodeData = episodesSelector.map((episode) => {
      const trackName = episode.trackName;
      const releaseDate = moment(episode.releaseDate).format("DD/MM/YYYY");
      const trackTimeMillis = episode.trackTimeMillis;
      const duration = timeDuration(trackTimeMillis);
      const id = episode.trackId;

      return { id, trackName, releaseDate, duration };
    });
    setEpisodeTableData(episodeData);
  }, [episodesSelector]);

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
            <Paper elevation={24} className="charContainer">
              <Typography
                gutterBottom
                variant="h6"
                component="h4"
                style={styles.textTitle}
              >
                Episodes: {episodeTableData?.length}
              </Typography>
            </Paper>
            <Paper
              elevation={24}
              className="charContainer"
              sx={{ marginBottom: "20px" }}
            >
              <TableData
                data={episodeTableData}
                headers={["Title", "Date", "Duration"]}
                cellLinkName={"trackName"}
                onChange={onRedirect}
              />
            </Paper>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

PodcastPage.propTypes = {
  router: PropTypes.shape({
    navigate: PropTypes.func,
    params: PropTypes.shape({
      id: PropTypes.any,
    }),
  }),
};

export default useWithRouter(memo(PodcastPage));
