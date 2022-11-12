import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RecoveryPass from "../pages/RecoveryPass";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/recoverypass" element={<RecoveryPass />} />
      </Routes>
    </Router>
  );
};

export default Routers;
