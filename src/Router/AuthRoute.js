// components/AuthenticatedRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ element }) => {
  const { isAuthenticated } = useSelector((state) => state);

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated

    return <Navigate to="login" />;
  }

  return element;
};

export default AuthenticatedRoute;
