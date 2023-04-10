import * as React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function useWithRouter(Child) {
  return function withRouter(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child {...props} router={{ location, navigate, params }} />;
  };
}
