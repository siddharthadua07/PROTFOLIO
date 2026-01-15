import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ Dynamic route */}
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
