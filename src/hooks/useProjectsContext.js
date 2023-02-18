import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjectsContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("You mush call useProjectsContext inside App");
  }
  return context;
};
