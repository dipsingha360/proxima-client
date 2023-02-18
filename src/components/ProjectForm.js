import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setDev] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useProjectsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // data
    const projectData = { title, tech, budget, duration, manager, dev };

    // POST request
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    const data = await res.json();

    // !req.ok --> set error
    if (!res.ok) {
      setError(data.error);
    }

    //req.ok --> reset
    if (res.ok) {
      setTitle("");
      setTech("");
      setBudget("");
      setDuration("");
      setManager("");
      setDev("");
      setError(null);

      // console.log("New project added to the DB", data);

      //dispatch
      dispatch({ type: "CREATE_PROJECT", payload: data });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form flex flex-col gap-5">
      <h2 className="text-4xl font-medium text-sky-400 mb-10 ">
        Add a new project
      </h2>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="title"
        >
          Project title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
          type="text"
          placeholder="e.g. web security website"
          id="title"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="tech"
        >
          Technologies
        </label>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
          type="text"
          placeholder="e.g. nodejs, react, redux"
          id="tech"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="budget"
        >
          Budget (in USD)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
          type="number"
          placeholder="e.g. 500"
          id="budget"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="duration"
        >
          Duration (in weeks)
        </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
          type="number"
          placeholder="e.g. web security website"
          id="duration"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="manager"
        >
          Manager
        </label>
        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
          type="text"
          placeholder="e.g. Dip Singha"
          id="manager"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="developer"
        >
          Developer (Quantity)
        </label>
        <input
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300"
          type="number"
          placeholder="e.g. 10"
          id="developer"
        />
      </div>

      <button
        className="bg-sky-400  py-3 rounded-lg text-slate-900 hover:bg-sky-50 duration-300"
        type="submit"
      >
        Add Project
      </button>
      {error && (
        <p className="bg-yellow-500/20 rounded-lg p-5 text-yellow-500 border border-yellow-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectForm;
