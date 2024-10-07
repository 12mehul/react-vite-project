import { combineReducers } from "redux";
import projectsReducer from "./project/reducers";

const rootReducers = combineReducers({
  projects: projectsReducer,
});

// export type of rootReducers
export type RootStateType = ReturnType<typeof rootReducers>;
export default rootReducers;
