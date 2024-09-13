import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  PROJECT_DETAILS_REQUEST,
  projectDetailsFailure,
  projectDetailsSuccess,
  PROJECTS_REQUEST,
  projectsFailure,
  projectsSuccess,
} from "./actions";

// API calls
const fetchProjectsApi = () => axios.get("https://fakestoreapi.com/products");
const fetchProjectDetailsApi = (id: number) =>
  axios.get(`https://fakestoreapi.com/products/${id}`);

// Worker saga: fetch projects
function* fetchProjects() {
  try {
    const response = yield call(fetchProjectsApi);
    yield put(projectsSuccess(response.data));
  } catch (error: any) {
    yield put(projectsFailure(error.message));
  }
}

// Worker saga: fetch project details
export function* fetchProjectDetails(action: any) {
  try {
    const response = yield call(fetchProjectDetailsApi, action.payload);
    yield put(projectDetailsSuccess(response.data));
  } catch (error: any) {
    yield put(projectDetailsFailure(error.message));
  }
}

// Watcher saga: watches for actions and starts corresponding worker saga
export function* watchProjectSagas() {
  yield takeEvery(PROJECTS_REQUEST, fetchProjects);
  yield takeEvery(PROJECT_DETAILS_REQUEST, fetchProjectDetails);
}
