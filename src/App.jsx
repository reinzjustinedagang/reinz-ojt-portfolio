import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TitlePage from "./pages/TitlePage";
import Introduction from "./pages/Introduction";
import Company from "./pages/Company";
import WorkExperience from "./pages/WorkExperience";
import Assessment from "./pages/Assessment";
import Appendices from "./pages/Appendices";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TitlePage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/company" element={<Company />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/appendices" element={<Appendices />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
