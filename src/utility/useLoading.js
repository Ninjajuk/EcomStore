// useLoading.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../Redux/loadingSlice"; // Adjust the path

export const useLoading = (isLoading = false, delay = 0) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setLoading(isLoading));
    }, delay);

    return () => {
      clearTimeout(timeout);
      dispatch(setLoading(false));
    };
  }, [dispatch, isLoading, delay]);
};
