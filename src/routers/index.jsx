import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
