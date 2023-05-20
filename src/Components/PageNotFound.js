import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Redirect to "Page Not Found" page
      navigate("/");
    }, 3000); // Timeout duration in milliseconds (e.g., 5 seconds)

    return () => {
      // Clear the timeout if the component unmounts or the effect is re-run
      clearTimeout(timeout);
    };
  }, [navigate]); // Dependency on navigate to prevent potential memory leak

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting to main page in 3 seconds...</p>
    </div>
  );
};

export default PageNotFound;
