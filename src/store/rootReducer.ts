import { combineReducers } from "redux";

import podcastsReducer from "./podcasts/reducer";
import podcastReducer from "./podcast/reducer";

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  podcast: podcastReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
