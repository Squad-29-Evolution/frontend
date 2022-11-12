import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RecoveryPass from "../pages/RecoveryPass";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import HomeAdmin from "../pages/HomeAdmin";
import PrivateArea from "../components/PrivateArea";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* user routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateArea />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>

        {/* admin routes */}
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/dashboad" element={<HomeAdmin />} />
        </Route>

        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/recoverypass" element={<RecoveryPass />} />
      </Routes>
    </Router>
  );
};

export default Routers;
