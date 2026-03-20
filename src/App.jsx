import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Me from "./pages/Me";
import PressContact from "./pages/PressContact";
import Exhibitions from "./pages/Exhibitions";
import Buy from "./pages/Buy";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="me" element={<Me />} />
          <Route path="press-contact" element={<PressContact />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="buy" element={<Buy />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}