import { useEffect, useState } from "react";
import ProjectCards from "../components/ProjectCards";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error("Someting went wrong");
        const data = await res.json();
        setProjects(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getProject();
  }, []);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2 ">
        <h2 className="text-4xl font-medium text-sky-400 mb-10 ">
          All projects
        </h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectCards key={project._id} project={project} />
            ))}
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
