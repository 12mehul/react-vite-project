import {
  PROJECT_DETAILS_FAILURE,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECTS_FAILURE,
  PROJECTS_REQUEST,
  PROJECTS_SUCCESS,
  ProjectsActions,
} from "./actions";
import { IProjectState } from "./types";

const initialState: IProjectState = {
  loading: false,
  projects: [],
  projectDetails: null,
  error: null,
};

const projectsReducer = (state = initialState, action: ProjectsActions) => {
  switch (action.type) {
    case PROJECTS_REQUEST:
    case PROJECT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        projectDetails: action.payload,
      };
    case PROJECTS_FAILURE:
    case PROJECT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
