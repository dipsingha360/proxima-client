import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);
    const res = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

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
    signup,
    error,
    loading,
  };
};
