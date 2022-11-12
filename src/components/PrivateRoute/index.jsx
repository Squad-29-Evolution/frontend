import { Outlet, Navigate } from "react-router-dom";
import Loading from "../Loading";

const PrivateRoute = () => {
  const isUser = true;
  const isLoading = true;

  if (isLoading) return <Loading />;

  return isUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
