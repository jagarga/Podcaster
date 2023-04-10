import PropTypes from "prop-types";
import * as React from "react";
import { memo } from "react";
import { CircularProgress } from "@mui/material";
import "./waitSpinner.scss";

/**
 * Component with the spinner to show in the waiting time
 */
const WaitSpinner = ({ size = "12rem", isHeadSpinner = false }) => {
  return (
    <div className={isHeadSpinner ? "headSpinner" : "spinner"}>
      <CircularProgress id="circularProgress" size={size} />
    </div>
  );
};

WaitSpinner.propTypes = {
  isHeadSpinner: PropTypes.bool,
  size: PropTypes.string,
};

export default memo(WaitSpinner);
