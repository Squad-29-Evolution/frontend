import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const [authUser, getUserInfo, salveUserInfo, setAuthUser, removeUserInfo] =
    useContext(AuthContext);

  return { authUser, getUserInfo, salveUserInfo, setAuthUser, removeUserInfo };
};

export default useAuth;
