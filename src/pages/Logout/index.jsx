import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const { removeUserInfo } = useAuth();

  useEffect(() => {
    localStorage.removeItem("firstLogin");
    removeUserInfo();
  }, []);
  return <Navigate to="/login" replace={true} />;
};

export default Logout;
