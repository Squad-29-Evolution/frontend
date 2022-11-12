import { Outlet, Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = () => {
  const user = "USER";
  const isAdmin = user == "ADMIN";
  const isLoading = false;

  if (isLoading) return <Loading />;

  return isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
