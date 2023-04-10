import axios from "axios";
import { IPodcasts, IPodcast } from "../constants/interfaces";

import { API_ROUTES } from "./apiRoutes";

export const getPodcasts = () =>
  axios.get<IPodcasts[]>(`${API_ROUTES.getPodcasts}`);

export const getPodcast = (id) => {
  const urlItunes = encodeURIComponent(
    `${API_ROUTES.getPodcast}${id}&entity=podcastEpisode`,
  );
  return axios.get<IPodcast[]>(`${API_ROUTES.getAllOrigins}${urlItunes}`);
};
