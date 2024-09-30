import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { projectDetailsRequest } from "../redux/project/actions";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();

  const { loading, projectDetails, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    if (id) {
      const projectId = Number(id); // Convert id to number
      dispatch(projectDetailsRequest(projectId));
    }
  }, [id, dispatch]);

  return (
    <div>
      <h2 className="font-semibold text-3xl text-center my-3">
        Project Details
      </h2>
      {loading && <p className="mx-10">Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="mx-10 flex flex-col gap-2">
        {projectDetails && (
          <div>
            <h1 className="text-xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 cursor-pointer hover:text-blue-500">
              {projectDetails.title}
            </h1>
            <span className="text-xl pl-4 my-2 border-l-4 font-sans font-bold border-teal-400 cursor-pointer hover:text-blue-500">
              {projectDetails.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
