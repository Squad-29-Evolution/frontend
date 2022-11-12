import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const [authUser, getUserInfo, salveUserInfo, setAuthUser] =
    useContext(AuthContext);

  return { authUser, getUserInfo, salveUserInfo, setAuthUser };
};

export default useAuth;
