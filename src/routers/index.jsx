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
import AdminTrails from "../pages/AdminTrails";
import AdminContents from "../pages/AdminContents";
import Content from "../pages/Content";
import Courses from "../pages/Courses";
import TrailsUser from "../pages/TrailsUser";
import SelectTrail from "../pages/SelectTrail";
import VerifyFirstLogin from "./VerifyFirstLogin";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* user routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<VerifyFirstLogin />}>
            <Route element={<PrivateArea />}>
              <Route path="/" element={<Home />} />
              <Route path="/courses/:trail_id" element={<Courses />} />
              <Route path="/trails" element={<TrailsUser />} />
            </Route>
          </Route>
          <Route path="/selectyoutrail" element={<SelectTrail />} />
          <Route path="/content/:id/:trail_id" element={<Content />} />
        </Route>

        {/* admin routes */}
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/admin" element={<PrivateAreaAdmin />}>
            <Route path="/admin/members" element={<Members />} />
            <Route path="/admin/trails" element={<AdminTrails />} />
            <Route path="/admin/contents" element={<AdminContents />} />
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
