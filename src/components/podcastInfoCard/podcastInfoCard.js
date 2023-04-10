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
  Divider,
} from "@mui/material";
import { useWithRouter } from "../../hooks/withRouter";

/**
 * Component with the card information of the podcast
 */
const podcastInfoCard = ({ podcast, router }) => {
  const navigate = router?.navigate;

  const styles = {
    cardDiv: {
      boxShadow:
        "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
    },
    cardMedia: {
      marginBottom: "5%",
    },
    cardActionArea: {
      minHeight: 200,
      paddingTop: "5%",
      paddingInline: "10%",
    },
    divider: {
      margin: "10px",
    },
    textCenter: {
      textAlign: "center",
    },
  };

  return (
    <>
      <CardActionArea
        onClick={() => navigate(`/podcast/${podcast?.id?.attributes["im:id"]}`)}
        style={styles.cardActionArea}
      >
        <Card style={styles.cardDiv}>
          <CardContent>
            <CardMedia
              component="img"
              height="220"
              image={podcast["im:image"]?.[2].label}
              title={podcast["im:name"]?.label}
              style={styles.cardMedia}
            />
            <Divider light style={styles.divider} />
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
              By {podcast["im:artist"].label}
            </Typography>
            <Divider light style={styles.divider} />
            <Typography gutterBottom variant="h6" component="h4">
              Description:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {podcast.summary.label}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

podcastInfoCard.propTypes = {
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

export default useWithRouter(memo(podcastInfoCard));
