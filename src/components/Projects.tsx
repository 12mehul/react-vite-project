import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { projectsRequest } from "../redux/project/actions";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { loading, projects, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(projectsRequest());
  }, [dispatch]);

  const handleProjectClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl text-center my-3">Projects</h2>
      {loading && <p className="mx-10">Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className="mx-10 flex flex-col gap-2">
        {projects.slice(page * 5 - 5, page * 5).map((project) => (
          <li key={project.id} onClick={() => handleProjectClick(project.id)}>
            <h1 className="text-xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 cursor-pointer hover:text-blue-500">
              {project.title}
            </h1>
          </li>
        ))}
      </ul>
      <div>
        {[...Array(projects.length / 5)].map((_, i) => {
          return (
            <button
              key={i}
              className="mx-1 px-2 py-1 border rounded-md"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
