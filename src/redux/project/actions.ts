export const PROJECTS_REQUEST = "PROJECTS_REQUEST";
export const PROJECTS_SUCCESS = "PROJECTS_SUCCESS";
export const PROJECTS_FAILURE = "PROJECTS_FAILURE";

export const PROJECT_DETAILS_REQUEST = "PROJECT_DETAILS_REQUEST";
export const PROJECT_DETAILS_SUCCESS = "PROJECT_DETAILS_SUCCESS";
export const PROJECT_DETAILS_FAILURE = "PROJECT_DETAILS_FAILURE";

export const projectsRequest = () => ({
  type: PROJECTS_REQUEST,
});

export const projectsSuccess = (projects: any) => ({
  type: PROJECTS_SUCCESS,
  payload: projects,
});

export const projectsFailure = (error: any) => ({
  type: PROJECTS_FAILURE,
  payload: error,
});

export const projectDetailsRequest = (id: number) => ({
  type: PROJECT_DETAILS_REQUEST,
  payload: id,
});

export const projectDetailsSuccess = (projectDetails: any) => ({
  type: PROJECT_DETAILS_SUCCESS,
  payload: projectDetails,
});

export const projectDetailsFailure = (error: any) => ({
  type: PROJECT_DETAILS_FAILURE,
  payload: error,
});
