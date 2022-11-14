import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RecoveryPass from "../pages/RecoveryPass";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import Members from "../pages/Members";
import PrivateArea from "../components/PrivateArea";
import PrivateAreaAdmin from "../components/PrivateAreaAdmin";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Content from "../pages/Content";
import Trails from "../pages/Trails";
import Courses from "../pages/Courses";
import TrailsUser from "../pages/TrailsUser";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* user routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateArea />}>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/content" element={<Content />} />
            <Route path="/trails" element={<TrailsUser />} />
          </Route>
        </Route>

        {/* admin routes */}
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/admin" element={<PrivateAreaAdmin />}>
            <Route path="/admin/members" element={<Members />} />
            <Route path="/admin/trails" element={<Trails />} />
          </Route>
        </Route>

        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/recoverypass" element={<RecoveryPass />} />
      </Routes>
    </Router>
  );
};

export default Routers;
