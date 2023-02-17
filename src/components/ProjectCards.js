import { currencyFormatter } from "../utils/currencyFormatter";

const ProjectCards = ({ project }) => {
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
            Add on: {new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span>
            Last updated: {new Date(project.updatedAt).toLocaleDateString()}
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
        <button className="btn-update bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-xl hover:bg-sky-50 duration-300 ">
          Update
        </button>
        <button className="btn-delete text-rose-500 hover:underline">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
