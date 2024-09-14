import { ProjectType } from "./types";

export const PROJECTS_REQUEST = "PROJECTS_REQUEST";
export const PROJECTS_SUCCESS = "PROJECTS_SUCCESS";
export const PROJECTS_FAILURE = "PROJECTS_FAILURE";

export const PROJECT_DETAILS_REQUEST = "PROJECT_DETAILS_REQUEST";
export const PROJECT_DETAILS_SUCCESS = "PROJECT_DETAILS_SUCCESS";
export const PROJECT_DETAILS_FAILURE = "PROJECT_DETAILS_FAILURE";

export const projectsRequest = () => ({
  type: PROJECTS_REQUEST,
});

export const projectsSuccess = (projects: ProjectType) => ({
  type: PROJECTS_SUCCESS,
  payload: projects,
});

export const projectsFailure = (error: string) => ({
  type: PROJECTS_FAILURE,
  payload: error,
});

export const projectDetailsRequest = (id: number) => ({
  type: PROJECT_DETAILS_REQUEST,
  payload: id,
});

export const projectDetailsSuccess = (projectDetails: ProjectType) => ({
  type: PROJECT_DETAILS_SUCCESS,
  payload: projectDetails,
});

export const projectDetailsFailure = (error: string) => ({
  type: PROJECT_DETAILS_FAILURE,
  payload: error,
});
