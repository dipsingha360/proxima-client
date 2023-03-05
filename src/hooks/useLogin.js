import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    // !res.ok ------> throw error
    if (!res.ok) {
      setLoading(false);
      setError(data.error);
    }

    // res.ok ------->
    if (res.ok) {
      // update auth context
      dispatch({ type: "LOGIN", payload: data });

      // save user to local storage
      localStorage.setItem("user", JSON.stringify(data));

      // reset
      setLoading(false);
    }
  };

  return {
    login,
    error,
    loading,
  };
};
