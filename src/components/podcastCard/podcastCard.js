import PropTypes from "prop-types";
import * as React from "react";
import { memo } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useWithRouter } from "../../hooks/withRouter";

/**
 * Component with the card information of the podcast
 */
const PodcastCard = ({ podcast }, router) => {
  const navigate = router?.navigate;

  const styles = {
    cardMedia: {
      borderRadius: "50%",
      height: "50%",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "-27%",
      maxHeight: "160px",
    },
    cardContent: {
      paddingTop: "30%",
    },
    textCenter: {
      textAlign: "center",
    },
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <CardActionArea
          onClick={() =>
            navigate(`/podcast/${podcast?.id?.attributes["im:id"]}`)
          }
        >
          <CardMedia
            component="img"
            height="220"
            image={podcast["im:image"]?.[2].label}
            title={podcast["im:name"].label}
            style={styles.cardMedia}
          />
          <Card sx={{ maxWidth: 345, minHeight: 200 }}>
            <CardContent style={styles.cardContent}>
              <Typography
                gutterBottom
                variant="h6"
                component="h4"
                style={styles.textCenter}
              >
                {podcast["im:name"].label}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={styles.textCenter}
              >
                Author: {podcast["im:artist"].label}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

PodcastCard.propTypes = {
  podcast: PropTypes.shape({
    id: PropTypes.shape({
      attributes: PropTypes.any,
    }),
    ["im:name"]: PropTypes.shape({
      label: PropTypes.shape({
        attributes: PropTypes.any,
      }),
    }),
    ["im:image"]: PropTypes.shape({
      label: PropTypes.shape({
        attributes: PropTypes.any,
      }),
    }),
    ["im:artist"]: PropTypes.shape({
      label: PropTypes.shape({
        attributes: PropTypes.any,
      }),
    }),
  }),
  router: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default useWithRouter(memo(PodcastCard));
