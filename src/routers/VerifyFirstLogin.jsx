import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const VerifyFistLogin = () => {
  const { authUser, getUserInfo } = useAuth();
  const { token } = authUser;
  const [isLoading, setIsLoading] = useState(false);

  const { id } = getUserInfo();
  const navigate = useNavigate();

  const verify = async () => {
    const alreadyExist = localStorage.getItem("firstLogin");

    if (alreadyExist) {
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      setIsLoading(true);
      const { data } = await api.get(`/getSalvedTrails/${id}`, config);
      if (data && data.length > 0) {
        return setIsLoading(false);
      }

      navigate("/selectyoutrail");
    } catch (error) {
      console.log(error);
    }
  };
  //<Navigate to={"/selectyoutrail"}
  useEffect(() => {
    verify();
  }, []);

  if (isLoading) return <Loading />;

  return <Outlet />;
};

export default VerifyFistLogin;
