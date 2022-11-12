import { Outlet, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { authUser, getUserInfo } = useAuth();
  const user = getUserInfo();
  const { isLoading } = authUser;

  const isAdmin = user.role === "ADMIN";

  if (isLoading) return <Loading />;

  return isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
