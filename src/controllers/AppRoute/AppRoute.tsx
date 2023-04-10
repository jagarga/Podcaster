import * as React from "react";
import { Route } from "react-router-dom";
import * as PropTypes from "prop-types";

export const AppRoute = (props) => {
  const { path } = props;
  return (
    <Route
      key={path}
      path={path}
      element={React.createElement(props.component)}
    />
  );
};

AppRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element,
};

export default AppRoute;
