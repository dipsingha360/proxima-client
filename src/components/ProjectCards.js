import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import moment from "moment";
import { useState } from "react";
import ProjectForm from "./ProjectForm";

const ProjectCards = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlyOpen, setIsOverlyOpen] = useState(false);

  const { dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/projects/${project._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = await res.json();
    if (res.ok) {
      // dispatch
      dispatch({ type: "DELETE_PROJECT", payload: data });
    }
  };

  const handleUpdate = () => {
    setIsModalOpen(true);
    setIsOverlyOpen(true);
  };

  const handleOverly = () => {
    setIsModalOpen(false);
    setIsOverlyOpen(false);
  };

  return (
    <div className="project flex flex-col gap-5 bg-slate-800 p-5 rounded-xl shadow-md border border-slate-500 w-[30rem]">
      <div className="top">
        <span className="text-sky-400">ID: {project._id}</span>
        <h3 className="text-3xl font-medium truncate">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-slate-500">
          {project.tech}
        </span>
      </div>
      <div className="mid text-slate-300 flex gap-5">
        <div className="mid-left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Add: {moment(project.createdAt).format("MMM-DD, hh:mm A")}
          </span>
          <span>
            Updated: {moment(project.updatedAt).format("MMM-DD, hh:mm A")}
          </span>
        </div>
        <div className="mid-right flex flex-col">
          <span>Manager: {currencyFormatter(project.manager)}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button
          onClick={handleUpdate}
          className="btn-update bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-xl hover:bg-sky-50 duration-300 "
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="btn-delete text-rose-500 hover:underline"
        >
          Delete
        </button>
      </div>

      {/* overly  */}
      <div
        onClick={handleOverly}
        className={`overly fixed z-[1] top-0 left-0 right-0 bottom-0  h-screen w-screen bg-slate-900/50 backdrop-blur-sm ${
          isModalOpen ? "" : "hidden"
        }`}
      ></div>

      {/* modal  */}
      <div
        className={`update-modal w-[35rem] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-800 p-10 rounded-xl shadow-xl border border-slate-700 z-[2] ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <h2 className="text-4xl font-medium text-sky-400 mb-10 ">
          Update project
        </h2>
        <ProjectForm
          project={project}
          setIsModalOpen={setIsModalOpen}
          setIsOverlyOpen={setIsOverlyOpen}
        />
      </div>
    </div>
  );
};

export default ProjectCards;
