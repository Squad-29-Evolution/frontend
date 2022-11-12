import { createContext, useState, useEffect } from "react";
import { getToken, setToken } from "../utils/authToken";
import api from "../api";

export const AuthContext = createContext({});

export const AuthContextProvide = ({ children }) => {
  //TODO: refazer ess hook e  criar funções especifica para cada ação
  const [authUser, setAuthUser] = useState({
    isLoading: true,
    isUser: false,
    validToken: false,
    token: null,
    user: {
      name: null,
      picture: null,
      id: null,
      xp: null,
      role: null,
    },
  });
  const salveUserInfo = (data, token) => {
    return setAuthUser((prev) => {
      setToken(token);
      return {
        ...prev,
        isLoading: false,
        isUser: true,
        validToken: true,
        token: token,
        user: {
          name: data.name,
          picture: "https://avatars.dicebear.com/api/micah/asaaaaa.svg",
          id: data.id,
          xp: data.xp,
          role: data.role,
        },
      };
    });
  };

  const getUserInfo = () => {
    return authUser.user;
  };

  async function getAndVerifyUser(isToken) {
    try {
      const response = await api.post("/validatetoken", { token: isToken });

      if (response.status == 200 && !authUser.isUser) {
        const config = {
          headers: { Authorization: `Bearer ${isToken}` },
        };
        const { id } = response.data;

        const { data } = await api.get(`/users/${id}`, config);
        //console.log(data);

        return salveUserInfo(data, isToken);
      }

      return setAuthUser((prev) => {
        return { ...prev, validToken: true };
      });
    } catch (err) {
      console.log(err);
      return setAuthUser({
        ...authUser,
        isUser: false,
        token: null,
        isLoading: false,
      });
    }
  }

  useEffect(() => {
    const isToken = getToken();

    if (!isToken) return setAuthUser({ ...authUser, isLoading: false });

    setAuthUser({ ...authUser, isLoading: true });

    getAndVerifyUser(isToken);
  }, []);

  return (
    <AuthContext.Provider
      value={[authUser, getUserInfo, salveUserInfo, setAuthUser]}
    >
      {children}
    </AuthContext.Provider>
  );
};
