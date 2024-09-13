import { combineReducers } from "redux";
import projectsReducer from "./project/reducers";
import { IProjectState } from "./project/types";

export interface RootStateType {
  projects: IProjectState;
}

const rootReducers = combineReducers({
  projects: projectsReducer,
});

export default rootReducers;
